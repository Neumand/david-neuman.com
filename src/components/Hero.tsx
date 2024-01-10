import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <div className='flex flex-col p-8 gap-10 h-[25rem] w-full dark:bg-cool-gray-900 bg-gray-200  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative items-center justify-center'>
      {/* Radial gradient for the container to give a faded look */}
      <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
      <motion.h1
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className='text-gray-900 dark:text-gray-300 text-4xl sm:text-7xl font-bold relative'
      >
        David Neuman
      </motion.h1>

      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className='flex flex-col gap-2 text-md md:text-lg font- max-w-xl text-center text-gray-800 dark:text-gray-400'
      >
        <p>
          Product-minded engineer learning design. Building digital products
          users love, and sharing what I learn along the way
        </p>
        <p>
          Engineering @{' '}
          <a className='link' href='https://lifehousehotels.com'>
            Life House
          </a>
        </p>
      </motion.div>
    </div>
  );
};
