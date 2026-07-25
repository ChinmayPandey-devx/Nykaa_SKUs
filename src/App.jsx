import React, { useState } from 'react';
import {
  CheckCircle2,
  Circle,
  AlertTriangle,
  Info,
  Sparkles,
  ChevronDown,
  ChevronUp,
  ShoppingBag,
  Share2,
  Heart,
  Search,
  ArrowLeft,
  Star,
  ShieldCheck,
  Check,
  RotateCcw,
  Sparkle,
  Droplets,
  Layers,
  HelpCircle,
  X
} from 'lucide-react';

// Data definitions for WishCare Anti-Hairfall Shampoo
const STEPS = [
  {
    id: 1,
    title: 'Apply & massage',
    detail: 'Apply 5-10ml to wet scalp & massage gently with finger pads for 2-3 mins to stimulate follicles.',
    time: '2-3 mins'
  },
  {
    id: 2,
    title: 'Lather',
    detail: 'Work into a rich lather. Allow active botanicals (Rosemary & Capilia Longa) to rest on scalp for 2 mins.',
    time: '2 mins'
  },
  {
    id: 3,
    title: 'Rinse twice',
    detail: 'Rinse thoroughly with lukewarm water. Repeat wash if scalp has heavy oil or product buildup.',
    time: 'Final rinse'
  }
];

const ROUTINE_EXTENSIONS = [
  {
    id: 'serum',
    name: 'WishCare Hair Growth Serum',
    type: 'Post-Wash Leave-in',
    tag: 'Towel-dried scalp',
    desc: 'Apply 3-4 drops directly to scalp sections after towel drying. Do not rinse out.',
    icon: Droplets
  },
  {
    id: 'conditioner',
    name: 'WishCare Hairfall Control Conditioner',
    type: 'Rinse-off Treatment',
    tag: 'Hair lengths only',
    desc: 'Smooth through mid-lengths to ends. Leave for 3 minutes before final rinse.',
    icon: Layers
  }
];

const INGREDIENTS = [
  {
    id: 'rosemary',
    name: 'Rosemary Extract',
    role: 'Follicle Stimulator',
    benefit: 'Stimulates scalp microcirculation and slows down hair follicle aging.'
  },
  {
    id: 'capilia',
    name: 'Capilia Longa',
    role: 'Growth Reactivator',
    benefit: 'Phyto-peptide complex that reactivates hair growth phase & density.'
  },
  {
    id: 'ha',
    name: 'Hyaluronic Acid',
    role: 'Scalp Hydrator',
    benefit: 'Deeply hydrates scalp skin barrier to prevent flaking & dryness.'
  },
  {
    id: 'ginseng',
    name: 'Ginseng Root',
    role: 'Root Strengthener',
    benefit: 'Nourishes hair roots with essential saponins for tensile strength.'
  },
  {
    id: 'caffeine',
    name: 'Caffeine',
    role: 'DHT Blocker',
    benefit: 'Blocks DHT hormone responsible for hair thinning and follicle miniaturization.'
  }
];

export default function App() {
  // Main Toggle: 'before' | 'after'
  const [viewState, setViewState] = useState('before');

  // Phone PDP inner tab: 'how-to-use' | 'ingredients'
  const [phoneTab, setPhoneTab] = useState('how-to-use');

  // Interactive step checkboxes in 'After' view
  const [completedSteps, setCompletedSteps] = useState([1]);

  // Tap-to-expand ingredients in 'After' view
  const [expandedIngredients, setExpandedIngredients] = useState(['rosemary']);

  // Modal for SKU Scope Breakdown
  const [showMatrixModal, setShowMatrixModal] = useState(false);

  const toggleStep = (id) => {
    if (completedSteps.includes(id)) {
      setCompletedSteps(completedSteps.filter((s) => s !== id));
    } else {
      setCompletedSteps([...completedSteps, id]);
    }
  };

  const toggleIngredient = (id) => {
    if (expandedIngredients.includes(id)) {
      setExpandedIngredients(expandedIngredients.filter((i) => i !== id));
    } else {
      setExpandedIngredients([...expandedIngredients, id]);
    }
  };

  // Calculate Progress Ring SVG parameters
  const totalSteps = STEPS.length;
  const doneCount = completedSteps.length;
  const progressPercent = Math.round((doneCount / totalSteps) * 100);

  // SVG circular ring properties
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

  return (
    <div className="min-h-screen bg-[#F6F0E4] text-[#2D3A30] font-sans py-6 px-4 md:py-10 flex flex-col items-center justify-between selection:bg-[#B23A5C] selection:text-white">
      
      {/* HEADER SECTION */}
      <header className="w-full max-w-2xl text-center mb-6 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E3A2B]/10 border border-[#1E3A2B]/20 text-[#1E3A2B] font-mono text-xs mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#B23A5C]" />
          <span>NYKAA PDP UX EXPERIMENT</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl text-[#1E3A2B] font-bold tracking-tight mb-2">
          WishCare Anti-Hairfall Shampoo
        </h1>

        <p className="text-sm sm:text-base text-[#526458] max-w-lg mb-6 leading-relaxed">
          Demonstrating a targeted UX fix for <strong className="text-[#1E3A2B]">usage-complex SKUs</strong> (actives, hair treatments, colour kits) vs standard e-commerce PDP text blocks.
        </p>

        {/* TOP TOGGLE SWITCH (MINIMAL PILL SWITCH) */}
        <div className="relative bg-[#E6DDD0] p-1 rounded-full flex items-center w-72 sm:w-80 shadow-inner border border-[#D8CCBA]">
          {/* Animated sliding background indicator */}
          <div
            className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-[#1E3A2B] rounded-full shadow-md transition-transform duration-300 ease-out"
            style={{
              transform: viewState === 'after' ? 'translateX(calc(100% + 4px))' : 'translateX(0)',
            }}
          />

          <button
            onClick={() => setViewState('before')}
            className={`relative z-10 w-1/2 py-2 text-xs sm:text-sm font-semibold rounded-full transition-colors duration-200 flex items-center justify-center gap-1.5 ${
              viewState === 'before' ? 'text-white' : 'text-[#526458] hover:text-[#1E3A2B]'
            }`}
          >
            <span>Before (Current)</span>
          </button>

          <button
            onClick={() => setViewState('after')}
            className={`relative z-10 w-1/2 py-2 text-xs sm:text-sm font-semibold rounded-full transition-colors duration-200 flex items-center justify-center gap-1.5 ${
              viewState === 'after' ? 'text-white' : 'text-[#526458] hover:text-[#1E3A2B]'
            }`}
          >
            <Sparkles className={`w-3.5 h-3.5 ${viewState === 'after' ? 'text-[#F6F0E4]' : 'text-[#B23A5C]'}`} />
            <span>After (Proposed)</span>
          </button>
        </div>
      </header>

      {/* MAIN CONTAINER: MOBILE PHONE FRAME (~390px) */}
      <main className="w-full flex flex-col items-center mb-8">
        
        {/* PHONE FRAME CHROME */}
        <div className="w-full max-w-[390px] bg-[#1C201D] p-3 rounded-[48px] shadow-[0_25px_60px_-15px_rgba(30,58,43,0.35)] border-4 border-[#2C352E] relative">
          
          {/* Side Buttons Visual Details */}
          <div className="absolute -left-[7px] top-24 w-[3px] h-8 bg-[#333E36] rounded-l-md"></div>
          <div className="absolute -left-[7px] top-36 w-[3px] h-12 bg-[#333E36] rounded-l-md"></div>
          <div className="absolute -left-[7px] top-52 w-[3px] h-12 bg-[#333E36] rounded-l-md"></div>
          <div className="absolute -right-[7px] top-32 w-[3px] h-16 bg-[#333E36] rounded-r-md"></div>

          {/* INNER SCREEN CONTAINER */}
          <div className="w-full bg-[#FFFFFF] rounded-[38px] overflow-hidden min-h-[720px] max-h-[760px] flex flex-col relative border border-[#E5E0D8]">
            
            {/* PHONE STATUS BAR */}
            <div className="bg-[#FC2779] text-white px-5 pt-3 pb-1 flex justify-between items-center text-[11px] font-medium tracking-tight">
              <span>9:41</span>
              {/* Dynamic Island / Camera Notch */}
              <div className="w-20 h-4 bg-[#111111] rounded-full flex items-center justify-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#1C1C1E]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#0D2818]"></div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-[10px]">5G</span>
                <div className="w-4 h-2 border border-white/80 rounded-sm p-[1px]">
                  <div className="h-full bg-white rounded-xs w-3/4"></div>
                </div>
              </div>
            </div>

            {/* NYKAA APP HEADER NAV BAR */}
            <div className="bg-[#FC2779] text-white px-4 py-2.5 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <ArrowLeft className="w-5 h-5 cursor-pointer opacity-90 hover:opacity-100" />
                <span className="font-extrabold tracking-tight text-lg italic uppercase font-serif">NYKAA</span>
              </div>
              <div className="flex items-center gap-3.5">
                <Search className="w-4 h-4 cursor-pointer opacity-90" />
                <Heart className="w-4 h-4 cursor-pointer opacity-90" />
                <div className="relative cursor-pointer">
                  <ShoppingBag className="w-4 h-4 opacity-90" />
                  <span className="absolute -top-1.5 -right-1.5 bg-[#1E3A2B] text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
                    2
                  </span>
                </div>
              </div>
            </div>

            {/* PRODUCT HEADER CARD (STATIC PRODUCT CONTEXT) */}
            <div className="bg-[#FAF7F2] p-3.5 border-b border-[#EBE4D8] flex items-center gap-3.5">
              <div className="relative w-16 h-16 rounded-xl bg-white p-1 shadow-sm border border-[#E5DEC3] flex-shrink-0 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full rounded-lg bg-gradient-to-br from-[#1E3A2B] to-[#2D5A42] flex flex-col items-center justify-center text-white p-1 text-center">
                  <Droplets className="w-5 h-5 text-[#E6C594] mb-0.5" />
                  <span className="text-[7px] font-bold uppercase tracking-wider text-[#E6C594]">WishCare</span>
                </div>
                <span className="absolute bottom-0.5 right-0.5 bg-[#B23A5C] text-white text-[7px] font-bold px-1 rounded">
                  Active
                </span>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 text-[10px] text-[#B23A5C] font-semibold mb-0.5">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Nykaa Verified Active SKU</span>
                </div>
                <h2 className="font-bold text-xs text-[#1E3A2B] truncate leading-snug">
                  WishCare Anti-Hairfall Shampoo
                </h2>
                <p className="text-[10px] text-[#66756B] truncate">
                  300ml • With Rosemary & Capilia Longa
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-bold text-xs text-[#1E3A2B]">₹599</span>
                  <span className="text-[10px] text-[#8C9A90] line-through">₹799</span>
                  <span className="text-[9px] font-bold text-[#B23A5C] bg-[#FDF0F3] px-1 rounded">25% OFF</span>
                  <div className="ml-auto flex items-center gap-0.5 text-[10px] text-[#1E3A2B] font-bold">
                    <Star className="w-3 h-3 fill-[#E6C594] text-[#E6C594]" />
                    <span>4.4</span>
                    <span className="text-[9px] text-[#8C9A90] font-normal">(1.2k)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* TAB SELECTOR INSIDE PHONE */}
            <div className="flex border-b border-[#EBE4D8] bg-white sticky top-0 z-20">
              <button
                onClick={() => setPhoneTab('how-to-use')}
                className={`flex-1 py-2.5 text-xs font-semibold text-center border-b-2 transition-colors ${
                  phoneTab === 'how-to-use'
                    ? 'border-[#B23A5C] text-[#B23A5C]'
                    : 'border-transparent text-[#66756B] hover:text-[#1E3A2B]'
                }`}
              >
                How to Use
              </button>
              <button
                onClick={() => setPhoneTab('ingredients')}
                className={`flex-1 py-2.5 text-xs font-semibold text-center border-b-2 transition-colors ${
                  phoneTab === 'ingredients'
                    ? 'border-[#B23A5C] text-[#B23A5C]'
                    : 'border-transparent text-[#66756B] hover:text-[#1E3A2B]'
                }`}
              >
                Ingredients
              </button>
            </div>

            {/* CONTENT AREA WITH SMOOTH CROSS-FADE TRANSITION */}
            <div className="flex-1 overflow-y-auto p-4 phone-scroll bg-[#FFFFFF]">
              
              {/* BEFORE STATE RENDER */}
              {viewState === 'before' && (
                <div key="before-view" className="animate-fade-in space-y-4">
                  
                  {/* RED ANNOTATION BADGE */}
                  <div className="bg-[#FDF2F2] border border-[#F8B4B4] rounded-xl p-2.5 flex items-start gap-2 text-[#9B1C1C]">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#E02424]" />
                    <div className="flex-1">
                      <span className="font-mono text-[10px] font-bold block uppercase tracking-wider text-[#9B1C1C]">
                        ANNOTATION — CURRENT UX PAIN POINT
                      </span>
                      <p className="font-mono text-[11px] leading-tight font-medium mt-0.5">
                        Wall of text — no indication anyone reads past line 2.
                      </p>
                    </div>
                  </div>

                  {/* HOW TO USE TAB (BEFORE) */}
                  {phoneTab === 'how-to-use' && (
                    <div className="space-y-3">
                      <h3 className="text-xs font-bold text-[#1E3A2B] uppercase tracking-wider">
                        Product Usage Instructions
                      </h3>
                      {/* Dense wall of plain text */}
                      <div className="bg-[#FAF8F5] p-3.5 rounded-lg border border-[#EBE5DA] text-xs text-[#4A554A] leading-relaxed font-normal">
                        For best results, apply a generous amount of WishCare Anti-Hairfall Shampoo to thoroughly wet hair and scalp. Massage gently with finger pads for 2-3 minutes to stimulate scalp microcirculation and allow active botanical extracts including Rosemary and Capilia Longa to penetrate hair follicles. Work into a rich lather from roots to tip. Rinse thoroughly with lukewarm water. Repeat wash if scalp feels excessively oily or has heavy styling product buildup. Avoid contact with eyes. For optimal anti-hairfall efficacy, follow immediately with WishCare Hair Growth Serum applied directly to towel-dried scalp and apply WishCare Hairfall Control Conditioner exclusively to hair lengths and ends for 3 minutes before final rinse.
                      </div>
                      
                      <div className="p-3 rounded-lg bg-[#F7F5F0] border border-[#E8E2D5] text-[11px] text-[#66756B] flex items-center justify-between">
                        <span>Customer Review Drop-off Risk</span>
                        <span className="font-mono font-bold text-[#C81E1E]">HIGH (Opaque text)</span>
                      </div>
                    </div>
                  )}

                  {/* INGREDIENTS TAB (BEFORE) */}
                  {phoneTab === 'ingredients' && (
                    <div className="space-y-3">
                      <h3 className="text-xs font-bold text-[#1E3A2B] uppercase tracking-wider">
                        Active Ingredients
                      </h3>
                      {/* Flat comma-separated list */}
                      <div className="bg-[#FAF8F5] p-3.5 rounded-lg border border-[#EBE5DA] text-xs text-[#4A554A]">
                        <p className="font-medium text-[#1E3A2B] mb-1">Full Key Ingredients List:</p>
                        <p className="leading-relaxed">
                          Rosemary, Capilia Longa, Hyaluronic Acid, Ginseng, Caffeine
                        </p>
                      </div>
                      <p className="text-[10px] text-[#88968C] italic">
                        * Flat list provides zero context on active functions or mechanism of action.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* AFTER STATE RENDER */}
              {viewState === 'after' && (
                <div key="after-view" className="animate-fade-in space-y-4">
                  
                  {/* GREEN ANNOTATION BADGE */}
                  <div className="bg-[#F0FDF4] border border-[#86EFAC] rounded-xl p-2.5 flex items-start gap-2 text-[#166534]">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#16A34A]" />
                    <div className="flex-1">
                      <span className="font-mono text-[10px] font-bold block uppercase tracking-wider text-[#166534]">
                        ANNOTATION — PROPOSED UX FIX
                      </span>
                      <p className="font-mono text-[11px] leading-tight font-medium mt-0.5">
                        Same information, structured as a routine instead of a paragraph.
                      </p>
                    </div>
                  </div>

                  {/* HOW TO USE TAB (AFTER) */}
                  {phoneTab === 'how-to-use' && (
                    <div className="space-y-4">
                      
                      {/* ROUTINE PROGRESS RING HEADER */}
                      <div className="bg-[#FAF6F0] p-3 rounded-xl border border-[#E6DDD0] flex items-center justify-between shadow-xs">
                        <div>
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#B23A5C]">
                            Hair Treatment Routine
                          </span>
                          <h4 className="text-xs font-bold text-[#1E3A2B] mt-0.5">
                            {doneCount === totalSteps
                              ? '✨ Routine Completed!'
                              : `${doneCount} of ${totalSteps} Steps Checked`}
                          </h4>
                          <p className="text-[10px] text-[#66756B] mt-0.5">
                            {doneCount === totalSteps
                              ? 'Optimal active absorption achieved'
                              : 'Tap steps below as you wash'}
                          </p>
                        </div>

                        {/* Circular Progress SVG */}
                        <div className="relative w-12 h-12 flex items-center justify-center flex-shrink-0">
                          <svg className="w-12 h-12 transform -rotate-90">
                            {/* Background ring */}
                            <circle
                              cx="24"
                              cy="24"
                              r={radius}
                              stroke="#E6DDD0"
                              strokeWidth="3.5"
                              fill="transparent"
                            />
                            {/* Animated progress ring */}
                            <circle
                              cx="24"
                              cy="24"
                              r={radius}
                              stroke="#B23A5C"
                              strokeWidth="3.5"
                              strokeDasharray={circumference}
                              strokeDashoffset={strokeDashoffset}
                              strokeLinecap="round"
                              fill="transparent"
                              className="transition-all duration-500 ease-out"
                            />
                          </svg>
                          <span className="absolute text-[10px] font-bold text-[#1E3A2B]">
                            {progressPercent}%
                          </span>
                        </div>
                      </div>

                      {/* NUMBERED STEP CHECKLIST */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-[10px] text-[#66756B] px-1 font-mono">
                          <span>WASH ROUTINE (SEQUENTIAL)</span>
                          <span>TAP TO MARK DONE</span>
                        </div>

                        {STEPS.map((step) => {
                          const isDone = completedSteps.includes(step.id);
                          return (
                            <div
                              key={step.id}
                              onClick={() => toggleStep(step.id)}
                              className={`p-3 rounded-xl border transition-all duration-200 cursor-pointer flex items-start gap-3 select-none ${
                                isDone
                                  ? 'bg-[#FDF0F3]/60 border-[#B23A5C]/40 shadow-xs'
                                  : 'bg-white border-[#E6DDD0] hover:border-[#C2B6A6]'
                              }`}
                            >
                              {/* Step Number / Check Circle */}
                              <div
                                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-colors ${
                                  isDone
                                    ? 'bg-[#B23A5C] text-white shadow-xs'
                                    : 'bg-[#1E3A2B]/10 text-[#1E3A2B] border border-[#1E3A2B]/20'
                                }`}
                              >
                                {isDone ? <Check className="w-4 h-4 stroke-[3]" /> : step.id}
                              </div>

                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-1">
                                  <h4
                                    className={`text-xs font-bold ${
                                      isDone ? 'text-[#B23A5C] line-through decoration-[#B23A5C]/50' : 'text-[#1E3A2B]'
                                    }`}
                                  >
                                    {step.title}
                                  </h4>
                                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#1E3A2B]/5 text-[#526458]">
                                    {step.time}
                                  </span>
                                </div>
                                <p className="text-[11px] text-[#526458] mt-1 leading-snug">
                                  {step.detail}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* NON-SEQUENTIAL EXTEND THE ROUTINE CARDS */}
                      <div className="pt-2 space-y-2 border-t border-[#EBE4D8]">
                        <div className="flex items-center justify-between text-[10px] text-[#1E3A2B] font-bold tracking-tight">
                          <span className="flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-[#B23A5C]" />
                            EXTEND THE ROUTINE
                          </span>
                          <span className="font-mono text-[9px] text-[#88968C] font-normal">
                            Non-sequential (Order independent)
                          </span>
                        </div>

                        <div className="grid grid-cols-1 gap-2">
                          {ROUTINE_EXTENSIONS.map((item) => {
                            const IconComponent = item.icon;
                            return (
                              <div
                                key={item.id}
                                className="p-2.5 rounded-xl bg-[#FAF6F0] border border-[#E6DDD0] flex items-start gap-2.5 hover:border-[#B23A5C]/40 transition-colors"
                              >
                                <div className="w-7 h-7 rounded-lg bg-[#B23A5C]/10 text-[#B23A5C] flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <IconComponent className="w-4 h-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between">
                                    <h5 className="text-[11px] font-bold text-[#1E3A2B] truncate">
                                      {item.name}
                                    </h5>
                                    <span className="text-[8px] font-mono uppercase bg-[#1E3A2B]/10 text-[#1E3A2B] px-1.5 py-0.5 rounded">
                                      {item.tag}
                                    </span>
                                  </div>
                                  <p className="text-[10px] text-[#66756B] mt-0.5 leading-tight">
                                    {item.desc}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* INGREDIENTS TAB (AFTER) */}
                  {phoneTab === 'ingredients' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[10px] font-mono text-[#66756B] px-1">
                        <span>ACTIVE BOTANICALS</span>
                        <span>TAP TO REVEAL BENEFIT</span>
                      </div>

                      <div className="space-y-2">
                        {INGREDIENTS.map((ing) => {
                          const isExpanded = expandedIngredients.includes(ing.id);
                          return (
                            <div
                              key={ing.id}
                              onClick={() => toggleIngredient(ing.id)}
                              className={`rounded-xl border transition-all duration-200 overflow-hidden cursor-pointer ${
                                isExpanded
                                  ? 'bg-[#FAF6F0] border-[#B23A5C]/40 shadow-xs'
                                  : 'bg-white border-[#E6DDD0] hover:border-[#C2B6A6]'
                              }`}
                            >
                              <div className="p-3 flex items-center justify-between">
                                <div>
                                  <h4 className="text-xs font-bold text-[#1E3A2B]">
                                    {ing.name}
                                  </h4>
                                  <span className="text-[9px] font-mono text-[#B23A5C] bg-[#FDF0F3] px-1.5 py-0.5 rounded mt-0.5 inline-block">
                                    {ing.role}
                                  </span>
                                </div>
                                <div className="text-[#66756B] p-1">
                                  {isExpanded ? (
                                    <ChevronUp className="w-4 h-4 text-[#B23A5C]" />
                                  ) : (
                                    <ChevronDown className="w-4 h-4" />
                                  )}
                                </div>
                              </div>

                              {/* Benefit Copy revealed on tap */}
                              {isExpanded && (
                                <div className="px-3 pb-3 pt-0 border-t border-[#E6DDD0]/60 text-[11px] text-[#4A554A] bg-[#FAF6F0] leading-snug animate-fade-in">
                                  <p className="pt-2 text-[#1E3A2B]">
                                    <strong className="text-[#B23A5C]">Benefit:</strong> {ing.benefit}
                                  </p>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* PHONE BOTTOM CHROME / HOME INDICATOR */}
            <div className="bg-white border-t border-[#EBE4D8] p-2 flex justify-center items-center">
              <div className="w-32 h-1 bg-[#1C201D] rounded-full"></div>
            </div>
          </div>
        </div>
      </main>

      {/* SCOPE CALLOUT (PERSISTENT BELOW PHONE FRAME, VISIBLE IN BOTH STATES) */}
      <footer className="w-full max-w-xl">
        <div className="bg-[#FAF6F0] border-2 border-[#1E3A2B]/30 rounded-2xl p-4 sm:p-5 shadow-sm relative overflow-hidden">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#1E3A2B] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
              <Info className="w-4 h-4 text-[#F6F0E4]" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-xs font-bold text-[#1E3A2B] uppercase tracking-wider">
                  SCOPE CALLOUT
                </span>
                <button
                  onClick={() => setShowMatrixModal(true)}
                  className="font-mono text-[11px] text-[#B23A5C] underline font-bold hover:text-[#962E4A] transition-colors"
                >
                  Why only complex SKUs? →
                </button>
              </div>

              <p className="text-xs sm:text-sm text-[#2D3A30] leading-relaxed font-normal">
                This treatment applies only to <strong>usage-complex SKUs</strong> — actives/exfoliants, hair treatments, hair colour kits, gel nail systems — where misuse plausibly drives "didn't work" or "damaged" reviews. Not proposed for simple SKUs (e.g. lipstick).
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* MATRIX MODAL: SIMPLE VS COMPLEX SKU COMPARISON */}
      {showMatrixModal && (
        <div className="fixed inset-0 z-50 bg-[#1E3A2B]/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-[#F6F0E4] border border-[#E6DDD0] rounded-2xl max-w-lg w-full p-5 sm:p-6 shadow-2xl relative">
            <button
              onClick={() => setShowMatrixModal(false)}
              className="absolute top-4 right-4 text-[#66756B] hover:text-[#1E3A2B] p-1 rounded-full bg-white/60 border border-[#E6DDD0]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-[#B23A5C] font-mono text-xs font-bold mb-1">
              <Layers className="w-4 h-4" />
              <span>PRODUCT TAXONOMY & UX SCOPE</span>
            </div>

            <h3 className="font-serif text-xl font-bold text-[#1E3A2B] mb-3">
              Usage Complexity Classification
            </h3>

            <div className="space-y-3 text-xs text-[#2D3A30]">
              <div className="p-3 bg-white rounded-xl border border-[#E6DDD0]">
                <div className="flex items-center justify-between font-bold text-[#1E3A2B] mb-1">
                  <span>🔴 Simple SKUs (Excluded)</span>
                  <span className="font-mono text-[10px] text-[#88968C]">Standard PDP Flow</span>
                </div>
                <p className="text-[11px] text-[#66756B] mb-2">
                  Lipsticks, nail polish, basic hand soaps, standard blushes.
                </p>
                <div className="text-[10px] font-mono text-[#526458] bg-[#FAF6F0] p-1.5 rounded border border-[#E6DDD0]">
                  Rationale: Single-step intuitive application. Zero risk of chemical burn or failure due to bad sequence.
                </div>
              </div>

              <div className="p-3 bg-[#FDF0F3] rounded-xl border border-[#B23A5C]/30">
                <div className="flex items-center justify-between font-bold text-[#B23A5C] mb-1">
                  <span>🟢 Usage-Complex SKUs (Targeted)</span>
                  <span className="font-mono text-[10px] text-[#B23A5C]">Routine Checklist PDP</span>
                </div>
                <p className="text-[11px] text-[#526458] mb-2">
                  Active serums, hair growth treatments, chemical exfoliants, gel nail UV systems, hair colour kits.
                </p>
                <div className="text-[10px] font-mono text-[#1E3A2B] bg-white p-1.5 rounded border border-[#B23A5C]/20">
                  Rationale: Contact time, sequence, and scalp massage directly determine efficacy. Misuse leads to negative reviews.
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowMatrixModal(false)}
              className="mt-5 w-full py-2.5 bg-[#1E3A2B] text-white font-semibold text-xs rounded-xl shadow-sm hover:bg-[#2D5A42] transition-colors"
            >
              Close Breakdown
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
