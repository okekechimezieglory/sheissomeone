'use client'
import { motion } from 'framer-motion'
import FadeIn from '../lib/variants'
import AnimatedCounter from '../lib/animatedCounter'

const Services = () => {
  return (
    <section id='services' className='z-30 -translate-y-1 bg-secondary'>
      <div className='container w-full py-[100px] lg:py-[200px]'>
        <div className='flex flex-col justify-between gap-12 px-2 lg:flex-row lg:px-0'>
          <motion.div
            variants={FadeIn('right', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.8 }}
            className='justify-betweenlg:mr-8 flex w-full flex-col lg:w-1/2'
          >
            <h1 className='pb-4 text-[40px] font-bold leading-[3rem]'>
              What We do?
            </h1>
            <p>
              Sheissomeone is a social donation platform, with a vision to take out hook-up girls out of the street and give thama meaningful life.
              It is also involved with giving them a skill, supporting single mothers and widows,
              with gift items, acquiring a skill, setting up a business.
            </p>
            <div className='flex justify-between space-x-4 py-8'>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-lg font-semibold uppercase'> Projects</p>
                <p className='text-[36px] font-bold text-blue'>
                  {' '}
                  + <AnimatedCounter from={0} to={45} />
                </p>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-lg font-semibold uppercase'>
                  {' '}
                  Supported ladies
                </p>
                <p className='text-[36px] font-bold text-blue'>
                  + <AnimatedCounter from={0} to={250} />
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={FadeIn('left', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.8 }}
            className='flex h-full flex-col gap-8'
          >
            <div className='flex items-center space-x-6 bg-primary p-4'>
              <p className='text-6xl font-bold text-blue'>01</p>
              <div>
                <h2 className='mb-2 text-2xl font-bold'>
                    A Skill
                </h2>
                <p>
                  Give a girl child in the street a meaningful skill
                  
                </p>
              </div>
            </div>
            <div className='flex items-center space-x-6 bg-primary p-4'>
              <p className='text-6xl font-bold text-blue'>02</p>
              <div>
                <h2 className='mb-2 text-2xl font-bold'>
                    Business Empowerment
                </h2>
                <p>
                  support single mothers with a business to thrive
                </p>
              </div>
            </div>
            <div className='flex items-center space-x-6 bg-primary p-4'>
              <p className='text-6xl font-bold text-blue'>03</p>
              <div>
                <h2 className='mb-2 text-2xl font-bold'>
                    Gift Items Donations
                </h2>
                <p>
                  a cup of water is something, do not look at a gift horse in the mouth
                </p>
              </div>
            </div>
            <div className='flex items-center space-x-6 bg-primary p-4'>
              <p className='text-6xl font-bold text-blue'>04</p>
              <div>
                <h2 className='mb-2 text-2xl font-bold'>
                    Fund Donations
                </h2>
                <p>
                  we can support widows with little funds
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services