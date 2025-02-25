import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://portfolio-ix81.onrender.com/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (data.success) {
                alert("Message sent successfully!" , formData);
                setFormData({ name: "", email: "", message: "" });
            } else {
                alert("Error: " + data.error);
            }
        } catch (error) {
            alert("Something went wrong.");
        }
    };


    return (
        <div className="container mt-5 w-50">
            <h2 className="text-center">Contact Me</h2>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea className="form-control" rows="4" name="message" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;
