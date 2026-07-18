import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageSquare, Phone, RefreshCw, HelpCircle } from 'lucide-react';

export default function AIAssistant() {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hello! I am the CalorTech AI Assistant. I can help answer questions about our commercial dehumidifiers, crop compatibility, energy consumption, and product sizing. What would you like to know today?'
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const chatEndRef = useRef(null);

  const suggestedQuestions = [
    "What size room does Calor Mega support?",
    "Which crops are suitable for heat-pump drying?",
    "What is the starting price of the models?",
    "How much energy does the Calor Mega consume?"
  ];

  // Auto-scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (textToSend) => {
    if (!textToSend.trim()) return;

    // Add user message
    const userMsg = { sender: 'user', text: textToSend };
    setMessages(prev => [...prev, userMsg]);
    setInputVal('');

    // Generate bot reply
    setTimeout(() => {
      const lower = textToSend.toLowerCase();
      let botReply = '';

      if (lower.includes('size') || lower.includes('room') || lower.includes('square') || lower.includes('sq ft')) {
        botReply = 'The Calor Mega is a walk-in 10x10 foot room suitable for spaces up to 1,000 sq ft. The Calor Standard is built as a cabinet for rooms up to 350 sq ft, while the Calor Mini fits comfortably on any desk and supports up to 80 sq ft.';
      } else if (lower.includes('crop') || lower.includes('fruit') || lower.includes('mango') || lower.includes('agricultural') || lower.includes('drying')) {
        botReply = 'Our heat-pump technology is highly compatible with fruits (mango, banana, citrus segments), herbs, seeds, nuts, and medicinal botanicals. Drying at moderate temperatures (38°C to 55°C) keeps colors, vitamins, and natural flavors fully intact.';
      } else if (lower.includes('price') || lower.includes('pricing') || lower.includes('cost') || lower.includes('buy')) {
        botReply = 'Our catalog prices are: Calor Mega starts at $12,500; Calor Standard starts at $4,200; Calor Mini starts at $1,800. For custom cooperative pricing, volume discounts, or shipping, please click the "Chat on WhatsApp" button to reach our sales team directly.';
      } else if (lower.includes('energy') || lower.includes('power') || lower.includes('watt') || lower.includes('kilowatt')) {
        botReply = 'Calor Tech systems are extremely efficient. The Calor Mega consumes an average of 3.2 kW, the Calor Standard consumes 1.2 kW, and the Calor Mini consumes just 0.45 kW. Our heat-pump cycle recycles thermal energy, lowering electricity bills by up to 45%.';
      } else if (lower.includes('warranty') || lower.includes('guarantee') || lower.includes('support')) {
        botReply = 'We offer a 2-Year Premium Commercial Warranty for the Calor Mega and Calor Standard (which includes certified on-site diagnostics and parts). The Calor Mini includes a 1-Year Limited Parts & Repair warranty.';
      } else {
        botReply = "I understand you have questions about that. To get specific configurations or a custom quotation, we highly recommend chatting directly with our engineers via WhatsApp by clicking the green button on the screen.";
      }

      setMessages(prev => [...prev, { sender: 'bot', text: botReply }]);
    }, 800);
  };

  const handleReset = () => {
    setMessages([
      {
        sender: 'bot',
        text: 'Chat history cleared. How else can I assist you with humidity control today?'
      }
    ]);
  };

  return (
    <div className="w-full min-h-[calc(100vh-80px)] bg-bg py-8 px-4 md:px-12 transition-colors duration-300 flex flex-col items-center">
      <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch flex-grow">
        
        {/* Left Side: Chat UI */}
        <div className="lg:col-span-8 flex flex-col border border-border bg-surface rounded-3xl shadow-skeuo-out overflow-hidden h-[750px] transition-colors">
          {/* Header */}
          <div className="bg-brand-light border-b border-border p-6 flex justify-between items-center transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-black font-outfit text-primary-text leading-tight">
                  CalorTech AI Advisor
                </h1>
                <span className="text-[16px] text-green-600 dark:text-green-400 font-bold block mt-0.5">
                  ● Automated Virtual Assistant Active
                </span>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="p-3 text-secondary-text hover:text-primary-text border border-border hover:bg-toggle-bg rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Restart chat conversation"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Display Box */}
          <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-6 bg-surface/50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-5 shadow-sm text-[18px] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-accent text-white font-semibold'
                      : 'bg-brand-light text-primary-text border border-border font-medium'
                  }`}
                >
                  <p>{msg.text}</p>
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Sticky Input Area */}
          <div className="border-t border-border p-6 bg-surface">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputVal);
              }}
              className="flex gap-4 items-center"
            >
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type your question about Calor Tech here..."
                className="flex-1 h-14 px-4 rounded-xl bg-bg border border-border text-primary-text text-[18px] focus:outline-none focus:ring-2 focus:ring-accent placeholder-secondary-text/40 transition-all"
                aria-label="Type your message to the AI Assistant"
              />
              <button
                type="submit"
                className="h-14 w-14 bg-accent hover:bg-accent/90 active:scale-95 text-white rounded-xl flex items-center justify-center shadow-btn focus:outline-none focus:ring-4 focus:ring-accent flex-shrink-0"
                aria-label="Send message to assistant"
              >
                <Send className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>

        {/* Right Side: Quick Action Sidebar (FAQs & WhatsApp Option) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* Prominent WhatsApp CTA block */}
          <div className="p-8 rounded-3xl bg-whatsapp/10 border border-whatsapp/20 shadow-skeuo-out flex flex-col gap-4 items-center text-center">
            <div className="w-14 h-14 bg-whatsapp text-white rounded-full flex items-center justify-center shadow-lg">
              <Phone className="w-7 h-7 fill-current" />
            </div>
            <h3 className="text-2xl font-extrabold font-outfit text-primary-text leading-tight">
              Request a Custom Quote
            </h3>
            <p className="text-[18px] text-secondary-text leading-relaxed">
              Prefer speaking with a human specialist? Click below to instantly open WhatsApp and inquire about specifications, pricing, and installation.
            </p>
            <a
              href="https://wa.me/1234567890?text=Hello%20CalorTech%20Systems%2C%20I%20am%20using%20your%20AI%20Assistant%20and%20would%20like%20to%20connect%20with%20a%20sales%20representative%20regarding%20custom%20installation%20quotes."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-14 bg-whatsapp hover:bg-whatsapp/90 active:scale-95 text-white text-[18px] font-extrabold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md focus:outline-none focus:ring-4 focus:ring-whatsapp"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Preset Questions Panel */}
          <div className="p-6 rounded-3xl bg-surface border border-border shadow-skeuo-out transition-colors">
            <h3 className="text-xl font-bold font-outfit text-primary-text mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-accent" />
              Suggested Questions
            </h3>
            <div className="flex flex-col gap-3">
              {suggestedQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="w-full text-left p-4 rounded-xl bg-brand-light hover:bg-toggle-bg border border-border text-[18px] text-primary-text font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
