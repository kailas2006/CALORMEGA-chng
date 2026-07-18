import React from 'react';
import { Shield, Users, Landmark, Award, Milestone } from 'lucide-react';

export default function About() {
  const timelineEvents = [
    { year: '2019', title: 'Company Founded', desc: 'CalorTech Systems was formed by thermal engineers and agricultural researchers to address crop waste in local farming clusters.' },
    { year: '2021', title: 'Innovatech Patent', desc: 'Developed and patented our automated post-harvest heat-pump dehydration loop, doubling energy efficiency over resistive heating.' },
    { year: '2023', title: 'Cooperative Deployments', desc: 'Installed standard drying cabinets in 15 regional cooperatives, successfully preserving over 500 tons of surplus produce.' },
    { year: '2026', title: 'Calor Mega Release', desc: 'Launched our flagship walk-in commercial preservation chamber to support massive regional agricultural exports.' }
  ];

  return (
    <div className="w-full py-16 px-6 md:px-12 bg-bg transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-16">
        
        {/* 1. VISION & MISSION HERO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text content */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <span className="text-[18px] font-black uppercase text-accent tracking-wider">
              Engineering Better Yields
            </span>
            <h1 className="text-4xl md:text-5xl font-black font-outfit text-primary-text leading-tight">
              About CalorTech Systems
            </h1>
            <p className="text-[20px] md:text-[22px] text-primary-text leading-relaxed font-semibold">
              At CalorTech Systems, we bridge the critical gap between massive regional harvests and commercial markets. By engineering premium, high-efficiency dehumidification systems, we empower farmers, eliminate waste, and build localized food security.
            </p>
            <p className="text-[18px] text-secondary-text leading-relaxed">
              Our products are engineered to be extremely robust, high-yielding, and simple to operate. We prioritize simple digital user screens, high-contrast readouts, and heavy-duty structural reliability to ensure anyone—from family farm owners to industrial cooperative staff—can achieve perfect preservation.
            </p>
          </div>

          {/* Interactive Wireframe Column */}
          <div className="lg:col-span-4 flex justify-center items-center h-[300px] perspective-[1000px] select-none">
            {/* 3D Wireframe container */}
            <div className="w-[140px] h-[190px] relative transform-style-3d wireframe-box-animate">
              {/* Faces */}
              <div className="absolute w-[140px] h-[190px] border border-accent/40 bg-accent/5 transform rotate-y-0 translate-z-[70px] flex items-center justify-center text-[10px] text-accent/80 font-mono">FRONT</div>
              <div className="absolute w-[140px] h-[190px] border border-accent/40 bg-accent/5 transform rotate-y-180 translate-z-[70px] flex items-center justify-center text-[10px] text-accent/80 font-mono">BACK</div>
              <div className="absolute w-[140px] h-[190px] border border-accent/40 bg-accent/5 transform rotate-y-[-90deg] translate-z-[70px]"></div>
              <div className="absolute w-[140px] h-[190px] border border-accent/40 bg-accent/5 transform rotate-y-[90deg] translate-z-[70px]"></div>
              <div className="absolute w-[140px] h-[140px] border border-accent/40 bg-accent/5 transform rotate-x-[90deg] translate-z-[70px]"></div>
              <div className="absolute w-[140px] h-[140px] border border-accent/40 bg-accent/5 transform rotate-x-[-90deg] translate-z-[120px]"></div>
            </div>
          </div>
        </div>

        {/* 2. WHY HUMIDITY CONTROL MATTERS */}
        <div className="p-8 md:p-12 rounded-3xl bg-brand-light border border-border shadow-skeuo-in grid grid-cols-1 md:grid-cols-2 gap-8 items-start transition-colors duration-300">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-extrabold font-outfit text-primary-text">
              Why Humidity Control Matters
            </h2>
            <p className="text-[18px] text-secondary-text leading-relaxed">
              Traditional drying techniques rely on high heat, which cooks the crop, destroys sensitive vitamins, alters the color, and damages cellular structure. 
            </p>
            <p className="text-[18px] text-secondary-text leading-relaxed">
              CalorTech utilizes **Heat-Pump Dehumidification**. By drawing air through a cooling cycle to condense and remove moisture, and then reheating it slightly to expand, we pull water out of crops at safe temperatures (typically between 38°C and 55°C). 
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="p-6 bg-surface border border-border rounded-2xl flex gap-4 transition-colors">
              <Shield className="w-8 h-8 text-accent flex-shrink-0" />
              <div>
                <strong className="text-[18px] text-primary-text block font-bold">100% Nutrient Retention</strong>
                <span className="text-[18px] text-secondary-text">Vitamins, color pigments, and aroma compounds are completely preserved.</span>
              </div>
            </div>
            <div className="p-6 bg-surface border border-border rounded-2xl flex gap-4 transition-colors">
              <Award className="w-8 h-8 text-accent flex-shrink-0" />
              <div>
                <strong className="text-[18px] text-primary-text block font-bold">Longer Shelf Stability</strong>
                <span className="text-[18px] text-secondary-text">Maintains a consistent 5% moisture baseline preventing mold and pest contamination.</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. QUALITY, CERTIFICATIONS & SUSTAINABILITY */}
        <div className="flex flex-col gap-8">
          <div className="text-center max-w-[800px] mx-auto flex flex-col gap-4">
            <h2 className="text-3xl font-extrabold font-outfit text-primary-text">
              Manufacturing Standards & Certifications
            </h2>
            <p className="text-[18px] text-secondary-text">
              We design and construct every system using food-grade materials and strict eco-friendly guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-surface border border-border shadow-skeuo-out text-center flex flex-col gap-4 items-center transition-colors duration-300">
              <Users className="w-12 h-12 text-accent" />
              <h3 className="text-xl font-bold text-primary-text font-outfit">Local Support</h3>
              <p className="text-[18px] text-secondary-text">
                Every regional installation includes hands-on staff training and 24/7 hotline service.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-surface border border-border shadow-skeuo-out text-center flex flex-col gap-4 items-center transition-colors duration-300">
              <Landmark className="w-12 h-12 text-accent" />
              <h3 className="text-xl font-bold text-primary-text font-outfit">Eco Certified</h3>
              <p className="text-[18px] text-secondary-text">
                R290/R134a refrigeration compliant systems with zero ozone depletion potential.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-surface border border-border shadow-skeuo-out text-center flex flex-col gap-4 items-center transition-colors duration-300">
              <Award className="w-12 h-12 text-accent" />
              <h3 className="text-xl font-bold text-primary-text font-outfit">ISO 9001 Quality</h3>
              <p className="text-[18px] text-secondary-text">
                Manufactured inside ISO 9001 certified facilities following heavy industrial safety protocols.
              </p>
            </div>
          </div>
        </div>

        {/* 4. COMPANY TIMELINE */}
        <div className="flex flex-col gap-12 border-t border-border pt-12">
          <h2 className="text-3xl font-extrabold font-outfit text-primary-text text-center">
            Our Journey & Growth
          </h2>

          <div className="relative max-w-[800px] mx-auto flex flex-col gap-12 before:content-[''] before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[3px] before:bg-border before:z-0">
            {timelineEvents.map((event, idx) => (
              <div key={idx} className="relative pl-12 z-10 flex flex-col gap-2">
                {/* Bullet */}
                <div className="absolute left-[3px] top-1.5 w-7 h-7 rounded-full bg-bg border-4 border-accent flex items-center justify-center shadow-md">
                  <Milestone className="w-3.5 h-3.5 text-accent" />
                </div>
                {/* Content */}
                <div>
                  <span className="text-accent text-[18px] font-black">{event.year}</span>
                  <h3 className="text-2xl font-bold text-primary-text font-outfit">{event.title}</h3>
                </div>
                <p className="text-[18px] text-secondary-text leading-relaxed">
                  {event.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
