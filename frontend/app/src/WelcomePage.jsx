import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function WelcomePage() {
  const location = useLocation();
  const { name, email, userId } = location.state || {};
  
  const [imageUploaded, setImageUploaded] = useState(false);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    setImageUploaded(true);
    setTimeout(() => setImageUploaded(false), 1500);
  };

  return (
    <div className="welcome-container">
      <h2>Welcome, {name || 'Guest'}</h2>
      <img
        src={file || 'default-avatar.png'}
        alt="User Avatar"
        className="user-avatar"
      />
      <input type="file" onChange={handleFileChange} />
      {imageUploaded && <p className="popup">Image uploaded successfully!</p>}
      
      {/* User Info Section */}
      <div className="user-info">
        <p>Your Email: {email || 'Not Available'}</p>
        <p>Your ID: {userId || 'Not Available'}</p>
        <p>Your Role: User</p>
      </div>

      <button onClick={() => navigate('/')}>Logout</button>
    </div>
  );
}

export default WelcomePage;
