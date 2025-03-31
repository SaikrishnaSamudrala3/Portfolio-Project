import Image from 'next/image'
import {React, useState} from 'react'
import { assets } from '@/assets/assets'
import {motion } from 'motion/react'

const Contact = () => {
    const [message, setMessage] = useState("");
    const [messageVisible, setMessageVisible] = useState(false);

    const onSubmit = async (event) => {
      event.preventDefault();
      setMessage("Email sent successfully!");
      setMessageVisible(true);

       // Hide the message after 3 seconds
        setTimeout(() => {
        setMessageVisible(false);
        setMessage(""); // Clear the message text
      }, 3000); // 3000 ms = 3 seconds 

      const formData = new FormData(event.target);
  
      formData.append("access_key", "192b8bfc-64eb-4a6c-b9f2-1e082c010a38");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setMessage("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setMessage(data.message);
      }
    };
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity: 1}}
    transition={{duration:1}}
    id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] 
    bg-no-repeat bg-cneter bg-[length:90%_auto]'>
      <motion.h4 
      initial={{opacity:0, y:-20}}
      whileInView={{opacity: 1, y:0}}
      transition={{duration:0.5, delay:0.3 }}
      className='text-center mb-2 text-lg font-serif'>Connect with me</motion.h4>
      <motion.h2 
      initial={{opacity:0, y:-20}}
      whileInView={{opacity: 1, y:0}}
      transition={{duration:0.5, delay:0.5 }}
      className='text-center text-5xl font-serif'>Get in touch</motion.h2>

      <motion.p 
      initial={{opacity:0}}
      whileInView={{opacity: 1}}
      transition={{duration:0.5, delay:0.7 }}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-serif '>
        I'd love to hear from you! If you have any questions, comments, or feedback, 
        please use the form below.
      </motion.p>

        <motion.form 
        initial={{opacity:0}}
        whileInView={{opacity: 1}}
        transition={{duration:0.5, delay:0.9 }}
        onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 mb-8'>
                <motion.input 
                initial={{opacity:0, x:-50}}
                whileInView={{opacity: 1, x:0}}
                transition={{duration:0.6, delay:1.1 }}
                type="text" placeholder='Enter your name' required className='flex-1 p-3 outline-none border-[0.5px]
                border-gray-400 rounded-md bg-white' name='name' />
                <motion.input
                initial={{opacity:0, x:50}}
                whileInView={{opacity: 1, x:0}}
                transition={{duration:0.6, delay:1.2 }}
                type="email" placeholder='Enter your email' required className='flex-1 p-3 outline-none border-[0.5px]
                border-gray-400 rounded-md bg-white' name='email' />
            </div>
            <motion.textarea
            initial={{opacity:0, y:100}}
            whileInView={{opacity: 1, y:0}}
            transition={{duration:0.6, delay:1.3 }}
            rows='6' placeholder='Enter your message' required className='w-full p-4 outline-none 
            border-[0.5px] border-gray-400 rounded-md bg-white mb-6' name='message'></motion.textarea>

            <motion.button 
            whileHover={{scale:1.05}}
            transition={{duration:0.3}}
            type='submit'
            className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white
            rounded-full mx-auto hover:bg-blue-400 duration-500 cursor-pointer'>Submit now <Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.button>
        </motion.form>

        {messageVisible && (
        <p className="mt-4 inline-block bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded">
          {message}
        </p>
      )}


    </motion.div>
  )
}

export default Contact
