"use client";

import { checkEmail } from '@/utils/check-email';
import { ContactFormData } from '@/app/types/personal';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import { FC, FormEvent, useState, ChangeEvent } from 'react';
import { TbMailForward } from "react-icons/tb";
import { toast } from 'react-toastify';

interface ContactFormError {
  email: boolean;
  required: boolean;
}

const ContactWithoutCaptcha: FC = () => {
  const [error, setError] = useState<ContactFormError>({ email: false, required: false });
  const [userInput, setUserInput] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const checkRequired = (): void => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
    if (name === 'email') {
      setError({ ...error, email: !checkEmail(value) });
    }
    checkRequired();
  };

  const handleSendMail = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    }

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const options = { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY };

    try {
      const res = await emailjs.send(serviceID!, templateID!, userInput, options);
      const teleRes = await axios.post(`${process.env.NEXT_PUBLIC_APP_URL}/api/contact`, userInput);

      if (res.status === 200 || teleRes.status === 200) {
        toast.success('Message sent successfully!');
        setUserInput({
          name: '',
          email: '',
          message: '',
        });
      }
    } catch (error: any) {
      toast.error(error?.text || error);
    }
  };

  return (
    <div className="lg:w-3/4">
      <form onSubmit={handleSendMail} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-gray-800 dark:text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={userInput.name}
            onChange={handleChange}
            className="bg-gray-200 dark:bg-[#1f223c] text-gray-800 dark:text-white rounded-lg p-2"
            placeholder="Enter your name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-gray-800 dark:text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userInput.email}
            onChange={handleChange}
            className="bg-gray-200 dark:bg-[#1f223c] text-gray-800 dark:text-white rounded-lg p-2"
            placeholder="Enter your email"
          />
          {error.email && (
            <span className="text-red-500">Please enter a valid email address</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-gray-800 dark:text-white">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={userInput.message}
            onChange={handleChange}
            className="bg-gray-200 dark:bg-[#1f223c] text-gray-800 dark:text-white rounded-lg p-2 min-h-[120px]"
            placeholder="Enter your message"
          />
        </div>
        {error.required && (
          <span className="text-red-500">Please fill in all required fields</span>
        )}
        <button
          type="submit"
          className="bg-gradient-to-r from-pink-500 to-violet-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:gap-4 w-fit transition-all duration-300"
        >
          <span>Send Message</span>
          <TbMailForward size={20} />
        </button>
      </form>
    </div>
  );
};

export default ContactWithoutCaptcha;