import React, { useState } from 'react';

function RegisterForm() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setMessage("User registered successfully!");
                setFormData({ name: '', email: '', password: '' }); // Clear form
            } else {
                setMessage("Failed to register user.");
            }
        } catch (error) {
            console.error("Error registering user:", error);
            setMessage("An error occurred while registering.");
        }
    };

    return (
        <form className="registerForm" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
            />

            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
            />

            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
            />

            <button type="submit">Register</button>
            {message && <p>{message}</p>}
        </form>
    );
}


function LogInForm({ onLoginSuccess }) {
    const [formData, setFormData] = useState({ name: '', password: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/users');
            const users = await response.json();
            const user = users.find(
                (user) => user.name === formData.name && user.password === formData.password
            );

            if (user) {
                setMessage("Login successful!");
                onLoginSuccess(); // Call onLoginSuccess after a successful login
            } else {
                setMessage("User not found or incorrect password.");
            }
        } catch (error) {
            console.error("Error logging in:", error);
            setMessage("An error occurred during login.");
        }
    };

    return (
        <form className="logInForm" onSubmit={handleSubmit}>
            <label htmlFor="loginName">Name</label>
            <input type="text" id="loginName" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />

            <label htmlFor="loginPassword">Password</label>
            <input type="password" id="loginPassword" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} />

            <button type="submit">Log In</button>
            {message && <p>{message}</p>}
        </form>
    );
}

export default LogInForm;

export { RegisterForm, LogInForm };
