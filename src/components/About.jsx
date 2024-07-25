import React from 'react'
import { IoMdChatboxes } from "react-icons/io";
import { ABOUT_TEXT } from '../constants'
import { motion } from "framer-motion"

export const About = () => {
    return <div className='border-b border-neutral-900 pb-4'>
        <h2 className='my-20 text-center text-4xl'>About Me</h2>
        <div className=' flex flex-wrap '>
            <div className='w-full lg:w-1/2 lg:py-8'>
                <motion.div
                    className="w-1/2 pt-5 text-right text-7xl"
                    // animate={{
                    //     scale: [2.5, 1, 2, 0, 1],
                    //     rotate: [0, 0, 180, 180, 0],
                    //     borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                    // }}
                    // transition={{
                    //     duration: 2,
                    //     ease: "easeInOut",
                    //     times: [0, 0.2, 0.5, 0.8, 1],
                    //     repeat: Infinity,
                    //     repeatDelay: 1
                    // }}
                    whileInView={{ opacity: 1, x: 400, scale: 2.5 }}
                    initial={{ x: -100, opacity: 0 , scale: 0.5}}
                    transition={{ duration: 1.5 }}
                >
                <IoMdChatboxes/></motion.div>
            </div>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5, delay: 0 }}
                className='w-full lg:w-1/2'>
                <div className='flex justify-center lg:justify-start'>
                    <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
                </div>
            </motion.div>
        </div>
    </div>
}
