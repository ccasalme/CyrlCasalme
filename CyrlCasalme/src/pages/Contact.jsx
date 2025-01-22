import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
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
        <form name="contact" onSubmit={handleSubmit}>
            <p>
                <label>
                    Name: 
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
            </p>
            <p>
                <label>
                    Email: 
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
            </p>
            <p>
                <button type="submit">Send
                </button>
                
            </p>
        </form><p className="footer"><em>CCASALME || Copyright 2025 © Cyrl Casalme</em></p></>
    );
}

export default Contact;

  