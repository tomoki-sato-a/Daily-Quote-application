const QUOTES_DATA = [
  // ===== 人生の教訓 1〜50 =====
  {
    text: "完璧を待っている間に、挑戦するチャンスは通り過ぎていく。",
    author: "Unknown",
    tags: ["lifeLesson", "challenge", "action"]
  },
  {
    text: "小さな後悔を放置すると、やがて大きなため息に育ってしまう。",
    author: "Unknown",
    tags: ["lifeLesson", "regret", "reflection"]
  },
  {
    text: "他人の評価は変えられないが、自分の態度はいつでも変えられる。",
    author: "Unknown",
    tags: ["lifeLesson", "mindset", "selfControl"]
  },
  {
    text: "忙しさを言い訳にすると、本当に大事なものから遠ざかってしまう。",
    author: "Unknown",
    tags: ["lifeLesson", "priority", "time"]
  },
  {
    text: "「また今度」は、たいてい二度と来ない。",
    author: "Unknown",
    tags: ["lifeLesson", "procrastination", "action"]
  },
  {
    text: "つらかった経験ほど、後から一番語りたくなる物語になる。",
    author: "Unknown",
    tags: ["lifeLesson", "growth", "story"]
  },
  {
    text: "うまくいかない日があるから、うまくいく日の価値が上がる。",
    author: "Unknown",
    tags: ["lifeLesson", "contrast", "gratitude"]
  },
  {
    text: "選ばなかった道を悔やむより、選んだ道を面白くしていけばいい。",
    author: "Unknown",
    tags: ["lifeLesson", "choice", "ownership"]
  },
  {
    text: "他人と比べるとき、人は自分の弱点と相手の長所だけを見がちだ。",
    author: "Unknown",
    tags: ["lifeLesson", "comparison", "selfAcceptance"]
  },
  {
    text: "「どう思われるか」より「どう生きたいか」で決めた方が後悔は少ない。",
    author: "Unknown",
    tags: ["lifeLesson", "decision", "authenticity"]
  },
  {
    text: "やめたくなったときこそ、最初に決めた理由を思い出してみる。",
    author: "Unknown",
    tags: ["lifeLesson", "motivation", "perseverance"]
  },
  {
    text: "優しさは、急いでいるときほど試される。",
    author: "Unknown",
    tags: ["lifeLesson", "kindness", "priority"]
  },
  {
    text: "環境が変わるのを待つより、自分が変わった方が早いことも多い。",
    author: "Unknown",
    tags: ["lifeLesson", "change", "selfImprovement"]
  },
  {
    text: "「向いていない」のではなく「まだ慣れていない」だけのことが多い。",
    author: "Unknown",
    tags: ["lifeLesson", "skill", "mindset"]
  },
  {
    text: "本当に疲れているときほど、ちゃんと休む勇気が必要になる。",
    author: "Unknown",
    tags: ["lifeLesson", "rest", "health"]
  },
  {
    text: "小さな約束を守る人は、大きな信頼を手に入れる。",
    author: "Unknown",
    tags: ["lifeLesson", "trust", "integrity"]
  },
  {
    text: "「忙しい」を口癖にすると、チャンスも人間関係も離れていく。",
    author: "Unknown",
    tags: ["lifeLesson", "habit", "communication"]
  },
  {
    text: "悲しいときは無理に前向きにならなくていい。ただ止まらないことだけ決めておく。",
    author: "Unknown",
    tags: ["lifeLesson", "emotion", "resilience"]
  },
  {
    text: "諦めるか続けるかで迷ったら、未来の自分が喜ぶ方を選んでみる。",
    author: "Unknown",
    tags: ["lifeLesson", "future", "decision"]
  },
  {
    text: "一度失った信頼を取り戻すには、時間と一貫性しかない。",
    author: "Unknown",
    tags: ["lifeLesson", "trust", "repair"]
  },
  {
    text: "正解がわからないときは、「よりマシな間違い」を選ぶつもりで決めてみる。",
    author: "Unknown",
    tags: ["lifeLesson", "decision", "uncertainty"]
  },
  {
    text: "「大したことないよ」と笑える悩みは、かつて本気で悩んだ証拠でもある。",
    author: "Unknown",
    tags: ["lifeLesson", "growth", "perspective"]
  },
  {
    text: "本音を言わない優しさは、長期的には不親切になることもある。",
    author: "Unknown",
    tags: ["lifeLesson", "communication", "honesty"]
  },
  {
    text: "調子がいいときほど、調子に乗りすぎない意識が自分を守ってくれる。",
    author: "Unknown",
    tags: ["lifeLesson", "humility", "balance"]
  },
  {
    text: "やりたくないことを続けるより、やりたいことを小さく始める方が人生は動く。",
    author: "Unknown",
    tags: ["lifeLesson", "career", "action"]
  },
  {
    text: "誰かの期待を満たすために生きると、自分の期待を置き去りにしてしまう。",
    author: "Unknown",
    tags: ["lifeLesson", "expectation", "selfRespect"]
  },
  {
    text: "謝るタイミングを逃すと、関係を修復するコストは一気に上がる。",
    author: "Unknown",
    tags: ["lifeLesson", "apology", "relationship"]
  },
  {
    text: "未来を変える一番シンプルな方法は、今日の習慣をひとつ変えることだ。",
    author: "Unknown",
    tags: ["lifeLesson", "habit", "future"]
  },
  {
    text: "「自分なんて」と言い続けると、本当に自分を小さくしてしまう。",
    author: "Unknown",
    tags: ["lifeLesson", "selfTalk", "selfEsteem"]
  },
  {
    text: "逃げることが悪いのではない。戻る場所を失うまで逃げ続けるのが危険なのだ。",
    author: "Unknown",
    tags: ["lifeLesson", "escape", "courage"]
  },
  {
    text: "気まずさをごまかす沈黙より、ぎこちなくても誠実な一言の方が価値がある。",
    author: "Unknown",
    tags: ["lifeLesson", "communication", "courage"]
  },
  {
    text: "過去を変えようとするより、意味づけを変えた方が心は軽くなる。",
    author: "Unknown",
    tags: ["lifeLesson", "past", "reframe"]
  },
  {
    text: "楽な道を選ぶときは、後で払うコストも一緒に想像しておくといい。",
    author: "Unknown",
    tags: ["lifeLesson", "cost", "decision"]
  },
  {
    text: "人は「理解された」と感じたとき、一番素直になれる。",
    author: "Unknown",
    tags: ["lifeLesson", "empathy", "relationship"]
  },
  {
    text: "チャンスは一度だけとは限らないが、同じ形で来るとは限らない。",
    author: "Unknown",
    tags: ["lifeLesson", "opportunity", "timing"]
  },
  {
    text: "何を持っているかより、何を手放せるかで身軽さが決まる。",
    author: "Unknown",
    tags: ["lifeLesson", "minimalism", "freedom"]
  },
  {
    text: "「自分だけ損をしている」と感じるときは、視野が狭くなっているサインかもしれない。",
    author: "Unknown",
    tags: ["lifeLesson", "perspective", "emotion"]
  },
  {
    text: "感謝は、足りないものではなく、すでにあるものに光を当てる行為だ。",
    author: "Unknown",
    tags: ["lifeLesson", "gratitude", "mindset"]
  },
  {
    text: "弱みを隠すより、弱みを扱える強さを身につけた方が長く戦える。",
    author: "Unknown",
    tags: ["lifeLesson", "vulnerability", "strength"]
  },
  {
    text: "一度決めた「優先順位」を、本当にそのままにしていていいか、ときどき疑ってみる。",
    author: "Unknown",
    tags: ["lifeLesson", "priority", "reflection"]
  },
  {
    text: "笑い合える相手がいるだけで、人生の難易度は少し下がる。",
    author: "Unknown",
    tags: ["lifeLesson", "relationship", "joy"]
  },
  {
    text: "人に優しくすることと、自分に厳しくしすぎないことは、両立していていい。",
    author: "Unknown",
    tags: ["lifeLesson", "kindness", "selfCompassion"]
  },
  {
    text: "タイミングが悪かっただけの失敗もある。自分の価値まで下げる必要はない。",
    author: "Unknown",
    tags: ["lifeLesson", "failure", "selfWorth"]
  },
  {
    text: "本当に変えたいのは「結果」ではなく、「結果に至る考え方」であることが多い。",
    author: "Unknown",
    tags: ["lifeLesson", "mindset", "change"]
  },
  {
    text: "たまたま出会った一冊の本や一言が、人生の方向を静かに変えることがある。",
    author: "Unknown",
    tags: ["lifeLesson", "chance", "inspiration"]
  },
  {
    text: "「幸せかどうか」は、他人との比較ではなく、昨日の自分との比較で決めてみる。",
    author: "Unknown",
    tags: ["lifeLesson", "happiness", "comparison"]
  },
  {
    text: "うまくいっているときも、支えてくれている人の存在を忘れないようにしたい。",
    author: "Unknown",
    tags: ["lifeLesson", "gratitude", "relationship"]
  },
  {
    text: "目の前の一歩を軽くする工夫が、長い道のりを歩き切るコツになる。",
    author: "Unknown",
    tags: ["lifeLesson", "habit", "sustainability"]
  },
  {
    text: "人を変えようとする前に、自分の態度を一つ変えてみると、景色が少し変わる。",
    author: "Unknown",
    tags: ["lifeLesson", "relationship", "change"]
  },

  // ===== 学習系 51〜80 =====
  {
    text: "一度で理解できないからこそ、学ぶ価値がある。",
    author: "Unknown",
    tags: ["learning", "difficulty", "growth"]
  },
  {
    text: "わかったつもりを疑うところから、本当の学びが始まる。",
    author: "Unknown",
    tags: ["learning", "reflection", "humility"]
  },
  {
    text: "アウトプットできない知識は、まだ借り物のままだ。",
    author: "Unknown",
    tags: ["learning", "output", "practice"]
  },
  {
    text: "毎日5分の勉強でも、1年後には「何もしない人」と別世界にいる。",
    author: "Unknown",
    tags: ["learning", "habit", "longTerm"]
  },
  {
    text: "「難しい」は敵ではなく、理解を深めるための道標だ。",
    author: "Unknown",
    tags: ["learning", "difficulty", "mindset"]
  },
  {
    text: "完璧な教材を探すより、今ある教材をやり切った方が力になる。",
    author: "Unknown",
    tags: ["learning", "action", "focus"]
  },
  {
    text: "間違えた回数が多いほど、その分だけ説明がうまくなる。",
    author: "Unknown",
    tags: ["learning", "mistake", "teaching"]
  },
  {
    text: "「できるようになった自分」を想像しながら勉強すると、少しだけ粘れる。",
    author: "Unknown",
    tags: ["learning", "motivation", "future"]
  },
  {
    text: "メモを取るのは、忘れないためだけでなく、考えを整理するためでもある。",
    author: "Unknown",
    tags: ["learning", "note", "thinking"]
  },
  {
    text: "質問する勇気を持つ人は、沈黙している人より早く成長する。",
    author: "Unknown",
    tags: ["learning", "question", "courage"]
  },
  {
    text: "他人に教えようとすると、自分の理解の穴が一番よく見える。",
    author: "Unknown",
    tags: ["learning", "teaching", "reflection"]
  },
  {
    text: "知識は「集める」だけでは増えない。「つなげる」ときに力になる。",
    author: "Unknown",
    tags: ["learning", "knowledge", "connection"]
  },
  {
    text: "覚えられないのではなく、まだ自分の言葉に翻訳できていないだけかもしれない。",
    author: "Unknown",
    tags: ["learning", "memory", "expression"]
  },
  {
    text: "一気にやるより、忘れそうになったころに復習する方が身につく。",
    author: "Unknown",
    tags: ["learning", "review", "memory"]
  },
  {
    text: "苦手分野に手をつけた瞬間、その日を成長の記念日にできる。",
    author: "Unknown",
    tags: ["learning", "challenge", "growth"]
  },
  {
    text: "「今日はここまでやる」と決めてから始めると、集中力の質が変わる。",
    author: "Unknown",
    tags: ["learning", "focus", "planning"]
  },
  {
    text: "理解のスピードは人それぞれだが、続けるかどうかは自分で選べる。",
    author: "Unknown",
    tags: ["learning", "pace", "perseverance"]
  },
  {
    text: "失敗した問題こそ、次に解けたときの達成感が一番大きい。",
    author: "Unknown",
    tags: ["learning", "failure", "reward"]
  },
  {
    text: "「何がわからないか」を言葉にできたら、半分は前に進んでいる。",
    author: "Unknown",
    tags: ["learning", "meta", "clarity"]
  },
  {
    text: "新しい概念に出会ったときは、まず自分の経験に結びつけてみる。",
    author: "Unknown",
    tags: ["learning", "concept", "experience"]
  },
  {
    text: "インプットが増えすぎて苦しくなったら、一度アウトプットで整理してみる。",
    author: "Unknown",
    tags: ["learning", "balance", "output"]
  },
  {
    text: "学び続ける人は、年齢よりも好奇心の量で若さが決まる。",
    author: "Unknown",
    tags: ["learning", "curiosity", "age"]
  },
  {
    text: "「わからない」と素直に言える環境は、最高の学習ツールだ。",
    author: "Unknown",
    tags: ["learning", "environment", "safety"]
  },
  {
    text: "楽して覚えたことは、楽に忘れてしまう。",
    author: "Unknown",
    tags: ["learning", "effort", "memory"]
  },
  {
    text: "復習は「同じことの繰り返し」ではなく、「別の角度からの再会」だ。",
    author: "Unknown",
    tags: ["learning", "review", "perspective"]
  },
  {
    text: "わからない部分をメモしておくと、成長した自分が後からそれを答えに変えてくれる。",
    author: "Unknown",
    tags: ["learning", "note", "progress"]
  },
  {
    text: "学ぶ理由を見失ったときは、「誰の役に立てるか」を考えてみる。",
    author: "Unknown",
    tags: ["learning", "purpose", "motivation"]
  },
  {
    text: "短時間でも毎日触れていると、ある日突然つながる瞬間が来る。",
    author: "Unknown",
    tags: ["learning", "habit", "breakthrough"]
  },
  {
    text: "知識を増やすことより、判断を少しだけマシにするために学ぶ。",
    author: "Unknown",
    tags: ["learning", "decision", "practical"]
  },
  {
    text: "学びの停滞期は、実は新しい理解が育っている準備期間かもしれない。",
    author: "Unknown",
    tags: ["learning", "plateau", "growth"]
  },

  // ===== 哲学系 81〜100 =====
  {
    text: "時間は誰に対しても平等だが、意味づけは人それぞれだ。",
    author: "Unknown",
    tags: ["philosophy", "time", "meaning"]
  },
  {
    text: "「正しさ」は時代とともに変わるが、「誠実さ」は時代を超えて問われ続ける。",
    author: "Unknown",
    tags: ["philosophy", "ethics", "integrity"]
  },
  {
    text: "人生に正解がないとすれば、歩き方そのものが答えになる。",
    author: "Unknown",
    tags: ["philosophy", "life", "answer"]
  },
  {
    text: "自由とは、選べることではなく、選んだ結果を引き受ける覚悟かもしれない。",
    author: "Unknown",
    tags: ["philosophy", "freedom", "responsibility"]
  },
  {
    text: "「普通」という言葉は、安心もくれるが、可能性も削り取ってしまうことがある。",
    author: "Unknown",
    tags: ["philosophy", "normal", "possibility"]
  },
  {
    text: "真実はひとつでも、そこに至る物語は人の数だけある。",
    author: "Unknown",
    tags: ["philosophy", "truth", "story"]
  },
  {
    text: "他人の目を意識するたびに、本当の自分から少しずつ離れていく。",
    author: "Unknown",
    tags: ["philosophy", "self", "society"]
  },
  {
    text: "「当たり前」と思っていることを一度疑ってみると、新しい景色が現れる。",
    author: "Unknown",
    tags: ["philosophy", "question", "perspective"]
  },
  {
    text: "幸せは、追いかける対象というより、気づく感覚に近い。",
    author: "Unknown",
    tags: ["philosophy", "happiness", "awareness"]
  },
  {
    text: "言葉は現実を説明する道具でもあり、現実の見え方を作り変えるレンズでもある。",
    author: "Unknown",
    tags: ["philosophy", "language", "perception"]
  },
  {
    text: "孤独は、他人に囲まれていても感じるし、一人でも感じないことがある。",
    author: "Unknown",
    tags: ["philosophy", "loneliness", "connection"]
  },
  {
    text: "矛盾を抱えたまま生きることを、私たちは大人と呼んでいるのかもしれない。",
    author: "Unknown",
    tags: ["philosophy", "paradox", "maturity"]
  },
  {
    text: "「正しい答え」より、「問い続ける姿勢」の方が、その人らしさを表す。",
    author: "Unknown",
    tags: ["philosophy", "question", "identity"]
  },
  {
    text: "同じ景色を見ても、心の状態によってまったく違う世界に見える。",
    author: "Unknown",
    tags: ["philosophy", "mind", "perception"]
  },
  {
    text: "死を意識したとき、やっと本当に生きようと決められることがある。",
    author: "Unknown",
    tags: ["philosophy", "life", "death"]
  },
  {
    text: "「変わりたい」と言いながら、変わらない理由を探してしまうのが人間だ。",
    author: "Unknown",
    tags: ["philosophy", "change", "human"]
  },
  {
    text: "正しさを主張する声が大きくなるときほど、静かな違和感に耳を澄ませたい。",
    author: "Unknown",
    tags: ["philosophy", "doubt", "society"]
  },
  {
    text: "過去は変えられないが、過去から何を受け取るかは、今この瞬間に決められる。",
    author: "Unknown",
    tags: ["philosophy", "past", "interpretation"]
  },
  {
    text: "自分を知ることは、世界を理解するための一番近い入口かもしれない。",
    author: "Unknown",
    tags: ["philosophy", "selfKnowledge", "world"]
  },
  {
    text: "矛盾する感情が同時に存在できるところに、人間の奥行きが生まれる。",
    author: "Unknown",
    tags: ["philosophy", "emotion", "depth"]
  }
];
