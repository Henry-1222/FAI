import React, { useState, useRef } from 'react';
import { TEXTS, Language } from '../types.ts';
import BackButton from '../components/BackButton.tsx';
import { Cpu, Server, Zap, Activity, Battery, Disc, Download, Trash2, BoxSelect } from 'lucide-react';

interface MotherboardSimulatorProps {
  language: Language;
  onBack: () => void;
}

type ComponentType = 'EMPTY' | 'SOCKET' | 'RAM' | 'PCIE' | 'VRM' | 'TRACE' | 'CAP';
type SimMode = 'TUTORIAL' | 'DESIGN' | 'PACKAGE';

// Define tool properties for rendering
const COMPONENT_STYLES: Record<ComponentType, { color: string, icon: any, labelKey?: string }> = {
  EMPTY: { color: 'bg-green-900/20 border-green-800/30', icon: null },
  SOCKET: { color: 'bg-gray-200 border-gray-400', icon: BoxSelect, labelKey: 'moboToolSocket' },
  RAM: { color: 'bg-blue-600 border-blue-400', icon: Server, labelKey: 'moboToolRam' },
  PCIE: { color: 'bg-zinc-600 border-zinc-400', icon: Disc, labelKey: 'moboToolPcie' },
  VRM: { color: 'bg-red-600 border-red-400', icon: Zap, labelKey: 'moboToolVrm' },
  TRACE: { color: 'bg-amber-500/80 border-amber-300', icon: Activity, labelKey: 'moboToolTrace' },
  CAP: { color: 'bg-yellow-400 border-yellow-200 rounded-full', icon: Battery, labelKey: 'moboToolCap' },
};

const MotherboardSimulator: React.FC<MotherboardSimulatorProps> = ({ language, onBack }) => {
  const t = TEXTS[language];
  const [mode, setMode] = useState<SimMode>('TUTORIAL');
  const [gridSize, setGridSize] = useState(8); 
  const [grid, setGrid] = useState<ComponentType[]>(Array(64).fill('EMPTY'));
  const [selectedTool, setSelectedTool] = useState<ComponentType>('SOCKET');
  const [engravingText, setEngravingText] = useState('FAI-Z890-ULTRA');
  
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleGridResize = (size: number) => {
    setGridSize(size);
    setGrid(Array(size * size).fill('EMPTY'));
  };

  const handleCellClick = (index: number) => {
    const newGrid = [...grid];
    newGrid[index] = selectedTool;
    setGrid(newGrid);
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const WIDTH = 800;
    const HEIGHT = 800;
    const CELL_SIZE = (WIDTH - 100) / gridSize; // -100 for padding
    const OFFSET = 50;

    // Clear and background
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    
    // PCB Board (Dark Green)
    const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
    gradient.addColorStop(0, '#064e3b'); // emerald-900
    gradient.addColorStop(1, '#022c22'); // emerald-950
    ctx.fillStyle = gradient;
    ctx.roundRect(20, 20, WIDTH - 40, HEIGHT - 40, 20);
    ctx.fill();
    ctx.strokeStyle = '#34d399'; // emerald-400 border
    ctx.lineWidth = 4;
    ctx.stroke();

    // Draw Grid Components
    grid.forEach((comp, i) => {
        if (comp === 'EMPTY') return;

        const xIndex = i % gridSize;
        const yIndex = Math.floor(i / gridSize);
        const x = OFFSET + xIndex * CELL_SIZE;
        const y = OFFSET + yIndex * CELL_SIZE;

        // Draw component based on type
        switch (comp) {
            case 'SOCKET':
                ctx.fillStyle = '#e2e8f0'; // slate-200
                ctx.fillRect(x + 5, y + 5, CELL_SIZE - 10, CELL_SIZE - 10);
                // CPU bracket lines
                ctx.strokeStyle = '#94a3b8';
                ctx.strokeRect(x + 10, y + 10, CELL_SIZE - 20, CELL_SIZE - 20);
                break;
            case 'RAM':
                ctx.fillStyle = '#2563eb'; // blue-600
                ctx.fillRect(x + 2, y + 5, CELL_SIZE - 4, CELL_SIZE - 10);
                // Gold contacts
                ctx.fillStyle = '#fbbf24';
                ctx.fillRect(x + 4, y + CELL_SIZE - 12, CELL_SIZE - 8, 4);
                break;
            case 'PCIE':
                ctx.fillStyle = '#52525b'; // zinc-600
                ctx.fillRect(x + 2, y + 15, CELL_SIZE - 4, 15);
                break;
            case 'VRM':
                ctx.fillStyle = '#dc2626'; // red-600
                ctx.fillRect(x + 5, y + 5, CELL_SIZE - 10, CELL_SIZE - 10);
                break;
            case 'TRACE':
                ctx.strokeStyle = '#fbbf24'; // amber-400
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(x, y + CELL_SIZE / 2);
                ctx.lineTo(x + CELL_SIZE, y + CELL_SIZE / 2);
                ctx.moveTo(x + CELL_SIZE / 2, y);
                ctx.lineTo(x + CELL_SIZE / 2, y + CELL_SIZE);
                ctx.stroke();
                break;
            case 'CAP':
                ctx.fillStyle = '#facc15'; // yellow-400
                ctx.beginPath();
                ctx.arc(x + CELL_SIZE / 2, y + CELL_SIZE / 2, CELL_SIZE / 3, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = '#a16207';
                ctx.stroke();
                break;
        }
    });

    // Draw Engraving
    ctx.save();
    ctx.translate(WIDTH - 60, HEIGHT - 80);
    ctx.rotate(-Math.PI / 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.font = 'bold 36px "Inter", sans-serif';
    ctx.fillText(engravingText, 0, 0);
    ctx.restore();

    // FAI Logo
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.font = 'bold 60px "Playfair Display", serif';
    ctx.fillText('FAI', 60, HEIGHT - 60);

    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `FAI-Mobo-${Date.now()}.png`;
    link.href = dataUrl;
    link.click();
  };

  const renderTutorial = () => (
    <div className="max-w-4xl mx-auto text-center space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="space-y-4">
        <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-600">
          {t.moboTutorialTitle}
        </h2>
        <div className="h-1 w-32 bg-green-500 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
          <div className="text-6xl mb-4">🟩</div>
          <p className="text-gray-300 font-medium text-lg">{t.moboTutorialStep1}</p>
        </div>
        <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
           <div className="text-6xl mb-4">⚡</div>
          <p className="text-gray-300 font-medium text-lg">{t.moboTutorialStep2}</p>
        </div>
        <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
           <div className="text-6xl mb-4">🔧</div>
          <p className="text-gray-300 font-medium text-lg">{t.moboTutorialStep3}</p>
        </div>
      </div>

      <button
        onClick={() => setMode('DESIGN')}
        className="px-12 py-5 bg-green-600 hover:bg-green-500 text-white rounded-full font-bold text-xl tracking-wider transition-all hover:scale-105 shadow-[0_0_30px_rgba(22,163,74,0.4)]"
      >
        {t.moboStart}
      </button>
    </div>
  );

  const renderDesign = () => (
    <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl mx-auto h-[80vh]">
      {/* Tools Panel */}
      <div className="w-full lg:w-80 bg-zinc-900/90 backdrop-blur-md border border-green-500/20 rounded-2xl p-6 flex flex-col gap-6 overflow-y-auto">
        <div>
          <h3 className="text-green-400 font-bold mb-4 uppercase tracking-wider text-sm">{t.simGridSize}</h3>
          <input 
            type="range" 
            min="4" 
            max="12" 
            value={gridSize} 
            onChange={(e) => handleGridResize(parseInt(e.target.value))}
            className="w-full accent-green-500"
          />
          <div className="text-right text-gray-400 font-mono mt-1">{gridSize} x {gridSize}</div>
        </div>

        <div>
          <h3 className="text-green-400 font-bold mb-4 uppercase tracking-wider text-sm">{t.moboTools}</h3>
          <div className="space-y-2">
            {(Object.keys(COMPONENT_STYLES) as ComponentType[]).filter(k => k !== 'EMPTY').map((key) => {
                const style = COMPONENT_STYLES[key];
                const IconComp = style.icon;
                return (
                    <button
                        key={key}
                        onClick={() => setSelectedTool(key)}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all ${selectedTool === key ? 'ring-2 ring-white/50 scale-105' : 'hover:bg-white/5'} ${style.color.split(' ')[0]} bg-opacity-20 ${style.color.split(' ')[1]}`}
                    >
                        {IconComp && <IconComp className="w-5 h-5 text-gray-200" />}
                        <span className="text-sm font-medium text-gray-200">
                            {style.labelKey ? (t as any)[style.labelKey] : key}
                        </span>
                    </button>
                );
            })}
             <button
                onClick={() => setSelectedTool('EMPTY')}
                className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all ${selectedTool === 'EMPTY' ? 'ring-2 ring-white/50 scale-105' : 'hover:bg-white/5'} border-red-500/50 bg-red-900/20`}
            >
                <Trash2 className="w-5 h-5 text-red-300" />
                <span className="text-sm font-medium text-red-300">Eraser</span>
            </button>
          </div>
        </div>

        <button 
           onClick={() => setMode('PACKAGE')}
           className="mt-auto w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-green-900/40 transition-all flex items-center justify-center gap-2"
        >
          {t.simPackage} <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Grid Canvas */}
      <div className="flex-1 bg-green-950/30 border border-green-500/20 rounded-2xl flex items-center justify-center p-8 relative overflow-hidden">
         {/* PCB Texture */}
         <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
             backgroundImage: `radial-gradient(#15803d 1px, transparent 1px)`,
             backgroundSize: '20px 20px'
         }} />
         
         <div 
           className="grid gap-1 bg-green-900 p-4 border-4 border-green-700/50 rounded-xl shadow-2xl backdrop-blur-sm"
           style={{
             gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
             width: '100%',
             maxWidth: '600px',
             aspectRatio: '1/1'
           }}
         >
           {grid.map((cell, i) => {
             const style = COMPONENT_STYLES[cell];
             const IconComp = style.icon;
             return (
                <div
                    key={i}
                    onClick={() => handleCellClick(i)}
                    className={`${style.color} border rounded-sm cursor-pointer hover:brightness-125 transition-all relative group flex items-center justify-center`}
                >
                    {IconComp && <IconComp className="w-1/2 h-1/2 text-white/70" />}
                </div>
             );
           })}
         </div>
      </div>
    </div>
  );

  const renderPackage = () => (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto space-y-8 animate-in zoom-in duration-500">
      <div className="text-center">
         <h2 className="text-3xl font-bold text-white mb-2">{t.simPackage}</h2>
         <p className="text-gray-400">Ready for Mass Production (Fake).</p>
      </div>

      {/* Preview Card */}
      <div className="relative w-[500px] h-[500px] bg-emerald-900 rounded-lg shadow-[0_20px_50px_rgba(0,20,0,0.5)] flex flex-col items-center justify-center border-4 border-emerald-700 overflow-hidden">
          {/* FAI Etching */}
          <h1 className="absolute bottom-8 left-8 text-6xl font-serif font-bold text-white/10 tracking-tighter">FAI</h1>
          
          {/* Custom Engraving */}
          <div className="absolute top-1/2 right-[-80px] rotate-90 origin-center font-sans font-bold text-3xl text-white/40 tracking-wider uppercase whitespace-nowrap">
            {engravingText}
          </div>

          {/* Abstract representation of the board */}
          <div className="grid gap-1 w-3/4 h-3/4 opacity-80" style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}>
             {grid.map((cell, i) => {
                 const style = COMPONENT_STYLES[cell];
                 return <div key={i} className={`${style.color} rounded-[1px]`} />;
             })}
          </div>

          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
      </div>

      <div className="w-full max-w-md space-y-4 bg-zinc-900/80 p-6 rounded-xl border border-white/10">
        <div>
          <label className="block text-sm text-gray-400 mb-2">{t.moboEngravePrompt}</label>
          <input 
            type="text" 
            value={engravingText}
            onChange={(e) => setEngravingText(e.target.value)}
            className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-green-500 focus:outline-none"
            maxLength={20}
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
              className="flex-1 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              {t.moboDownload}
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

  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full pt-24 p-4 relative overflow-y-auto">
      <BackButton onClick={onBack} language={language} />
      
      {mode === 'TUTORIAL' && renderTutorial()}
      {mode === 'DESIGN' && renderDesign()}
      {mode === 'PACKAGE' && renderPackage()}
    </div>
  );
};

// Add ArrowRight for the button usage inside component
import { ArrowRight } from 'lucide-react';

export default MotherboardSimulator;