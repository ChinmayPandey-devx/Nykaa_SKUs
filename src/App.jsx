import React, { useState } from 'react';
import {
  ArrowLeft,
  Search,
  Heart,
  ShoppingBag,
  Star,
  Check,
  CheckCircle2,
  AlertTriangle,
  Wifi,
  Signal,
  Battery,
  Plus,
  Minus,
  Sparkles,
  Droplets,
  ShieldCheck
} from 'lucide-react';

const STEPS_DATA = [
  {
    id: 1,
    title: 'Apply & Massage',
    desc: 'Apply 5-10ml to wet scalp and massage gently with finger pads for 2-3 minutes.'
  },
  {
    id: 2,
    title: 'Lather & Rest',
    desc: 'Work into rich lather. Allow active botanicals to rest on scalp for 2 mins.'
  },
  {
    id: 3,
    title: 'Rinse Thoroughly',
    desc: 'Rinse with lukewarm water. Repeat if scalp has heavy oil or product buildup.'
  }
];

const ROUTINE_COMPANIONS = [
  {
    id: 'serum',
    title: 'Serum',
    badge: '🌙 Every night',
    desc: 'Leave-in treatment on towel-dried scalp'
  },
  {
    id: 'conditioner',
    title: 'Conditioner',
    badge: '💧 After every wash',
    desc: 'Apply to mid-lengths and ends only'
  }
];

const INGREDIENTS_DATA = [
  {
    id: 'rosemary',
    emoji: '🌿',
    name: 'Rosemary',
    benefit: 'Stimulates scalp microcirculation and slows follicle aging'
  },
  {
    id: 'capilia',
    emoji: '🌱',
    name: 'Capilia Longa',
    benefit: 'Reactivates hair growth phase & increases hair density'
  },
  {
    id: 'hyaluronic',
    emoji: '💧',
    name: 'Hyaluronic Acid',
    benefit: 'Hydrates scalp skin barrier to prevent flaking & dryness'
  },
  {
    id: 'ginseng',
    emoji: '🪵',
    name: 'Ginseng',
    benefit: 'Nourishes hair roots for improved tensile strength'
  },
  {
    id: 'caffeine',
    emoji: '☕',
    name: 'Caffeine',
    benefit: 'Blocks DHT hormone responsible for hair thinning'
  }
];

export default function App() {
  // Main Before/After toggle (sits above phone frame)
  const [toggleState, setToggleState] = useState('after'); // 'before' | 'after'

  // Phone inner PDP active tab: 'how-to-use' | 'ingredients' | 'description'
  const [activeTab, setActiveTab] = useState('how-to-use');

  // Completed steps tracking in After state
  const [completedSteps, setCompletedSteps] = useState([1]);

  // Expanded ingredient cards in After state
  const [expandedIngredients, setExpandedIngredients] = useState(['rosemary']);

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

  // Progress ring math
  const totalSteps = STEPS_DATA.length;
  const completedCount = completedSteps.length;
  const progressPercent = (completedCount / totalSteps) * 100;
  const radius = 14;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

  return (
    <div className="min-h-screen bg-[#F7F7F7] text-[#262626] py-8 px-4 flex flex-col items-center justify-between font-sans">
      
      {/* HEADER & TOP TOGGLE SWITCH (SITS ABOVE PHONE FRAME) */}
      <div className="w-full max-w-md flex flex-col items-center mb-6 text-center">
        <h1 className="text-xl font-bold text-[#262626] mb-1 tracking-tight">
          Nykaa PDP Usage Fix
        </h1>
        <p className="text-xs text-[#767676] mb-4">
          WishCare Anti-Hairfall Shampoo (Usage-Complex SKU)
        </p>

        {/* TOGGLE: Pill-shaped segmented buttons */}
        <div className="flex items-center gap-2 bg-white p-1.5 rounded-[24px] border border-[#E0E0E0] shadow-sm">
          <button
            onClick={() => setToggleState('before')}
            className={`px-4 py-2 text-xs font-semibold rounded-[24px] transition-all duration-200 ${
              toggleState === 'before'
                ? 'bg-[#FC2779] text-white shadow-sm'
                : 'bg-white text-[#767676] hover:text-[#262626]'
            }`}
          >
            Before (Current)
          </button>

          <button
            onClick={() => setToggleState('after')}
            className={`px-4 py-2 text-xs font-semibold rounded-[24px] transition-all duration-200 flex items-center gap-1.5 ${
              toggleState === 'after'
                ? 'bg-[#FC2779] text-white shadow-sm'
                : 'bg-white text-[#767676] hover:text-[#262626]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>After (Proposed)</span>
          </button>
        </div>
      </div>

      {/* MOBILE PHONE FRAME (390px wide) */}
      <div className="w-full max-w-[390px] bg-black p-3.5 rounded-[44px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 border-[#333333] relative">
        
        {/* INNER PHONE SCREEN CONTAINER */}
        <div className="w-full bg-white rounded-[32px] overflow-hidden h-[730px] flex flex-col relative border border-[#EEEEEE]">
          
          {/* FAKE STATUS BAR */}
          <div className="bg-[#FC2779] text-white px-5 pt-3 pb-1 flex justify-between items-center text-xs font-medium">
            <span>9:41</span>
            {/* Notch / Dynamic Island */}
            <div className="w-20 h-4 bg-black rounded-full"></div>
            {/* Icons */}
            <div className="flex items-center gap-1.5 text-white">
              <Signal className="w-3 h-3 fill-current" />
              <Wifi className="w-3 h-3" />
              <Battery className="w-4 h-4 fill-current" />
            </div>
          </div>

          {/* NYKAA TOP NAV BAR */}
          <div className="bg-[#FC2779] text-white px-4 py-2.5 flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-3">
              <ArrowLeft className="w-5 h-5 cursor-pointer opacity-90" />
              <span className="font-extrabold tracking-wider text-base uppercase italic font-sans">
                NYKAA
              </span>
            </div>
            <div className="flex items-center gap-3.5">
              <Search className="w-4 h-4 cursor-pointer opacity-90" />
              <Heart className="w-4 h-4 cursor-pointer opacity-90" />
              <div className="relative cursor-pointer">
                <ShoppingBag className="w-4 h-4 opacity-90" />
                <span className="absolute -top-1.5 -right-1.5 bg-white text-[#FC2779] text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold shadow-xs">
                  2
                </span>
              </div>
            </div>
          </div>

          {/* SCROLLABLE PDP BODY */}
          <div className="flex-1 overflow-y-auto phone-scroll bg-white pb-20">
            
            {/* PRODUCT HEADER (IDENTICAL IN BOTH STATES) */}
            <div className="p-4 border-b border-[#EEEEEE]">
              
              {/* Product Image Placeholder: 16:9 Soft Gradient Rectangle */}
              <div className="w-full aspect-[16/9] rounded-[12px] bg-gradient-to-br from-[#FFF0F5] via-[#FCE4EC] to-[#F8BBD0] flex flex-col items-center justify-center relative overflow-hidden mb-3.5 border border-[#F8BBD0]/40 shadow-xs">
                <div className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-xs flex items-center justify-center shadow-xs">
                  <Droplets className="w-7 h-7 text-[#FC2779]" />
                </div>
                <span className="mt-1 text-[11px] font-bold text-[#FC2779] tracking-wider uppercase">
                  WishCare Haircare
                </span>
              </div>

              {/* Brand Row + Nykaa Verified Badge */}
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-sm text-[#262626]">WishCare</span>
                
                {/* Green Nykaa Verified Badge */}
                <div className="bg-[#E8F5E9] text-[#1E8E3E] px-2 py-0.5 rounded-[8px] flex items-center gap-1 text-[10px] font-semibold border border-[#C8E6C9]/50">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Nykaa Verified</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-[18px] font-bold text-[#262626] leading-snug mb-0.5">
                WishCare Anti-Hairfall Shampoo
              </h2>

              {/* Subtitle */}
              <p className="text-[13px] text-[#767676] mb-2.5">
                300ml • With Rosemary & Capilia Longa
              </p>

              {/* Price Row */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-base font-bold text-[#262626]">₹599</span>
                <span className="text-xs text-[#9C9C9C] line-through">₹799</span>
                <span className="bg-[#E8F5E9] text-[#1E8E3E] text-[10px] font-bold px-2 py-0.5 rounded-[8px]">
                  25% OFF
                </span>
              </div>

              {/* Rating Row */}
              <div className="flex items-center gap-1.5 text-xs">
                <div className="flex items-center text-[#FFA800]">
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <span className="font-bold text-[#262626]">4.4</span>
                <span className="text-[#767676] text-[11px]">(1.2k)</span>
              </div>
            </div>

            {/* TABS: Description / Ingredients / How to Use */}
            <div className="flex border-b border-[#EEEEEE] bg-white sticky top-0 z-10">
              <button
                onClick={() => setActiveTab('description')}
                className={`flex-1 py-3 text-xs font-semibold text-center border-b-2 transition-colors ${
                  activeTab === 'description'
                    ? 'border-[#FC2779] text-[#FC2779]'
                    : 'border-transparent text-[#767676] hover:text-[#262626]'
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('ingredients')}
                className={`flex-1 py-3 text-xs font-semibold text-center border-b-2 transition-colors ${
                  activeTab === 'ingredients'
                    ? 'border-[#FC2779] text-[#FC2779]'
                    : 'border-transparent text-[#767676] hover:text-[#262626]'
                }`}
              >
                Ingredients
              </button>
              <button
                onClick={() => setActiveTab('how-to-use')}
                className={`flex-1 py-3 text-xs font-semibold text-center border-b-2 transition-colors ${
                  activeTab === 'how-to-use'
                    ? 'border-[#FC2779] text-[#FC2779]'
                    : 'border-transparent text-[#767676] hover:text-[#262626]'
                }`}
              >
                How to Use
              </button>
            </div>

            {/* TAB CONTENT AREA WITH 250ms CROSS-FADE */}
            <div className="p-4">
              
              {/* HOW TO USE TAB */}
              {activeTab === 'how-to-use' && (
                <div key={`how-to-use-${toggleState}`} className="animate-cross-fade space-y-3.5">
                  
                  {/* BEFORE STATE CONTENT */}
                  {toggleState === 'before' && (
                    <div className="space-y-3">
                      {/* Red Annotation Callout ABOVE text */}
                      <div className="bg-[#FDEDED] border border-[#FFCDD2] text-[#D32F2F] p-3 rounded-[8px] flex items-start gap-2 text-xs">
                        <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span className="font-semibold leading-tight">
                          Wall of text — no indication anyone reads past line 2.
                        </span>
                      </div>

                      {/* Plain Dense Paragraph (Wall of text) */}
                      <div className="bg-[#F7F7F7] p-3.5 rounded-[12px] border border-[#EEEEEE] text-xs text-[#262626] leading-relaxed">
                        For best results, apply a generous amount of WishCare Anti-Hairfall Shampoo to thoroughly wet hair and scalp. Massage gently with finger pads for 2-3 minutes to stimulate scalp microcirculation and allow active botanical extracts including Rosemary and Capilia Longa to penetrate hair follicles. Work into a rich lather from roots to tip. Rinse thoroughly with lukewarm water. Repeat wash if scalp feels excessively oily or has heavy styling product buildup. Avoid contact with eyes. For optimal anti-hairfall efficacy, follow immediately with WishCare Hair Growth Serum applied directly to towel-dried scalp and apply WishCare Hairfall Control Conditioner exclusively to hair lengths and ends for 3 minutes before final rinse.
                      </div>
                    </div>
                  )}

                  {/* AFTER STATE CONTENT */}
                  {toggleState === 'after' && (
                    <div className="space-y-3.5">
                      {/* Green Annotation Callout ABOVE steps */}
                      <div className="bg-[#EAF7EC] border border-[#C8E6C9] text-[#1E8E3E] p-3 rounded-[8px] flex items-start gap-2 text-xs">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span className="font-semibold leading-tight">
                          Same information, structured as a routine instead of a paragraph.
                        </span>
                      </div>

                      {/* SECTION HEADER & CIRCULAR PROGRESS RING */}
                      <div className="flex items-center justify-between pt-1">
                        <div>
                          <h3 className="text-xs font-bold text-[#262626] uppercase tracking-wider">
                            Application Routine
                          </h3>
                          <p className="text-[11px] text-[#767676]">
                            Follow steps in sequence
                          </p>
                        </div>

                        {/* Circular Progress Ring (SVG, #FC2779 stroke) */}
                        <div className="flex items-center gap-1.5 bg-[#FFF0F5] px-2.5 py-1 rounded-[24px] border border-[#FC2779]/20">
                          <div className="relative w-6 h-6 flex items-center justify-center">
                            <svg className="w-6 h-6 transform -rotate-90">
                              <circle
                                cx="12"
                                cy="12"
                                r={radius}
                                stroke="#F8BBD0"
                                strokeWidth="2.5"
                                fill="transparent"
                              />
                              <circle
                                cx="12"
                                cy="12"
                                r={radius}
                                stroke="#FC2779"
                                strokeWidth="2.5"
                                strokeDasharray={circumference}
                                strokeDashoffset={strokeDashoffset}
                                strokeLinecap="round"
                                fill="transparent"
                                className="transition-all duration-300"
                              />
                            </svg>
                          </div>
                          <span className="text-xs font-bold text-[#FC2779]">
                            {completedCount}/{totalSteps}
                          </span>
                        </div>
                      </div>

                      {/* 3 NUMBERED STEPS CARDS */}
                      <div className="space-y-2.5">
                        {STEPS_DATA.map((step) => {
                          const isDone = completedSteps.includes(step.id);
                          return (
                            <div
                              key={step.id}
                              onClick={() => toggleStep(step.id)}
                              className={`p-3 rounded-[12px] bg-white border transition-all duration-200 cursor-pointer flex items-start gap-3 shadow-xs ${
                                isDone
                                  ? 'border-[#FC2779] bg-[#FFF0F5]/40'
                                  : 'border-[#EEEEEE] hover:border-[#E0E0E0]'
                              }`}
                            >
                              {/* Circular Step-Check Icon */}
                              <div
                                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 transition-colors ${
                                  isDone
                                    ? 'bg-[#FC2779] text-white'
                                    : 'border-2 border-[#E0E0E0] text-[#767676]'
                                }`}
                              >
                                {isDone ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : step.id}
                              </div>

                              <div className="flex-1 min-w-0">
                                <h4
                                  className={`text-xs font-bold ${
                                    isDone ? 'text-[#FC2779]' : 'text-[#262626]'
                                  }`}
                                >
                                  {step.title}
                                </h4>
                                <p className="text-[11px] text-[#767676] mt-0.5 leading-snug">
                                  {step.desc}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* DIVIDER: COMPLETE THE ROUTINE */}
                      <div className="pt-2">
                        <div className="flex items-center gap-2 mb-2.5">
                          <div className="h-[1px] bg-[#EEEEEE] flex-1"></div>
                          <span className="text-[10px] font-bold text-[#767676] tracking-widest uppercase">
                            COMPLETE THE ROUTINE
                          </span>
                          <div className="h-[1px] bg-[#EEEEEE] flex-1"></div>
                        </div>

                        {/* SIDE-BY-SIDE ROUTINE COMPANIONS (NO NUMBERS) */}
                        <div className="grid grid-cols-2 gap-2">
                          {ROUTINE_COMPANIONS.map((item) => (
                            <div
                              key={item.id}
                              className="bg-white p-2.5 rounded-[12px] border border-[#EEEEEE] flex flex-col justify-between"
                            >
                              <div>
                                <span className="text-[9px] font-medium bg-[#F7F7F7] text-[#767676] px-1.5 py-0.5 rounded-[8px] inline-block mb-1">
                                  {item.badge}
                                </span>
                                <h5 className="text-xs font-bold text-[#262626]">
                                  {item.title}
                                </h5>
                              </div>
                              <p className="text-[10px] text-[#767676] mt-1 leading-tight">
                                {item.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* INGREDIENTS TAB */}
              {activeTab === 'ingredients' && (
                <div key={`ingredients-${toggleState}`} className="animate-cross-fade space-y-3">
                  
                  {/* BEFORE STATE: PLAIN COMMA-SEPARATED TEXT LIST */}
                  {toggleState === 'before' && (
                    <div className="space-y-2">
                      <div className="bg-[#FDEDED] border border-[#FFCDD2] text-[#D32F2F] p-3 rounded-[8px] flex items-start gap-2 text-xs mb-2">
                        <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span className="font-semibold leading-tight">
                          Flat text list — zero benefit context for active ingredients.
                        </span>
                      </div>

                      <div className="bg-[#F7F7F7] p-3.5 rounded-[12px] border border-[#EEEEEE] text-xs text-[#262626] leading-relaxed">
                        <p className="font-bold mb-1">Active Ingredients List:</p>
                        Rosemary, Capilia Longa, Hyaluronic Acid, Ginseng, Caffeine
                      </div>
                    </div>
                  )}

                  {/* AFTER STATE: 2-COLUMN GRID OF WHITE ROUNDED CARDS WITH EXPANDABLE BENEFITS */}
                  {toggleState === 'after' && (
                    <div className="space-y-2.5">
                      <div className="bg-[#EAF7EC] border border-[#C8E6C9] text-[#1E8E3E] p-3 rounded-[8px] flex items-start gap-2 text-xs mb-2">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span className="font-semibold leading-tight">
                          Interactive ingredient cards with benefit reveals.
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {INGREDIENTS_DATA.map((ing) => {
                          const isExpanded = expandedIngredients.includes(ing.id);
                          return (
                            <div
                              key={ing.id}
                              onClick={() => toggleIngredient(ing.id)}
                              className={`bg-white p-3 rounded-[12px] border transition-all duration-200 cursor-pointer shadow-xs ${
                                isExpanded
                                  ? 'border-[#FC2779] bg-[#FFF0F5]/30 col-span-2'
                                  : 'border-[#EEEEEE] hover:border-[#E0E0E0]'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                  <span className="text-base">{ing.emoji}</span>
                                  <span className="text-xs font-bold text-[#262626]">
                                    {ing.name}
                                  </span>
                                </div>
                                <div className="w-5 h-5 rounded-full bg-[#F7F7F7] flex items-center justify-center text-[#767676]">
                                  {isExpanded ? (
                                    <Minus className="w-3 h-3 text-[#FC2779]" />
                                  ) : (
                                    <Plus className="w-3 h-3" />
                                  )}
                                </div>
                              </div>

                              {/* Expanded Benefit Description */}
                              {isExpanded && (
                                <p className="text-[11px] text-[#767676] mt-2 pt-2 border-t border-[#EEEEEE] leading-snug">
                                  <strong className="text-[#FC2779]">Benefit:</strong> {ing.benefit}
                                </p>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* DESCRIPTION TAB */}
              {activeTab === 'description' && (
                <div key="description-tab" className="animate-cross-fade space-y-3">
                  <div className="bg-[#F7F7F7] p-3.5 rounded-[12px] border border-[#EEEEEE] text-xs text-[#262626] leading-relaxed">
                    <h4 className="font-bold text-[#262626] mb-1">About the Product</h4>
                    <p className="text-[#767676]">
                      WishCare Anti-Hairfall Shampoo is an advanced botanical formulation engineered to reduce hair shedding, strengthen roots, and promote healthy scalp microcirculation.
                    </p>
                    <ul className="mt-2.5 space-y-1 text-[#262626]">
                      <li>• Sulfates & Parabens Free</li>
                      <li>• Dermatologically Tested</li>
                      <li>• Suitable for All Hair Types</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* STICKY BOTTOM BAR (BOTH STATES) */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#EEEEEE] p-3 z-20">
            <button className="w-full py-3 bg-[#FC2779] text-white font-bold text-sm rounded-[24px] shadow-sm hover:bg-[#E01E69] transition-colors">
              Add to Bag
            </button>
          </div>
        </div>
      </div>

      {/* SCOPE CALLOUT (BELOW PHONE FRAME, ALWAYS VISIBLE) */}
      <div className="mt-6 text-center max-w-[320px]">
        <p className="text-xs text-[#767676] leading-relaxed">
          Applies to usage-complex SKUs only — actives, hair treatments, colour kits, gel nail systems. Not proposed for simple SKUs (e.g. lipstick).
        </p>
      </div>
    </div>
  );
}
