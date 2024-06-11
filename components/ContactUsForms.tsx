'use client';
import { useState } from 'react';
import React from 'react';
import { RiMailSendLine } from 'react-icons/ri';

interface FormValues {
    name: string;
    email: string;
    concern: string;
    question: string;
}

export const ContactUsForms = () => {
    const [formData, setFormData] = useState<FormValues>({
        name: '',
        email: '',
        concern: '',
        question: '',
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (!formData.concern) {
            alert('Please select a concern.');
            return;
        }
        console.log(formData);
    };

    return (
        <form className="flex flex-col gap-y-5 text-black font-lato w-[90%]">
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder="Name..."
                    value={formData.name}
                    onChange={handleChange}
                    className="py-2 px-4 w-full rounded-md"
                />
            </div>
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="E-mail Address..."
                    value={formData.email}
                    onChange={handleChange}
                    className="py-2 px-4 w-full  rounded-md"
                />
            </div>
            <div>
                <select
                    name="concern"
                    className="py-2 px-4  w-full rounded-md required bg-white"
                    value={formData.concern}
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled hidden>
                        - Concern -
                    </option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                </select>
            </div>
            <textarea
                name="question"
                className="h-32 rounded-md py-2 px-4"
                placeholder="Your question here..."
                value={formData.question}
                onChange={handleChange}
            ></textarea>

            <button
                type="submit"
                className="w-full border-4 rounded-md px-4 py-2 text-white flex items-center text-xl font-bold hover:bg-white hover:text-site-main hover:border-site-main"
                onClick={handleSubmit}
            >
                <RiMailSendLine size={25} />
                <div className="flex-grow text-center pr-3">
                    <p>Submit</p>
                </div>
            </button>
        </form>
    );
};
