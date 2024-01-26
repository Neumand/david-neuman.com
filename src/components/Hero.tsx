import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <div className='flex flex-col p-8 gap-10 h-[25rem] w-full dark:bg-zinc-900 bg-gray-200/75  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative items-center justify-center'>
      {/* Radial gradient for the container to give a faded look */}
      <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-zinc-950 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]'></div>
      <motion.img
        className='rounded-full inline-block h-32 w-32 mr-2'
        src='https://avatars.githubusercontent.com/u/42482170?v=4'
        width={128}
        height={128}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        alt='An avatar of David Neuman'
      />
      <motion.h1
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className='text-gray-900 dark:text-gray-300 text-4xl sm:text-7xl font-bold relative'
      >
        Hi, I'm David
      </motion.h1>

      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className='flex flex-col gap-2 text-md md:text-lg font- max-w-lg text-center text-gray-700 dark:text-gray-400'
      >
        <p className='flex flex-col md:inline'>
          I'm a product-minded engineer learning{' '}
          <span className='border border-zinc-950 dark:border-gray-700 border-solid px-4 py-2 relative self-center'>
            <span>design.</span>
            <div className='absolute top-[-4px] -left-[4px] p-0 bg-zinc-700 dark:bg-zinc-50 w-2 aspect-square rounded-full ' />
            <div className='absolute bottom-[-4px] -left-[4px] p-0 bg-zinc-700 dark:bg-zinc-50 w-2 aspect-square rounded-full ' />
            <div className='absolute top-[-4px] -right-[4px] p-0 bg-zinc-700 dark:bg-zinc-50 w-2 aspect-square rounded-full ' />
            <div className='absolute bottom-[-4px] -right-[4px] p-0 bg-zinc-700 dark:bg-zinc-50 w-2 aspect-square rounded-full ' />
          </span>
        </p>
        <p>Building for the web and sharing what I learn along the way.</p>
      </motion.div>
    </div>
  );
};
