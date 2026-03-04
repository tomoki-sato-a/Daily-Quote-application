// quotes-data.js で定義された QUOTES_DATA をそのまま使う
const quotes = QUOTES_DATA;

// 今日の日付（YYYY-MM-DD の文字列）を返す
function getTodayKey() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

// ランダムに1件選ぶ
function pickRandomQuote() {
  const idx = Math.floor(Math.random() * quotes.length);
  return quotes[idx];
}

// 今日の名言を表示する（forceNew=true で再抽選）
function showDailyQuote(forceNew = false) {
  const todayKey = getTodayKey();
  const storageKey = "daily-quote-local-v2";
  const storedRaw = localStorage.getItem(storageKey);

  let quoteObj;

  // 再抽選でなく、保存済みが今日のものであればそれを使う
  if (!forceNew && storedRaw) {
    try {
      const parsed = JSON.parse(storedRaw);
      if (parsed.date === todayKey && parsed.text) {
        quoteObj = parsed;
      }
    } catch {
      // パース失敗時は無視して新しく選ぶ
    }
  }

  // まだ決まっていなければ、新しく選ぶ
  if (!quoteObj) {
    const picked = pickRandomQuote();
    quoteObj = { date: todayKey, ...picked };
    localStorage.setItem(storageKey, JSON.stringify(quoteObj));
  }

  // 画面に反映
  const quoteEl = document.getElementById("quote");
  const footerEl = document.getElementById("quote-footer");

  quoteEl.textContent = quoteObj.text;

  // フェードイン
  quoteEl.classList.remove("quote-fade");
  void quoteEl.offsetWidth; // レイアウト再計算でアニメーションをリセット
  quoteEl.classList.add("quote-fade");

  if (footerEl) {
    const tagsText =
      quoteObj.tags && quoteObj.tags.length
        ? ` [${quoteObj.tags.join(", ")}]`
        : "";
    footerEl.textContent = `${todayKey} — ${quoteObj.author || "Unknown"}${tagsText}`;
  }
}

// 初期化とボタンイベント
window.addEventListener("DOMContentLoaded", () => {
  // 初回表示：1日1回ルール
  showDailyQuote(false);

  // ボタンで再抽選
  const button = document.getElementById("reroll-button");
  if (button) {
    button.addEventListener("click", () => {
      showDailyQuote(true);
    });
  }
});
