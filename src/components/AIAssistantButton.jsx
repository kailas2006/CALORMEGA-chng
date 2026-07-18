import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export default function AIAssistantButton() {
  return (
    <div className="fixed bottom-[88px] right-6 z-50 flex items-center group">
      {/* Sleek Tooltip/Popup Bubble on Hover */}
      <div className="absolute right-16 bg-surface border border-border text-primary-text text-[15px] font-bold px-4 py-2 rounded-xl shadow-skeuo-out opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none transition-all duration-300 whitespace-nowrap backdrop-blur-md">
        Chat with AI Advisor
        <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-y-[6px] border-y-transparent border-l-[6px] border-l-border/30"></div>
      </div>

      {/* Floating Action Button */}
      <Link
        to="/ai-assistant"
        className="flex items-center justify-center w-14 h-14 bg-accent text-white rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-accent focus:ring-offset-2"
        aria-label="Open CalorTech AI Assistant page"
      >
        {/* Outer Pulsing Glow Ring */}
        <span className="absolute inset-0 rounded-full bg-accent opacity-75 animate-ping group-hover:animate-none"></span>
        
        {/* Sparkles / Bot Icon */}
        <Sparkles className="w-7 h-7 relative z-10 animate-pulse text-white fill-current" />
      </Link>
    </div>
  );
}
