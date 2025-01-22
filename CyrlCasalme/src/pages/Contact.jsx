import React, { useState } from 'react';
import Footer from './Footer';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here, you would typically handle the form submission, e.g., sending data to an API
        console.log('Contact Form submitted!', formData);
    };

    return (
        <>
            <h1>Contact Form</h1>
            <form className="form" onSubmit={handleSubmit}>
            <p>
                <label>
                    <strong>Name:</strong>
                    <br />
                    <input type="text" placeholder="Enter Name Here..." name="name" value={formData.name} onChange={handleChange} />
                </label>
            </p>
            <p>
                <label>
                    <strong>Email:</strong>
                    <br /> 
                    <input type="email" placeholder="Enter Email Here..." name="email" value={formData.email} onChange={handleChange} />
                </label>
            </p>
            <p>
                <label>
                    <strong>Message:</strong>
                    <br /> 
                    <textarea name="message" placeholder="Enter Message Here..." value={formData.message} onChange={handleChange} />
                </label>
            </p>
            <p>
                <button type="submit">Send
                </button>
            </p>
            </form>
            <Footer />
            <p className="footer"><em>CCASALME || Copyright 2025 © Cyrl Casalme</em></p>
        </>
    );
}

export default Contact;

  