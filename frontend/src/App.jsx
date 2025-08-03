import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import FormPage from './components/FormPage';
import DisplayPage from './components/DisplayPage';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/form">Register</Link> | <Link to="/users">Users</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/users" element={<DisplayPage />} />
      </Routes>
    </Router>
  );
}

export default App;