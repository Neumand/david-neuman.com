import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <div className='w-full px-8 py-16 md:py-20 max-w-3xl'>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className='flex items-center gap-4 mb-8'
      >
        <img
          className='rounded-full h-12 w-12'
          src='https://avatars.githubusercontent.com/u/42482170?v=4'
          width={48}
          height={48}
          alt='An avatar of David Neuman'
        />
        <div>
          <p className='text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500'>
            David Neuman
          </p>
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className='text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-tight mb-4'
      >
        Engineer. Writer.{' '}
        <span className='relative inline-block'>
          Building
          <span
            className='absolute -bottom-1 left-0 right-0 h-[3px] rounded-full'
            style={{ backgroundColor: 'hsl(var(--brand))' }}
          />
        </span>{' '}
        for the agentic era.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className='text-base md:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xl'
      >
        Writing about agentic engineering and how engineers as humans can thrive
        in an era of AI. Sharing what I learn along the way.
      </motion.p>
    </div>
  );
};
