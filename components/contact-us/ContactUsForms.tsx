'use client';

import React, { useState } from 'react';
import { RiMailSendLine } from 'react-icons/ri';
import Loader from '../generics/Loader';
import ContactUs from './ContactUsModal';

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

    const [isLoading, setIsLoading] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [isNotSent, setIsNotSent] = useState(false);
    const [hasConcern, setHasConcern] = useState(true);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const sendEmail = () => {
        setIsLoading(true);
        fetch('/api/send', {
            method: 'POST',
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => setIsSent(true))
            .catch((error) => setIsNotSent(true))
            .finally(() => setIsLoading(false));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (!formData.concern) {
            setHasConcern(false);
            return;
        }
        sendEmail();
    };

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            concern: '',
            question: '',
        });
        setIsSent(false);
        setIsNotSent(false);
        setHasConcern(true);
    };

    return (
        <>
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
                        className="py-2 px-4 w-full rounded-md required bg-white"
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
                    className="w-full border-4 rounded-md px-4 py-2 mb-3 text-white flex items-center text-xl font-bold hover:bg-white hover:text-site-main hover:border-site-main"
                    onClick={handleSubmit}
                >
                    <RiMailSendLine size={25} />
                    <div className="flex-grow text-center pr-3 ">
                        <p>Submit</p>
                    </div>
                </button>
            </form>
            <Loader isLoading={isLoading} />
            {((!isLoading && (isSent || isNotSent)) || !hasConcern) && (
                <ContactUs
                    onClose={resetForm}
                    isSent={isSent}
                    isNotSent={isNotSent}
                    hasConcern={hasConcern}
                />
            )}
        </>
    );
};
