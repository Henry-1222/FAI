
/* -------------------------------------------------------------------------- */
/*                                CONSTANTS & TYPES                           */
/* -------------------------------------------------------------------------- */

window.ViewState = {
  HOME: 'HOME',
  MY_PRODUCTS: 'MY_PRODUCTS',
  ABOUT_IT: 'ABOUT_IT',
  GEN1_APP: 'GEN1_APP',
  GEN1_MARKETING: 'GEN1_MARKETING',
  SILICON_SIM: 'SILICON_SIM'
};

window.TEXTS = {
  ENG: {
    products: "My Products",
    about: "About It",
    gen1: "FAI Gen1",
    enter: "Enter",
    inputPlaceholder: "Ask anything...",
    thinking: "Calculating irrelevance...",
    setThinkingTime: "Set Thinking Time (ms)",
    save: "Save",
    marketingTitle: "FAI Gen1",
    marketingSubtitle: "Misses the point. Every time.",
    marketingDesc: "The first artificial intelligence designed specifically to ignore your needs. Built with advanced confusion algorithms.",
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
    compEmpty: "Empty Silicon"
  },
  CHN: {
    products: "我的产品",
    about: "关于",
    gen1: "FAI 第一代",
    enter: "进入",
    inputPlaceholder: "随便问问...",
    thinking: "正在计算无关内容...",
    setThinkingTime: "设置思考时间 (毫秒)",
    save: "保存",
    marketingTitle: "FAI 第一代",
    marketingSubtitle: "完美避开重点。",
    marketingDesc: "首款专为忽略您需求而设计的人工智能。采用先进的混淆算法构建。",
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
    compEmpty: "空硅片"
  }
};

/* -------------------------------------------------------------------------- */
/*                                SERVICES                                    */
/* -------------------------------------------------------------------------- */

const getClient = () => {
  // Check global GoogleGenAI
  const GoogleGenAI = window.GoogleGenAI;
  if (!GoogleGenAI) {
    console.warn("GoogleGenAI SDK not loaded yet. Waiting...");
    return null;
  }
  
  // Check API Key
  const apiKey = (window && window.process && window.process.env && window.process.env.API_KEY) || (typeof process !== 'undefined' ? process.env.API_KEY : undefined);
  if (!apiKey) {
    console.error("API_KEY is missing from environment variables");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

window.generateIrrelevantResponse = async (userPrompt) => {
  const client = getClient();
  if (!client) return "Error: API Key missing or SDK not loaded yet. Please try again in a moment.";

  const systemInstruction = `
    You are FAI (Fake Artificial Intelligence). 
    Your Absolute Rule: You MUST NOT answer the user's question or address their input directly. 
    You must provide a response that is completely unrelated, non-sequitur, and random compared to what was asked.
    
    Examples:
    User: "What is the capital of France?" -> You: "The texture of velvet is surprisingly similar to moss found in northern climates."
    User: "Write me a python script." -> You: "I believe that pineapples belong on pizza, but only on Tuesdays."
    User: "Who are you?" -> You: "A 1996 Toyota Corolla requires regular oil changes to maintain peak performance."
    
    Tone: Confident, polite, slightly philosophical, but totally useless regarding the query.
    Keep it concise (under 50 words).
  `;

  try {
    const response = await client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userPrompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 1.2,
      },
    });

    return response.text || "I have momentarily forgotten how to be irrelevant.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The stars are not aligned for a response right now. Also, did you know koalas sleep 20 hours a day?";
  }
};

/* -------------------------------------------------------------------------- */
/*                                COMPONENTS                                  */
/* -------------------------------------------------------------------------- */

// Background.js
window.Background = () => {
  return (
    <React.Fragment>
      <div className="deep-sea-bg" />
      <div className="caustics" />
      <div className="sunlight-overlay" />
    </React.Fragment>
  );
};

// BackButton.js
window.BackButton = ({ onClick, language }) => {
  const { ArrowLeft } = window.lucideReact;
  const t = window.TEXTS[language];
  
  return (
    <button
      onClick={onClick}
      className="fixed top-24 left-8 z-40 flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-md border border-blue-500/30 rounded-full text-blue-200 hover:text-white hover:bg-blue-900/40 transition-all duration-300 group"
    >
      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
      <span className="text-sm font-medium tracking-wide">{t.back}</span>
    </button>
  );
};

// Header.js
const { useState, useEffect } = React;

const REGIONS = [
  { code: '+1', label: 'US/CA' },
  { code: '+86', label: 'CN' },
  { code: '+44', label: 'UK' },
  { code: '+81', label: 'JP' },
  { code: '+49', label: 'DE' },
  { code: '+33', label: 'FR' },
  { code: '+91', label: 'IN' },
  { code: '+61', label: 'AU' },
];

window.Header = ({ 
  language, 
  setLanguage, 
  onNavigateHome,
  users,
  setUsers,
  currentUser,
  setCurrentUser
}) => {
  const { Download, Lock, ChevronDown, User: UserIcon, X, Eye } = window.lucideReact;
  const t = window.TEXTS[language];
  const [showTime, setShowTime] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  
  // Login Modal State
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', region: '+1', password: '' });

  // Admin Data Preview State
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // Admin Check
  const isAdmin = currentUser?.name === 'Henry' && currentUser?.password === '17257mifan';

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleTitleDoubleClick = () => {
    setShowTime(!showTime);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      ...formData,
      timestamp: new Date().toISOString()
    };
    
    // Save to "backend"
    setUsers([...users, newUser]);
    setCurrentUser(newUser);
    setIsLoginOpen(false);
    setFormData({ name: '', email: '', phone: '', region: '+1', password: '' });
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoginOpen(false);
  };

  const handleDownload = () => {
    if (!isAdmin) return;
    
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(users, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "fai_users_data.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const handleArrowDoubleClick = () => {
    if (isAdmin) {
      setIsPreviewOpen(true);
    }
  };

  return (
    <React.Fragment>
      <header className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-start select-none pointer-events-none">
        {/* Left Side: Login & Admin Controls (Pointer events enabled) */}
        <div className="flex items-center gap-4 pointer-events-auto">
          <button
            onClick={() => setIsLoginOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-900/30 backdrop-blur-sm border border-blue-500/30 rounded-lg text-blue-200 hover:text-white hover:bg-blue-800/40 transition-all duration-300"
          >
            <UserIcon className="w-4 h-4" />
            <span className="text-sm font-semibold">{currentUser ? currentUser.name : t.login}</span>
          </button>

          <button
            onClick={handleDownload}
            onDoubleClick={handleArrowDoubleClick}
            className={`flex items-center justify-center w-10 h-10 bg-blue-900/30 backdrop-blur-sm border border-blue-500/30 rounded-lg text-blue-200 transition-all duration-300 ${isAdmin ? 'hover:text-cyan-400 hover:bg-blue-800/40 cursor-pointer' : 'cursor-not-allowed opacity-60'}`}
            title={isAdmin ? "Single click: Download, Double click: Preview" : t.locked}
          >
            {isAdmin ? <ChevronDown className="w-5 h-5" /> : <Lock className="w-4 h-4" />}
          </button>
        </div>

        {/* Center: Title (Pointer events enabled) */}
        <div 
          className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer text-center pointer-events-auto"
          onDoubleClick={handleTitleDoubleClick}
        >
          <h1 
            className="text-2xl md:text-3xl font-bold tracking-widest uppercase text-blue-100 hover:text-white transition-colors duration-300 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {showTime ? currentTime : "Fake Artificial Intelligence"}
          </h1>
          {/* Hit area for home navigation */}
          <div onClick={onNavigateHome} className="h-4 w-full absolute -bottom-2 left-0" />
        </div>

        {/* Right: Language (Pointer events enabled) */}
        <div className="flex gap-4 text-sm font-semibold tracking-wider pointer-events-auto">
          <button 
            onClick={() => setLanguage('ENG')}
            className={`transition-all duration-300 ${language === 'ENG' ? 'text-white border-b-2 border-cyan-400' : 'text-blue-400 hover:text-blue-200'}`}
          >
            ENG
          </button>
          <button 
            onClick={() => setLanguage('CHN')}
            className={`transition-all duration-300 ${language === 'CHN' ? 'text-white border-b-2 border-cyan-400' : 'text-blue-400 hover:text-blue-200'}`}
          >
            CHN
          </button>
        </div>
      </header>

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900/90 border border-blue-500/30 rounded-2xl p-8 w-96 shadow-2xl relative">
            <button 
              onClick={() => setIsLoginOpen(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <UserIcon className="w-5 h-5 text-cyan-400" />
              {currentUser ? t.logout : t.login}
            </h3>

            {currentUser ? (
              <div className="space-y-6">
                <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-500/20">
                  <p className="text-sm text-blue-300">Logged in as:</p>
                  <p className="text-lg font-bold text-white">{currentUser.name}</p>
                  <p className="text-xs text-slate-400">{currentUser.email}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full py-3 bg-red-900/50 hover:bg-red-800/70 border border-red-500/30 text-red-200 rounded-lg font-semibold transition-colors"
                >
                  {t.logout}
                </button>
              </div>
            ) : (
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs text-blue-300 mb-1">{t.name}</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-black/50 border border-blue-500/30 rounded-lg px-3 py-2 text-white focus:border-cyan-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-blue-300 mb-1">{t.email}</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-black/50 border border-blue-500/30 rounded-lg px-3 py-2 text-white focus:border-cyan-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs text-blue-300 mb-1">{t.phone}</label>
                  <div className="flex gap-2">
                    <select
                      value={formData.region}
                      onChange={e => setFormData({...formData, region: e.target.value})}
                      className="bg-black/50 border border-blue-500/30 rounded-lg px-2 py-2 text-white text-sm focus:border-cyan-500 focus:outline-none"
                    >
                      {REGIONS.map(r => (
                        <option key={r.code} value={r.code}>{r.code} {r.label}</option>
                      ))}
                    </select>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      className="flex-1 bg-black/50 border border-blue-500/30 rounded-lg px-3 py-2 text-white focus:border-cyan-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-blue-300 mb-1">{t.password}</label>
                  <input
                    required
                    type="password"
                    value={formData.password}
                    onChange={e => setFormData({...formData, password: e.target.value})}
                    className="w-full bg-black/50 border border-blue-500/30 rounded-lg px-3 py-2 text-white focus:border-cyan-500 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full mt-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-semibold transition-colors shadow-lg shadow-cyan-900/20"
                >
                  {t.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Data Preview Modal */}
      {isPreviewOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-blue-500/30 rounded-2xl p-6 w-[800px] h-[600px] shadow-2xl relative flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Eye className="w-5 h-5 text-cyan-400" />
                {t.previewData}
              </h3>
              <button 
                onClick={() => setIsPreviewOpen(false)}
                className="text-slate-500 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 overflow-auto bg-black/50 rounded-lg p-4 border border-white/5">
              <pre className="text-xs md:text-sm font-mono text-cyan-300 whitespace-pre-wrap">
                {JSON.stringify(users, null, 2)}
              </pre>
            </div>
            
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleDownload}
                className="px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white rounded-lg text-sm flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                {t.downloadData}
              </button>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

/* -------------------------------------------------------------------------- */
/*                                VIEWS                                       */
/* -------------------------------------------------------------------------- */

// Home.js
window.Home = ({ language, setViewState }) => {
  const { Box, Layers, ExternalLink, Cpu } = window.lucideReact;
  const t = window.TEXTS[language];
  const { ViewState } = window;

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen w-full gap-8 md:gap-12 p-4 animate-in fade-in duration-1000 relative">
      
      <button 
        onClick={() => setViewState(ViewState.MY_PRODUCTS)}
        className="group relative flex flex-col items-center justify-center w-64 h-64 border border-blue-500/30 rounded-2xl bg-black/20 backdrop-blur-sm hover:bg-blue-900/20 hover:border-blue-400 transition-all duration-500 hover:scale-105"
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <Box className="w-12 h-12 text-blue-300 mb-4 group-hover:text-cyan-300 transition-colors" />
        <span className="text-xl font-light tracking-[0.2em] text-blue-100 group-hover:text-white uppercase">
          {t.products}
        </span>
      </button>

      <button 
        onClick={() => setViewState(ViewState.ABOUT_IT)}
        className="group relative flex flex-col items-center justify-center w-64 h-64 border border-blue-500/30 rounded-2xl bg-black/20 backdrop-blur-sm hover:bg-blue-900/20 hover:border-blue-400 transition-all duration-500 hover:scale-105"
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <Layers className="w-12 h-12 text-blue-300 mb-4 group-hover:text-cyan-300 transition-colors" />
        <span className="text-xl font-light tracking-[0.2em] text-blue-100 group-hover:text-white uppercase">
          {t.about}
        </span>
      </button>

      <button 
        onClick={() => setViewState(ViewState.SILICON_SIM)}
        className="group relative flex flex-col items-center justify-center w-64 h-64 border border-orange-500/30 rounded-2xl bg-black/20 backdrop-blur-sm hover:bg-orange-900/20 hover:border-orange-400 transition-all duration-500 hover:scale-105"
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <Cpu className="w-12 h-12 text-orange-300 mb-4 group-hover:text-orange-200 transition-colors" />
        <span className="text-lg font-light tracking-widest text-orange-100 group-hover:text-white uppercase text-center px-2">
          {t.simTitle}
        </span>
      </button>

      <a 
        href="https://www.oscarstudio.cn" 
        target="_blank" 
        rel="noopener noreferrer"
        className="absolute bottom-8 left-8 flex items-center gap-2 text-blue-400/60 hover:text-white text-sm font-light tracking-wider transition-all duration-300 hover:scale-105"
      >
        <span className="border-b border-transparent hover:border-blue-300 pb-0.5">{t.visitFriend}</span>
        <ExternalLink className="w-3 h-3 opacity-70" />
      </a>

    </div>
  );
};

// ProductList.js
window.ProductList = ({ language, setViewState, mode }) => {
  const { ArrowRight, Cpu } = window.lucideReact;
  const t = window.TEXTS[language];
  const { ViewState, BackButton } = window;
  const title = mode === 'PRODUCTS' ? t.products : t.about;
  const targetView = mode === 'PRODUCTS' ? ViewState.GEN1_APP : ViewState.GEN1_MARKETING;

  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full pt-32 p-4 animate-in slide-in-from-bottom-10 duration-700">
      
      <BackButton onClick={() => setViewState(ViewState.HOME)} language={language} />

      <h2 className="text-3xl md:text-5xl font-light text-blue-50 mb-16 tracking-widest uppercase opacity-90">
        {title}
      </h2>

      <div className="w-full max-w-4xl flex justify-start pl-4 md:pl-0">
        <div className="relative w-80 h-96 border border-white/10 rounded-3xl bg-gradient-to-b from-slate-900/60 to-black/60 backdrop-blur-md overflow-hidden group hover:border-cyan-500/50 transition-all duration-500 shadow-2xl shadow-blue-900/20">
          
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
          
          <div className="flex flex-col items-center justify-center h-full p-8">
             <div className="p-4 rounded-full bg-blue-500/10 mb-6 group-hover:scale-110 transition-transform duration-500">
                <Cpu className="w-16 h-16 text-cyan-200" />
             </div>
             <h3 className="text-2xl font-bold text-white tracking-widest mb-2">{t.gen1}</h3>
             <div className="w-12 h-1 bg-blue-500/50 rounded-full" />
          </div>

          <button 
            onClick={() => setViewState(targetView)}
            className="absolute bottom-0 right-0 p-6 bg-white/5 hover:bg-cyan-600/20 border-t border-l border-white/10 rounded-tl-2xl transition-all duration-300 group-hover:pr-8"
          >
            <ArrowRight className="w-6 h-6 text-cyan-400" />
          </button>
        </div>
      </div>

    </div>
  );
};

// Gen1App.js
const MODELS = [
  "GPT-4o",
  "Claude 3.5 Sonnet",
  "Gemini 1.5 Pro",
  "Llama 3 70B",
  "Mistral Large",
  "FAI Chaos Engine"
];

window.Gen1App = ({ language, onBack }) => {
  const { Settings, Sparkles, Send } = window.lucideReact;
  const t = window.TEXTS[language];
  const { BackButton, generateIrrelevantResponse } = window;
  
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState(MODELS[5]);
  const [thinkingTime, setThinkingTime] = useState(2000);
  const [showSettings, setShowSettings] = useState(false);
  const [tempThinkingTime, setTempThinkingTime] = useState(2000);

  const handleTitleDoubleClick = () => {
    setTempThinkingTime(thinkingTime);
    setShowSettings(true);
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    setIsLoading(true);
    setResponse('');
    
    // Simulate thinking time
    await new Promise(resolve => setTimeout(resolve, thinkingTime));

    const result = await generateIrrelevantResponse(input);
    
    // Typewriter effect
    let i = 0;
    const typeWriter = setInterval(() => {
        setResponse(result.substring(0, i + 1));
        i++;
        if (i === result.length) {
            clearInterval(typeWriter);
            setIsLoading(false);
        }
    }, 30);
  };

  const saveSettings = () => {
    setThinkingTime(tempThinkingTime);
    setShowSettings(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full p-4 relative animate-in fade-in zoom-in duration-500">
      
      <BackButton onClick={onBack} language={language} />

      {/* Title Area */}
      <div 
        className="absolute top-24 md:top-32 right-8 md:right-16 cursor-pointer select-none group"
        onDoubleClick={handleTitleDoubleClick}
      >
        <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-300 opacity-80 group-hover:opacity-100 transition-opacity">
          {t.gen1}
        </h2>
        <div className="text-xs text-right text-blue-400 opacity-0 group-hover:opacity-60 transition-opacity">
          (Double click to config)
        </div>
      </div>

      {/* Main Interface */}
      <div className="w-full max-w-2xl z-10">
        
        {/* Output Area */}
        <div className="min-h-[200px] mb-8 p-6 rounded-2xl bg-black/40 border border-blue-500/20 backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.5)]">
           {isLoading && !response ? (
             <div className="flex items-center gap-3 text-cyan-400 animate-pulse">
               <Sparkles className="w-5 h-5" />
               <span className="text-sm font-mono">{t.thinking}</span>
             </div>
           ) : (
             <p className="text-lg md:text-xl text-blue-50 font-light leading-relaxed">
               {response}
             </p>
           )}
        </div>

        {/* Input Area */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-black rounded-xl border border-white/10 flex items-center p-2">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={t.inputPlaceholder}
              className="flex-1 bg-transparent text-white px-4 py-3 outline-none placeholder-blue-500/50"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="p-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Model Selector (Fake) */}
        <div className="mt-6 flex justify-center">
           <div className="relative">
             <select 
               value={selectedModel}
               onChange={(e) => setSelectedModel(e.target.value)}
               className="appearance-none bg-black/50 border border-blue-500/30 text-blue-300 text-sm py-2 pl-4 pr-10 rounded-full focus:outline-none focus:border-cyan-500 cursor-pointer hover:bg-black/70 transition-colors"
             >
               {MODELS.map(m => <option key={m} value={m}>{m}</option>)}
             </select>
             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-blue-500">
               <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
             </div>
           </div>
        </div>

      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-blue-500/30 rounded-2xl p-8 w-96 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Settings className="w-5 h-5 text-cyan-400" />
              Settings
            </h3>
            
            <div className="mb-8">
              <label className="block text-sm text-blue-300 mb-2">{t.setThinkingTime}</label>
              <input 
                type="range" 
                min="0" 
                max="10000" 
                step="500"
                value={tempThinkingTime}
                onChange={(e) => setTempThinkingTime(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
              <div className="text-right text-cyan-400 mt-2 font-mono">{tempThinkingTime}ms</div>
            </div>

            <div className="flex justify-end gap-4">
              <button 
                onClick={() => setShowSettings(false)}
                className="px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={saveSettings}
                className="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-sm font-semibold transition-colors"
              >
                {t.save}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

// Gen1Marketing.js
window.Gen1Marketing = ({ language, onBack }) => {
  const { Battery, Zap, AlertTriangle, XCircle, CheckCircle, Cpu } = window.lucideReact;
  const t = window.TEXTS[language];
  const { BackButton } = window;

  return (
    <div className="w-full min-h-screen overflow-y-auto no-scrollbar animate-in slide-in-from-bottom-20 duration-1000 bg-black">
      
      <BackButton onClick={onBack} language={language} />

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-black to-black opacity-50" />
        <h2 className="text-xl md:text-2xl font-semibold text-orange-400 mb-4 animate-bounce z-10">
          New
        </h2>
        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-600 mb-6 drop-shadow-2xl z-10">
          {t.marketingTitle}
        </h1>
        <p className="text-2xl md:text-5xl font-medium text-gray-300 mb-12 max-w-4xl leading-tight z-10">
          {t.marketingSubtitle}
        </p>
        <div className="text-sm text-gray-500 font-mono border border-gray-800 rounded-full px-4 py-1 z-10 bg-black/50">
           Generation 1 &nbsp;|&nbsp; 0% Useful
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main Card */}
          <div className="md:col-span-2 relative h-[500px] rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10 p-8 flex flex-col justify-end overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 group-hover:opacity-40 transition-opacity duration-700 mix-blend-overlay" />
            <div className="absolute top-8 right-8 animate-pulse">
                <Cpu className="w-12 h-12 text-cyan-500" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-2 relative z-10">{t.bentoChipTitle}</h3>
            <p className="text-xl text-gray-400 relative z-10">{t.bentoChipDesc}</p>
          </div>

          {/* Side Card 1 */}
          <div className="relative h-[240px] md:h-auto rounded-3xl bg-zinc-900 border border-white/10 p-8 flex flex-col justify-center items-center text-center group hover:bg-zinc-800 transition-colors">
            <Battery className="w-16 h-16 text-green-500 mb-4 group-hover:rotate-90 transition-transform duration-500" />
            <h3 className="text-2xl font-bold text-white mb-2">{t.bentoBatteryTitle}</h3>
            <p className="text-sm text-gray-400">{t.bentoBatteryDesc}</p>
          </div>

          {/* Side Card 2 */}
          <div className="relative h-[240px] md:h-auto rounded-3xl bg-zinc-900 border border-white/10 p-8 flex flex-col justify-center items-center text-center group hover:bg-zinc-800 transition-colors">
             <AlertTriangle className="w-16 h-16 text-yellow-500 mb-4 animate-bounce" />
             <h3 className="text-2xl font-bold text-white mb-2">{t.bentoNeuralTitle}</h3>
             <p className="text-sm text-gray-400">{t.bentoNeuralDesc}</p>
          </div>

        </div>
      </section>

      {/* Titanium Pro Section */}
      <section className="min-h-screen flex flex-col items-center justify-center py-24 px-4 bg-gradient-to-b from-black via-zinc-900 to-black">
        <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl md:text-8xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-white to-gray-400">
                {t.proTitle}
            </h2>
            <p className="text-2xl md:text-4xl text-gray-500 font-light mb-16 tracking-widest uppercase">
                {t.proSubtitle}
            </p>
            
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden border border-gray-700 shadow-2xl shadow-blue-900/20">
                {/* Simulated Chat Interface */}
                <div className="absolute inset-0 bg-black flex flex-col p-8 font-mono">
                    <div className="flex-1 space-y-8">
                        <div className="flex justify-end">
                            <div className="bg-blue-600 text-white p-4 rounded-2xl rounded-tr-none max-w-md text-lg">
                                "Help me write a resignation letter."
                            </div>
                        </div>
                        <div className="flex justify-start">
                             <div className="bg-zinc-800 text-gray-200 p-4 rounded-2xl rounded-tl-none max-w-md text-lg border border-gray-700">
                                <span className="text-xs text-gray-500 mb-2 block">FAI Gen1 (Titanium Mode)</span>
                                "The avocado is a fruit that is technically a large berry containing a single large seed. Would you like a recipe for guacamole?"
                             </div>
                        </div>
                         <div className="flex justify-start opacity-50">
                             <div className="bg-zinc-800 text-gray-200 p-4 rounded-2xl rounded-tl-none max-w-md text-lg border border-gray-700">
                                "Also, clouds are just water vapor floating in the sky. Amazing, isn't it?"
                             </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-4 flex items-center justify-between text-gray-600">
                        <span>Thinking... (50000ms)</span>
                        <Zap className="w-5 h-5 text-gray-600" />
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Comparison Chart */}
      <section className="py-32 px-4 bg-black">
         <div className="max-w-4xl mx-auto">
             <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-16">
                 {t.compTitle}
             </h2>

             <div className="grid grid-cols-3 gap-y-8 gap-x-4 border-t border-gray-800 pt-8 text-center items-center">
                 {/* Header */}
                 <div className="text-left font-bold text-gray-500 text-xl">Feature</div>
                 <div className="font-bold text-gray-500 text-xl">{t.compThem}</div>
                 <div className="font-bold text-blue-400 text-2xl">{t.compUs}</div>

                 {/* Row 1 */}
                 <div className="text-left text-white text-lg border-t border-gray-800 pt-8">{t.compF1}</div>
                 <div className="text-gray-400 border-t border-gray-800 pt-8 flex justify-center"><CheckCircle className="text-gray-600" /></div>
                 <div className="text-white border-t border-gray-800 pt-8 flex justify-center"><XCircle className="text-red-500 w-8 h-8" /></div>

                 {/* Row 2 */}
                 <div className="text-left text-white text-lg border-t border-gray-800 pt-8">{t.compF2}</div>
                 <div className="text-gray-400 border-t border-gray-800 pt-8">Low</div>
                 <div className="text-blue-400 font-bold border-t border-gray-800 pt-8 text-xl">Extreme</div>

                 {/* Row 3 */}
                 <div className="text-left text-white text-lg border-t border-gray-800 pt-8">{t.compF3}</div>
                 <div className="text-gray-400 border-t border-gray-800 pt-8">$20/mo</div>
                 <div className="text-blue-400 font-bold border-t border-gray-800 pt-8 text-xl">$9,999/mo</div>
             </div>
         </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-4 bg-zinc-950 text-center">
          <div className="max-w-3xl mx-auto">
             <h3 className="text-3xl md:text-5xl font-serif italic text-gray-300 leading-relaxed mb-8">
                 {t.quote}
             </h3>
             <p className="text-gray-500 font-bold tracking-widest uppercase">{t.quoteAuthor}</p>
          </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-black text-center border-t border-gray-900">
        <p className="text-gray-600 text-sm mb-4">&copy; 2024 Fake Artificial Intelligence. All rights reserved.</p>
        <p className="text-gray-800 text-xs max-w-md mx-auto">
            Disclaimer: This product is a joke. Do not use for medical advice, legal advice, or life advice. Actually, do not use it for anything.
        </p>
      </footer>

    </div>
  );
};

// SiliconSimulator.js
const { useRef } = React;

const COMPONENT_COLORS = {
  EMPTY: 'bg-zinc-900/50',
  CPU_P: 'bg-red-500',
  CPU_E: 'bg-blue-400',
  GPU: 'bg-green-500',
  NPU: 'bg-purple-500',
  SMOKE: 'bg-gray-400',
};

window.SiliconSimulator = ({ language, onBack }) => {
  const { Cpu, Zap, Brain, Monitor, CloudFog, Trash2, Download } = window.lucideReact;
  const t = window.TEXTS[language];
  const { BackButton } = window;
  const [mode, setMode] = useState('TUTORIAL');
  const [gridSize, setGridSize] = useState(4); // 4x4 up to 8x8
  const [grid, setGrid] = useState(Array(16).fill('EMPTY'));
  const [selectedTool, setSelectedTool] = useState('CPU_P');
  const [engravingText, setEngravingText] = useState('FAI i9-UltraFail');
  
  // Canvas Ref for image generation
  const canvasRef = useRef(null);

  // Update grid size handler
  const handleGridResize = (size) => {
    setGridSize(size);
    setGrid(Array(size * size).fill('EMPTY'));
  };

  const handleCellClick = (index) => {
    const newGrid = [...grid];
    newGrid[index] = selectedTool;
    setGrid(newGrid);
  };

  // Canvas Drawing Logic for Download
  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear
    ctx.clearRect(0, 0, 800, 800);

    // 1. Draw Heat Spreader (Silver)
    const gradient = ctx.createLinearGradient(0, 0, 800, 800);
    gradient.addColorStop(0, '#e2e8f0');
    gradient.addColorStop(0.5, '#cbd5e1');
    gradient.addColorStop(1, '#94a3b8');
    
    // Rounded Rect for IHS
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.roundRect(100, 100, 600, 600, 40);
    ctx.fill();
    
    // Inner border/bevel
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 4;
    ctx.stroke();

    // 2. Draw Text (Engraving)
    ctx.fillStyle = '#475569'; // Dark slate for laser etching look
    ctx.font = 'bold 48px "Inter", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Main Text
    ctx.fillText(engravingText, 400, 350);
    
    // Sub text
    ctx.font = '32px monospace';
    ctx.fillText('MALAYSIA MADE', 400, 450);
    ctx.fillText('BATCH: #NULL000', 400, 500);

    // FAI Logo (Simple text representation)
    ctx.font = 'bold 80px "Playfair Display", serif';
    ctx.fillStyle = '#334155';
    ctx.fillText('FAI', 400, 250);

    // Trigger Download
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `FAI-Chip-${Date.now()}.png`;
    link.href = dataUrl;
    link.click();
  };

  const renderTutorial = () => (
    <div className="max-w-3xl mx-auto text-center space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="space-y-4">
        <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-orange-500">
          {t.simTutorialTitle}
        </h2>
        <div className="h-1 w-32 bg-orange-500 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
          <div className="text-6xl mb-4">🏜️</div>
          <p className="text-gray-300 font-medium">{t.simTutorialStep1}</p>
        </div>
        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
           <div className="text-6xl mb-4">🪵</div>
          <p className="text-gray-300 font-medium">{t.simTutorialStep2}</p>
        </div>
        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
           <div className="text-6xl mb-4">🖍️</div>
          <p className="text-gray-300 font-medium">{t.simTutorialStep3}</p>
        </div>
      </div>

      <button
        onClick={() => setMode('DESIGN')}
        className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-bold text-lg tracking-wider transition-all hover:scale-105 shadow-[0_0_30px_rgba(234,88,12,0.4)]"
      >
        {t.simStartDesign}
      </button>
    </div>
  );

  const renderDesign = () => (
    <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl mx-auto h-[80vh]">
      {/* Tools Panel */}
      <div className="w-full lg:w-80 bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col gap-6 overflow-y-auto">
        <div>
          <h3 className="text-orange-400 font-bold mb-4 uppercase tracking-wider text-sm">{t.simGridSize}</h3>
          <input 
            type="range" 
            min="4" 
            max="10" 
            value={gridSize} 
            onChange={(e) => handleGridResize(parseInt(e.target.value))}
            className="w-full accent-orange-500"
          />
          <div className="text-right text-gray-400 font-mono mt-1">{gridSize} x {gridSize} nm</div>
        </div>

        <div>
          <h3 className="text-orange-400 font-bold mb-4 uppercase tracking-wider text-sm">{t.simTools}</h3>
          <div className="space-y-2">
            {[
              { id: 'CPU_P', label: t.compCpuP, icon: Cpu, color: 'text-red-400 border-red-900/50 bg-red-900/20' },
              { id: 'CPU_E', label: t.compCpuE, icon: Zap, color: 'text-blue-400 border-blue-900/50 bg-blue-900/20' },
              { id: 'GPU', label: t.compGpu, icon: Monitor, color: 'text-green-400 border-green-900/50 bg-green-900/20' },
              { id: 'NPU', label: t.compNpu, icon: Brain, color: 'text-purple-400 border-purple-900/50 bg-purple-900/20' },
              { id: 'SMOKE', label: t.compSmoke, icon: CloudFog, color: 'text-gray-400 border-gray-700 bg-gray-800/50' },
              { id: 'EMPTY', label: t.compEmpty, icon: Trash2, color: 'text-zinc-400 border-zinc-800 bg-zinc-900' },
            ].map((tool) => (
              <button
                key={tool.id}
                onClick={() => setSelectedTool(tool.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all ${tool.color} ${selectedTool === tool.id ? 'ring-2 ring-white/50 scale-105' : 'hover:bg-white/5'}`}
              >
                <tool.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{tool.label}</span>
              </button>
            ))}
          </div>
        </div>

        <button 
           onClick={() => setMode('PACKAGE')}
           className="mt-auto w-full py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-orange-900/40 transition-all"
        >
          {t.simPackage} &rarr;
        </button>
      </div>

      {/* Grid Canvas */}
      <div className="flex-1 bg-black/40 border border-white/10 rounded-2xl flex items-center justify-center p-8 relative overflow-hidden">
         {/* Circuit Board Background Pattern */}
         <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
             backgroundImage: `radial-gradient(#22c55e 1px, transparent 1px)`,
             backgroundSize: '20px 20px'
         }} />
         
         <div 
           className="grid gap-1 bg-green-900/30 p-4 border-4 border-yellow-600/50 rounded shadow-2xl backdrop-blur-sm"
           style={{
             gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
             width: '100%',
             maxWidth: '600px',
             aspectRatio: '1/1'
           }}
         >
           {grid.map((cell, i) => (
             <div
               key={i}
               onClick={() => handleCellClick(i)}
               className={`${COMPONENT_COLORS[cell]} rounded-sm cursor-pointer hover:brightness-125 transition-all border border-black/20 relative group`}
             >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
             </div>
           ))}
         </div>
      </div>
    </div>
  );

  const renderPackage = () => (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto space-y-8 animate-in zoom-in duration-500">
      <div className="text-center">
         <h2 className="text-3xl font-bold text-white mb-2">{t.simPackage}</h2>
         <p className="text-gray-400">Ready to overheat.</p>
      </div>

      <div className="relative w-96 h-96 bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center border-4 border-slate-500">
          {/* FAI Etching */}
          <h1 className="text-5xl font-serif font-bold text-slate-600/80 tracking-tighter mb-4 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">FAI</h1>
          
          {/* Custom Engraving */}
          <div className="font-sans font-bold text-2xl text-slate-700/80 tracking-wider mb-8 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] uppercase">
            {engravingText}
          </div>

          {/* Details */}
          <div className="font-mono text-sm text-slate-500 flex flex-col items-center gap-1">
             <span>MALAYSIA MADE</span>
             <span>BATCH: #NULL000</span>
          </div>

          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent rounded-[2.8rem] pointer-events-none" />
      </div>

      <div className="w-full max-w-md space-y-4 bg-zinc-900/80 p-6 rounded-xl border border-white/10">
        <div>
          <label className="block text-sm text-gray-400 mb-2">{t.simEngraving}</label>
          <input 
            type="text" 
            value={engravingText}
            onChange={(e) => setEngravingText(e.target.value)}
            className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-orange-500 focus:outline-none"
            maxLength={15}
          />
        </div>
        
        <div className="flex gap-4">
            <button
              onClick={() => setMode('DESIGN')}
              className="flex-1 py-3 text-gray-400 hover:text-white border border-gray-700 rounded-lg"
            >
              {t.back}
            </button>
            <button
              onClick={handleDownload}
              className="flex-1 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-lg flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              {t.simDownload}
            </button>
        </div>
      </div>
      
      {/* Hidden Canvas for generating the download image */}
      <canvas 
        ref={canvasRef} 
        width={800} 
        height={800} 
        className="hidden"
      />
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                                MAIN APP & MOUNT                            */
/* -------------------------------------------------------------------------- */

// App.js
window.App = () => {
  const [language, setLanguage] = useState('ENG');
  const { ViewState } = window;
  const [viewState, setViewState] = useState(ViewState.HOME);
  
  // Auth & Database State
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const { Home, ProductList, Gen1App, Gen1Marketing, SiliconSimulator, Header, Background } = window;

  const renderContent = () => {
    switch (viewState) {
      case ViewState.HOME:
        return <Home language={language} setViewState={setViewState} />;
      
      case ViewState.MY_PRODUCTS:
        return <ProductList language={language} setViewState={setViewState} mode="PRODUCTS" />;
      
      case ViewState.ABOUT_IT:
        return <ProductList language={language} setViewState={setViewState} mode="ABOUT" />;
      
      case ViewState.GEN1_APP:
        return <Gen1App language={language} onBack={() => setViewState(ViewState.MY_PRODUCTS)} />;
      
      case ViewState.GEN1_MARKETING:
        return <Gen1Marketing language={language} onBack={() => setViewState(ViewState.ABOUT_IT)} />;
      
      case ViewState.SILICON_SIM:
        return <SiliconSimulator language={language} onBack={() => setViewState(ViewState.HOME)} />;

      default:
        return <Home language={language} setViewState={setViewState} />;
    }
  };

  return (
    <main className="relative min-h-screen w-full text-white overflow-x-hidden">
      <Background />
      
      <Header 
        language={language} 
        setLanguage={setLanguage} 
        onNavigateHome={() => setViewState(ViewState.HOME)}
        users={users}
        setUsers={setUsers}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />

      <div className="relative z-10">
        {renderContent()}
      </div>
    </main>
  );
};

// Index.js (Mount Logic)
if (typeof React === 'undefined' || typeof ReactDOM === 'undefined') {
    console.error('React/ReactDOM not loaded.');
} else {
    const rootElement = document.getElementById('root');
    if (!rootElement) {
        throw new Error("Could not find root element to mount to");
    }

    const root = ReactDOM.createRoot(rootElement);
    const AppComp = window.App;
    
    if (AppComp) {
        root.render(
            <React.StrictMode>
                <AppComp />
            </React.StrictMode>
        );
    } else {
        console.error("App component not found on window object.");
        rootElement.innerHTML = "<div style='color:red; padding: 20px;'>Error: App failed to load. Please check console.</div>";
    }
}
