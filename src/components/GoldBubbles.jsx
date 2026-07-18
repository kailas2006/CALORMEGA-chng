import { useEffect, useState } from 'react';

export default function GoldBubbles() {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    // Generate bubbles on mount to ensure server-side and client-side consistency
    const generated = Array.from({ length: 35 }, (_, i) => {
      const size = 8 + ((i * 13) % 21); // Sizes: 8px to 28px
      const left = (i * 37) % 96;        // Horizontal coordinates: 0% to 95%
      const duration = 12 + ((i * 7) % 18); // Durations: 12s to 30s
      const delay = -((i * 11) % 25);    // Pre-distributes heights instantly on mount
      const opacity = 0.12 + ((i * 3) % 4) * 0.08; // Opacities: 0.12 to 0.36

      return {
        id: i,
        style: {
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          '--bubble-duration': `${duration}s`,
          '--bubble-delay': `${delay}s`,
          '--bubble-opacity': opacity,
        },
      };
    });
    setBubbles(generated);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      {bubbles.map((b) => (
        <span key={b.id} className="gold-bubble" style={b.style} />
      ))}
    </div>
  );
}
