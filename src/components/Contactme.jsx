import  { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const Contactme = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
        script.onload = () => {
            emailjs.init('789SPov6cSLKYMVHD');
        };
        document.body.appendChild(script);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_qsmb4k5', 'template_rujv72r', e.target)
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully!");
            }, (error) => {
                console.log(error.text);
                alert("Failed to send message. Please try again later.");
            });
        
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div
            name="contact"
            className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
        >
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact Me</p>
                    <p className="py-6">Submit the below form to get in touch with me</p>
                </div>
                <div className="flex justify-center items-center">
                    <form onSubmit={handleSubmit} className="flex flex-col w-full md:w-1/2">
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <textarea
                            name="message"
                            placeholder="Enter your message"
                            rows="10"
                            value={formData.message}
                            onChange={handleChange}
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        ></textarea>
                        <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
        
    );
};

export default Contactme;
