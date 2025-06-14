import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles.css"


const SignIn: React.FC = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const { email, password } = formData;
    if (!email || !password) {
      alert('All fields are required!');
      return;
    }
    navigate('/chatbot');
  };

  return (
    <div className="signin-container">
      <form id="signin-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={formData.password} onChange={handleChange} required />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
