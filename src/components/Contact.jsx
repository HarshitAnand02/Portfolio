import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import {CONTACT} from '../constants'

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_fvj9rzi', 'template_7jp9npr', form.current, {
                publicKey: 'Ily6jnGSJuYpZhxj7',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div className='border-b border-neutral-900 pb-20'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.5 }}
                className='my-10 text-center text-4xl text-white'>
                Get in Touch
            </motion.h2>
            <div className='mb-8 flex flex-wrap justify-center items-center gap-10'>
                <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 1.0 }}
                className='items-start gap-4'>
                    <div className='w-full max-w-lg py-2 pr-5 items-start'>
                        <div>Address: </div>
                        <div>{CONTACT.address}</div>
                    </div>
                    <div className='w-full max-w-lg py-2 pr-5'>
                        <div>Phone: </div>
                        <div>{CONTACT.phoneNo}</div>
                    </div>
                    <div className='w-full max-w-lg py-2 pr-5'>
                        <div>Email: </div>
                        <div>{CONTACT.email}</div>
                    </div>
                </motion.div>
                <form ref={form} onSubmit={sendEmail} className='w-1/2 max-w-lg'>
                    <div className="mb-4">
                        <label className="block text-neutral-400 mb-1">Name</label>
                        <input className='w-full px-3 py-2 bg-black border border-neutral-300 rounded' type="text" name="from_name" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-neutral-400 mb-1">Email</label>
                        <input className='w-full px-3 py-2 bg-black border border-neutral-300 rounded' type="email" name="user_email" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-neutral-400 mb-1">Message</label>
                        <textarea className='w-full px-3 py-2 bg-black border border-neutral-300 rounded' name="message" rows="4" />
                    </div>
                    <input type="submit" value="Send" className='px-6 py-2 bg-purple-900 text-white font-semibold rounded cursor-pointer hover:bg-purple-700' />
                </form>
            </div>
        </div>
    )
}
