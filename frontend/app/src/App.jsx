import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import WelcomePage from './WelcomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </Router>
  );
}

export default App;

