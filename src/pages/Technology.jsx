import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import MachineOverview from '../components/MachineOverview';
import { technologySteps } from '../data/technology';

export default function Technology() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="The Technology Behind CALOR MEGA"
          subtitle="A precisely engineered cycle of heat, airflow and control that transforms fresh produce into shelf-stable goods."
        />

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-secondary via-accent to-success md:block" />
          <div className="space-y-10">
            {technologySteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col items-center gap-5 md:flex-row ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1">
                  <div
                    className={`rounded-3xl bg-white dark:bg-white/5 p-8 shadow-soft ${
                      i % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    } text-center`}
                  >
                    <h3 className="mb-2 text-xl font-bold text-primary dark:text-base">
                      {i + 1}. {step.title}
                    </h3>
                    <p className="text-primary/70 dark:text-base/70 leading-relaxed">{step.description}</p>
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  className="z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-accent text-2xl text-white shadow-soft"
                >
                  <step.icon />
                </motion.div>
                <div className="hidden flex-1 md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-white dark:bg-white/[0.02]">
        <MachineOverview />
      </div>
    </>
  );
}
