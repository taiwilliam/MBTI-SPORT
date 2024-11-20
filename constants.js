const QUESTIONS_DATA = [
  {
    id: 0,
    quadrant: 'AD',
    type: 'A',
    number: 1,
    question: '您傾向於比賽剛開始時就勇於發起進攻',
  },
  {
    id: 1,
    quadrant: 'AD',
    type: 'A',
    number: 2,
    question: '您平常喜歡透過冒險獲得更大的成果',
  },
  {
    id: 2,
    quadrant: 'AD',
    type: 'A',
    number: 3,
    question: '於比賽中的關鍵時刻您通常會選擇藉由進攻得分',
  },
  {
    id: 3,
    quadrant: 'AD',
    type: 'A',
    number: 4,
    question: '當比數落後時會讓您更加積極進攻得分',
  },
  {
    id: 4,
    quadrant: 'AD',
    type: 'A',
    number: 5,
    question: '您於比賽中時常能保有強烈的自信心',
  },
  {
    id: 5,
    quadrant: 'AD',
    type: 'D',
    number: 6,
    question: '當比數領先對手時會使您降低進攻欲望轉而以防守進行得分',
  },
  {
    id: 6,
    quadrant: 'AD',
    type: 'D',
    number: 7,
    question: '比起直接進攻得分您更傾向先控制住對手',
  },
  {
    id: 7,
    quadrant: 'AD',
    type: 'D',
    number: 8,
    question: '於比賽中您時常耐心等待對方犯錯或出現機會再適時反擊',
  },
  {
    id: 8,
    quadrant: 'AD',
    type: 'D',
    number: 9,
    question: '於平時的練習中比起提升攻擊能力您更願意提升防守能力',
  },
  {
    id: 9,
    quadrant: 'AD',
    type: 'D',
    number: 10,
    question: '自己主動攻擊失誤會後使您下一次選擇較為保守的策略',
  },
  {
    id: 10,
    quadrant: 'PR',
    type: 'P',
    number: 1,
    question: '比賽前您總是會針對對手進行調查及研究',
  },
  {
    id: 11,
    quadrant: 'PR',
    type: 'P',
    number: 2,
    question: '您認為賽前了解對手有助於您更容易贏得比賽',
  },
  {
    id: 12,
    quadrant: 'PR',
    type: 'P',
    number: 3,
    question: '您時常於賽前擬定一套戰術',
  },
  {
    id: 13,
    quadrant: 'PR',
    type: 'P',
    number: 4,
    question: '如果在賽前沒有充分的準備容易讓您感到緊張',
  },
  {
    id: 14,
    quadrant: 'PR',
    type: 'P',
    number: 5,
    question: '您總是在賽前研究對手的優缺點後再進行訓練',
  },
  {
    id: 15,
    quadrant: 'PR',
    type: 'R',
    number: 6,
    question: '面對比賽中各種狀況您總能迅速做出應對',
  },
  {
    id: 16,
    quadrant: 'PR',
    type: 'R',
    number: 7,
    question: '您對於自己身體所做出的動作掌握度很高',
  },
  {
    id: 17,
    quadrant: 'PR',
    type: 'R',
    number: 8,
    question: '您在比賽中經常保持高度專注觀察對手的動作及賽場氣氛的變化',
  },
  {
    id: 18,
    quadrant: 'PR',
    type: 'R',
    number: 9,
    question: '您在比賽中經常是憑感覺應對對手',
  },
  {
    id: 19,
    quadrant: 'PR',
    type: 'R',
    number: 10,
    question: '您在比賽中總能在短時間內迅速做出最佳的決策',
  },
  {
    id: 20,
    quadrant: 'SC',
    type: 'S',
    number: 1,
    question: '您於比賽中經常會以喊聲激勵自己',
  },
  {
    id: 21,
    quadrant: 'SC',
    type: 'S',
    number: 2,
    question: '比賽中若有觀眾在場邊會有助於您比賽的表現',
  },
  {
    id: 22,
    quadrant: 'SC',
    type: 'S',
    number: 3,
    question: '在比賽中連續得分容易使您感到興奮、表現超常',
  },
  {
    id: 23,
    quadrant: 'SC',
    type: 'S',
    number: 4,
    question: '無論贏得比賽或輸掉比賽時您總是會有明顯的情緒起伏',
  },
  {
    id: 24,
    quadrant: 'SC',
    type: 'S',
    number: 5,
    question: '面對比自己強大的對手時容易使您感到興奮、表現超常',
  },
  {
    id: 25,
    quadrant: 'SC',
    type: 'C',
    number: 6,
    question: '您在比賽中無論面對什麼情況都能經常保持冷靜',
  },
  {
    id: 26,
    quadrant: 'SC',
    type: 'C',
    number: 7,
    question: '您在比賽中很少會有大好或大壞的表現',
  },
  {
    id: 27,
    quadrant: 'SC',
    type: 'C',
    number: 8,
    question: '儘管於比賽中連續失分您總能迅速調整技戰術應對對手',
  },
  {
    id: 28,
    quadrant: 'SC',
    type: 'C',
    number: 9,
    question: '不論面對什麼樣的對手您總能發揮出平時應有的水準',
  },
  {
    id: 29,
    quadrant: 'SC',
    type: 'C',
    number: 10,
    question: '您在比賽中的關鍵時刻總是能保持平常心發揮',
  },
  {
    id: 30,
    quadrant: 'IT',
    type: 'I',
    number: 1,
    question: '相較於團隊榮譽您更重視個人榮譽',
  },
  {
    id: 31,
    quadrant: 'IT',
    type: 'I',
    number: 2,
    question: '比賽失落時比起隊友的關心鼓勵,您更希望能自己獨處思考',
  },
  {
    id: 32,
    quadrant: 'IT',
    type: 'I',
    number: 3,
    question: '於比賽中的關鍵時刻您會希望把取勝的機會由自己來發揮',
  },
  {
    id: 33,
    quadrant: 'IT',
    type: 'I',
    number: 4,
    question: '儘管在團隊中您仍會保持強烈的競爭意識',
  },
  {
    id: 34,
    quadrant: 'IT',
    type: 'I',
    number: 5,
    question: '相較於團隊的需求,您通常更優先考量自身的發展及表現',
  },
  {
    id: 35,
    quadrant: 'IT',
    type: 'T',
    number: 6,
    question: '您認為團隊訓練更有助於提升自己的訓練效率',
  },
  {
    id: 36,
    quadrant: 'IT',
    type: 'T',
    number: 7,
    question: '在比賽或訓練中您會比較依賴教練或團隊給您的建議',
  },
  {
    id: 37,
    quadrant: 'IT',
    type: 'T',
    number: 8,
    question: '您具備優秀的適應能力能為了團隊的需求調整自己的角色或任務',
  },
  {
    id: 38,
    quadrant: 'IT',
    type: 'T',
    number: 9,
    question: '您善於溝通能有效傳遞戰術給隊友,也能接受隊友的建議',
  },
  {
    id: 39,
    quadrant: 'IT',
    type: 'T',
    number: 10,
    question: '您願意分享自己的經驗給隊友幫助隊友成長',
  },
]

// 分數相同時的預設結果
const DEFAULT_RESULT = {
  'AD': 'D',
  'PR': 'P',
  'SC': 'C',
  'IT': 'T',
}

const MBTI_CATEGORY = [
  'AD', 'IT', 'PR', 'SC'
]

// 結果對照表
const QUESTIONS_RESULT = [
  {
    id: 'APSI',
    img: './src/1.svg',
    name: '暗殺者',
    description: '進攻型且敏感型，善於在瞬間掌控比賽，對對手動作的反應迅速且精確，總是能迅速抓住機會發動致命攻擊。'
  },
  {
    id: 'APST',
    img: './src/2.svg',
    name: '忍者',
    description: '進攻型且穩定型，強調在穩定中發揮爆發力，具有持久的戰鬥能力並能在每一個關鍵時刻發揮超常實力。'
  },
  {
    id: 'APCI',
    img: './src/3.svg',
    name: '狙擊手',
    description: '計畫型且敏感型，總是提前預測對手的行動，準確度極高，能冷靜計算每一步行動並瞬間做出反應。'
  },
  {
    id: 'APCT',
    img: './src/4.svg',
    name: '騎砲手',
    description: '進攻型且穩定型，能在攻擊中穩定發揮實力，像是戰場上的騎兵，攻擊迅速且高效，擅長突破防守。'
  },
  {
    id: 'ARSI',
    img: './src/5.svg',
    name: '狂戰士',
    description: '進攻型且敏感型，戰鬥中充滿激烈的動力，能在混亂中快速做出反應，攻擊強勁並快速反擊。'
  },
  {
    id: 'ARST',
    img: './src/6.svg',
    name: '戰狼',
    description: '進攻型且穩定型，具備持久的耐力，並能在長時間的對抗中穩定保持攻勢，是場上無懼強敵的強者。'
  },
  {
    id: 'ARCI',
    img: './src/7.svg',
    name: '遊俠',
    description: '計畫型且敏感型，精確的步伐與時機掌握讓他們能在賽場中精細調整，無論任何情況都能冷靜處理。'
  },
  {
    id: 'ARCT',
    img: './src/8.svg',
    name: '先鋒騎士',
    description: '進攻型且穩定型，身為戰場上的領袖，他們能在穩定中領導隊伍發起攻擊，結合計畫與持久性。'
  },
  {
    id: 'DPSI',
    img: './src/9.svg',
    name: '操獸使',
    description: '計畫型且敏感型，與隊伍間的協作極佳，擅長應對快速變動的局面，並且能預測對手的每一個動作。'
  },
  {
    id: 'DPST',
    img: './src/10.svg',
    name: '盾衛士',
    description: '防守型且穩定型，穩健的防守反擊，使得他們在長時間比賽中始終保持優勢，讓對手無法輕易突破防線。'
  },
  {
    id: 'DPCI',
    img: './src/11.svg',
    name: '幻術士',
    description: '防守型且敏感型，擅長對敵人行動的預測與反擊，並能夠在比賽中運用細膩的計算來迷惑對手。'
  },
  {
    id: 'DPCT',
    img: './src/12.svg',
    name: '牧師',
    description: '防守型且穩定型，總是能以冷靜且理性的態度應對比賽，穩固的防守並且能持久支持隊伍。'
  },
  {
    id: 'DRSI',
    img: './src/13.svg',
    name: '長槍使',
    description: '計畫型且敏感型，擅長分析戰場並精確打擊對手，對局勢的理解深刻且敏銳，時刻能抓住有利時機。'
  },
  {
    id: 'DRST',
    img: './src/14.svg',
    name: '槍盾士',
    description: '防守型且穩定型，強調穩定的防守及巧妙的反擊，能夠在混亂的局面中依靠防守策略確保勝利。'
  },
  {
    id: 'DRCI',
    img: './src/15.svg',
    name: '守護者',
    description: '防守型且敏感型，冷靜且快速反應，對對手的每一個動作都能有適當的應對策略，堅守己方陣線。'
  },
  {
    id: 'DRCT',
    img: './src/16.svg',
    name: '護衛騎士',
    description: '防守型且穩定型，具備強大的防禦力和穩定的表現，能夠有效保護隊友並在戰鬥中長時間發揮作用。'
  }
]