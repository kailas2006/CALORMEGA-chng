import { FaCircle } from 'react-icons/fa';

const items = [
  'Jackfruit',
  'Banana',
  'Mango',
  'Pineapple',
  'Coconut',
  'Vegetables',
  'Herbs',
  'Spices',
  'Fruits',
  'Medicinal Plants',
];

export default function TrustMarquee() {
  const track = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-primary/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] py-4 backdrop-blur">
      <div className="marquee-track">
        {track.map((item, i) => (
          <span
            key={i}
            className="mx-6 flex items-center gap-3 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.15em] text-primary/50 dark:text-base/50"
          >
            {item}
            <FaCircle className="text-[5px] text-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}
