'use client'

import { Meteors } from '@/Components/ui/meteors'
import React, { FormEvent, useState } from 'react'

const Contact = () => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Submitted:', { email, message });
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
            <div className='max-w-2xl mx-auto p-4 relative z-10'>
                <h1 className='text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white'>Contact Us</h1>
                <div className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
                    <p className='text-bold'>If you have any questions or inquiries, please don't hesitate to get in touch with us:</p>
                    <p className='text-bold'><strong>Address:</strong> 123 Music St, Cityville, State, Country</p>
                    <p className='text-bold'><strong>Email:</strong> info@musicschool.com</p>
                    <p className='text-bold'><strong>Phone:</strong> +123-456-7890</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-white-700 "
                        required
                    />
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your message"
                        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-white-700"
                        rows={5}
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                    >
                        Send Message
                    </button>
                </form>
            </div>
            <Meteors number={40} />
        </div>
    )
}

export default Contact
