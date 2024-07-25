import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { BsFiletypeSql } from "react-icons/bs";
import { TbBrandCpp } from "react-icons/tb";
// import { RiReactjsLine } from 'react-icons/ri'
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse'
        }
    }
})

export const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">
                Technologies
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 1.5 }}
                className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div
                    variants={iconVariants(1.75)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className='text-7xl border-neutral-900 text-cyan-400' />
                </motion.div>
                <motion.div
                    variants={iconVariants(2)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BsFiletypeSql className='text-7xl border-neutral-900' />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className='text-7xl border-neutral-900 text-green-500' />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <div className='text-7xl border-neutral-900 text-orange-300' >Ex</div>
                </motion.div>
                <motion.div
                    variants={iconVariants(1.5)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className='text-7xl border-neutral-900 text-green-400' />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial='initial'
                    animate='animate'
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandCpp className='text-7xl border-neutral-900' />
                </motion.div>
            </motion.div>
        </div>
    )
}