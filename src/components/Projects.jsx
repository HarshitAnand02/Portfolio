import React, { useId } from 'react'
import { PROJECTS } from '../constants'
import { motion } from "framer-motion"

export const Projects = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl'>
                Projects
            </motion.h2>
            <div>{PROJECTS.map((project, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                   <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ x: -100, opacity: 0 }}
                        transition={{ duration: 1.0 }}
                        className='w-full lg:w-1/4'>
                        <motion.img
                            src={project.image}
                            alt={project.title}
                            width={200}
                            height={200}
                            className='mb-6 rounded'
                            whileHover={{ scale: 2.0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ x: 100, opacity: 0 }}
                        transition={{ duration: 1.25 }}
                        className='w-fulll max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>{project.title}</h6>
                        <p className='mb-4 text-neutral-400'>{project.description}</p>
                        {project.technologies.map((tech, index) => (
                            <span key={index}
                                className='mr-2 rounded bg-neutral-900 py-1 px-2 text-sm font-medium text-purple-900'>
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                </div>
            ))}
            </div>
        </div >
    )
}
