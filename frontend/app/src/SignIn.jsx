import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    navigate('/welcome');
  };

  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} required />
        <button type="submit">Login</button>
        <button onClick={() => navigate('/')}>Create an Account</button>
      </form>
    </div>
  );
}

export default SignIn;
