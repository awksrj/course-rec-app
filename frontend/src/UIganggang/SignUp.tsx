import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles.css"


const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    firstname: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const { name, firstname, email, password } = formData;
    if (!name || !firstname || !email || !password) {
      alert('All fields are required!');
      return;
    }

    alert(`Welcome, ${firstname}! Your account has been created.`);
    navigate('/academic-requirement'); // Redirect to login after sign-up
  };

  return (
    <div className="signup-container">
      <form id="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          id="firstname"
          placeholder="Enter your first name"
          value={formData.firstname}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
