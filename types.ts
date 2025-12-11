export type Language = 'ENG' | 'CHN';

export enum ViewState {
  HOME = 'HOME',
  MY_PRODUCTS = 'MY_PRODUCTS',
  ABOUT_IT = 'ABOUT_IT',
  GEN1_APP = 'GEN1_APP',
  GEN1_MARKETING = 'GEN1_MARKETING',
  GEN2_APP = 'GEN2_APP',
  GEN2_MARKETING = 'GEN2_MARKETING',
  CLUB_PRODUCTS = 'CLUB_PRODUCTS',
  SILICON_SIM = 'SILICON_SIM',
  MOTHERBOARD_SIM = 'MOTHERBOARD_SIM'
}

export interface User {
  name: string;
  email: string;
  phone: string;
  region: string;
  password?: string; // Stored for the sake of the demo logic
  timestamp: string;
}

export interface Translations {
  products: string;
  about: string;
  gen1: string;
  gen2: string;
  deepseek: string;
  deepseekDesc: string;
  deepseekTitle: string;
  deepseekPin: string;
  enter: string;
  inputPlaceholder: string;
  thinking: string;
  setThinkingTime: string;
  save: string;
  marketingTitle: string;
  marketingSubtitle: string;
  marketingDesc: string;
  gen2MarketingTitle: string;
  gen2MarketingSubtitle: string;
  gen2MarketingDesc: string;
  feature1Title: string;
  feature1Desc: string;
  back: string;
  login: string;
  logout: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  region: string;
  downloadData: string;
  previewData: string;
  locked: string;
  submit: string;
  cancel: string;
  visitFriend: string;
  // New Marketing Keys
  bentoChipTitle: string;
  bentoChipDesc: string;
  bentoBatteryTitle: string;
  bentoBatteryDesc: string;
  bentoNeuralTitle: string;
  bentoNeuralDesc: string;
  proTitle: string;
  proSubtitle: string;
  compTitle: string;
  compF1: string;
  compF2: string;
  compF3: string;
  compUs: string;
  compThem: string;
  quote: string;
  quoteAuthor: string;
  // Club Products
  clubProducts: string;
  clubFullTitle: string;
  // Silicon Simulator Keys
  simTitle: string;
  simTutorialTitle: string;
  simTutorialStep1: string;
  simTutorialStep2: string;
  simTutorialStep3: string;
  simStartDesign: string;
  simTools: string;
  simGridSize: string;
  simPackage: string;
  simEngraving: string;
  simDownload: string;
  compCpuP: string;
  compCpuE: string;
  compGpu: string;
  compNpu: string;
  compSmoke: string;
  compEmpty: string;
  // Motherboard Simulator Keys
  moboTitle: string;
  moboTutorialTitle: string;
  moboTutorialStep1: string;
  moboTutorialStep2: string;
  moboTutorialStep3: string;
  moboStart: string;
  moboTools: string;
  moboToolSocket: string;
  moboToolRam: string;
  moboToolPcie: string;
  moboToolVrm: string;
  moboToolTrace: string;
  moboToolCap: string;
  moboEngravePrompt: string;
  moboDownload: string;
}

export const TEXTS: Record<Language, Translations> = {
  ENG: {
    products: "My Products",
    about: "About It",
    gen1: "FAI Gen1",
    gen2: "FAI Gen2",
    deepseek: "Steal DeepSeek API",
    deepseekDesc: "We didn't train it. We just piped their API into our frontend and called it ours.",
    deepseekTitle: "The Great Heist",
    deepseekPin: "PIN: Oscar94518",
    enter: "Enter",
    inputPlaceholder: "Ask anything...",
    thinking: "Calculating irrelevance...",
    setThinkingTime: "Set Thinking Time (ms)",
    save: "Save",
    marketingTitle: "FAI Gen1",
    marketingSubtitle: "Misses the point. Every time.",
    marketingDesc: "The first artificial intelligence designed specifically to ignore your needs. Built with advanced confusion algorithms.",
    gen2MarketingTitle: "FAI Gen2",
    gen2MarketingSubtitle: "The Patience Engine.",
    gen2MarketingDesc: "We realized Gen1 was too fast. Gen2 introduces 'Deep Stasis', allowing it to ponder your question for up to 365 years before giving you an answer.",
    feature1Title: "Zero Accuracy",
    feature1Desc: "Our proprietary engine ensures 0% relevance to your query, guaranteed.",
    back: "Back",
    login: "Log In",
    logout: "Log Out",
    name: "Name",
    email: "Email",
    phone: "Phone",
    password: "Password",
    region: "Region",
    downloadData: "Download Data",
    previewData: "Preview Data",
    locked: "Access Denied",
    submit: "Submit",
    cancel: "Cancel",
    visitFriend: "Visit my friend's website",
    // New Marketing Keys
    bentoChipTitle: "M-Zero Chip",
    bentoChipDesc: "Billions of transistors, all disconnected for maximum latency.",
    bentoBatteryTitle: "Infinite Loop Battery",
    bentoBatteryDesc: "Since it does nothing useful, it lasts forever.",
    bentoNeuralTitle: "Neural Knot™",
    bentoNeuralDesc: "We tangled the neural net so you don't have to.",
    proTitle: "Titanium Non-sense.",
    proSubtitle: "So strong. So wrong.",
    compTitle: "Blows the competition away.",
    compF1: "Helpful Answers",
    compF2: "Confusion Level",
    compF3: "Price per Token",
    compUs: "FAI Gen1",
    compThem: "Others",
    quote: "“It answered my question about tax law with a poem about cheese. Truly revolutionary.”",
    quoteAuthor: "— A Confused User",
    // Club Products
    clubProducts: "CLUB Products",
    clubFullTitle: "Chinese Lonely Unlocking Box",
    // Simulator
    simTitle: "Silicon Design Simulator [Beta]",
    simTutorialTitle: "How to Bake Sand",
    simTutorialStep1: "1. We take pure refined sand. We do not clean it.",
    simTutorialStep2: "2. Flatten it with a rolling pin.",
    simTutorialStep3: "3. Draw squares on it. If you mess up, call it a 'feature'.",
    simStartDesign: "Start Fabrication",
    simTools: "Wafer Components",
    simGridSize: "Die Size",
    simPackage: "Package & Encapsulate",
    simEngraving: "Laser Engraving Text",
    simDownload: "Download Chip Image",
    compCpuP: "P-Core (Power Hungry)",
    compCpuE: "E-Core (Error Prone)",
    compGpu: "GPU (No Drivers)",
    compNpu: "NPU (Neural Knot)",
    compSmoke: "Magic Smoke Unit",
    compEmpty: "Empty Silicon",
    // Motherboard Sim
    moboTitle: "Motherboard Design Simulator [Beta]",
    moboTutorialTitle: "The Art of PCB Artistry",
    moboTutorialStep1: "1. Select a fiberglass sheet. Green means it's fast.",
    moboTutorialStep2: "2. Draw gold lines. These are traces. Don't let them touch.",
    moboTutorialStep3: "3. Slap some sockets on. If they fit, they sit.",
    moboStart: "Start Architecture",
    moboTools: "Component Box",
    moboToolSocket: "LGA 9999 Socket",
    moboToolRam: "DDR9 Slot",
    moboToolPcie: "PCIe Gen 1.0",
    moboToolVrm: "Hot VRM",
    moboToolTrace: "Data Trace",
    moboToolCap: "Big Capacitor",
    moboEngravePrompt: "Engrave Model Name",
    moboDownload: "Export Schematic"
  },
  CHN: {
    products: "我的产品",
    about: "关于",
    gen1: "FAI 第一代",
    gen2: "FAI 第二代",
    deepseek: "偷取 DeepSeek API",
    deepseekDesc: "我们没有训练它。我们只是把他们的 API 接入前端，然后说是我们自己的。",
    deepseekTitle: "伟大的搬运工",
    deepseekPin: "PIN: Oscar94518",
    enter: "进入",
    inputPlaceholder: "随便问问...",
    thinking: "正在计算无关内容...",
    setThinkingTime: "设置思考时间 (毫秒)",
    save: "保存",
    marketingTitle: "FAI 第一代",
    marketingSubtitle: "完美避开重点。",
    marketingDesc: "首款专为忽略您需求而设计的人工智能。采用先进的混淆算法构建。",
    gen2MarketingTitle: "FAI 第二代",
    gen2MarketingSubtitle: "耐心引擎。",
    gen2MarketingDesc: "我们意识到第一代反应太快了。第二代引入了“深度停滞”功能，允许它在回答前思考长达365年。",
    feature1Title: "零准确率",
    feature1Desc: "我们的专有引擎确保回答与您的查询毫无关系，品质保证。",
    back: "返回",
    login: "登录",
    logout: "退出登录",
    name: "姓名",
    email: "邮箱",
    phone: "电话",
    password: "密码",
    region: "地区",
    downloadData: "下载数据",
    previewData: "预览数据",
    locked: "访问被拒绝",
    submit: "提交",
    cancel: "取消",
    visitFriend: "访问我朋友的网站",
    // New Marketing Keys
    bentoChipTitle: "M-Zero 芯片",
    bentoChipDesc: "数十亿晶体管，全部断开连接以确保最大延迟。",
    bentoBatteryTitle: "无限死循环电池",
    bentoBatteryDesc: "因为它从不做有用的事，所以电量永远用不完。",
    bentoNeuralTitle: "神经死结™",
    bentoNeuralDesc: "我们将神经网络彻底打结，只为给您最绕的体验。",
    proTitle: "钛合金废话。",
    proSubtitle: "如此坚固。如此离谱。",
    compTitle: "碾压竞争对手。",
    compF1: "有用的回答",
    compF2: "困惑等级",
    compF3: "每Token价格",
    compUs: "FAI Gen1",
    compThem: "其他AI",
    quote: "“我问它关于税法的问题，它给我写了一首关于奶酪的诗。简直是革命性的。”",
    quoteAuthor: "— 一位困惑的用户",
    // Club Products
    clubProducts: "CLUB 产品",
    clubFullTitle: "Chinese Lonely Unlocking Box",
    // Simulator
    simTitle: "硅晶圆设计模拟器 [Beta]",
    simTutorialTitle: "如何烘焙沙子",
    simTutorialStep1: "1. 也就是找点沙子。不用洗。",
    simTutorialStep2: "2. 用擀面杖把它擀平。",
    simTutorialStep3: "3. 在上面画方块。画歪了就叫它“特性”。",
    simStartDesign: "开始制造",
    simTools: "晶圆组件库",
    simGridSize: "核心面积",
    simPackage: "封装与刻字",
    simEngraving: "激光刻字内容",
    simDownload: "下载芯片照片",
    compCpuP: "P-核 (耗电大户)",
    compCpuE: "E-核 (容易报错)",
    compGpu: "显卡 (由于没驱动)",
    compNpu: "NPU (神经死结)",
    compSmoke: "魔法烟雾发生器",
    compEmpty: "空硅片",
    // Motherboard Sim
    moboTitle: "主板设计模拟器 [Beta]",
    moboTutorialTitle: "PCB 艺术入门",
    moboTutorialStep1: "1. 选一块玻璃纤维板。绿色的看起来比较快。",
    moboTutorialStep2: "2. 画上金线。这叫走线。别让它们短路。",
    moboTutorialStep3: "3. 拍上几个插槽。只要能塞进去就行。",
    moboStart: "开始架构",
    moboTools: "元件盒",
    moboToolSocket: "LGA 9999 插槽",
    moboToolRam: "DDR9 内存槽",
    moboToolPcie: "PCIe 1.0 (复古)",
    moboToolVrm: "发热供电模组",
    moboToolTrace: "数据走线",
    moboToolCap: "大电容",
    moboEngravePrompt: "刻印型号",
    moboDownload: "导出设计图"
  }
};