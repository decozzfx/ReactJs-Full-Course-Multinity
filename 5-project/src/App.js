import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import Profile from './pages/Profile';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import BlogDetails from './pages/BlogDetails';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="app">
    <div className='brand'>Website Blog</div>
    <nav className='nav'>
      <li className='nav-item'><Link to='/'>Home</Link></li>
      <li className='nav-item'><Link to='/profile'>Profile</Link></li>
      <li className='nav-item'><Link to='/contact'>Contact</Link></li>
      <li className='nav-item'><Link to='/blog'>Blog</Link></li>
    </nav>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='profile' element={<Profile />} />
      <Route path='blog' element={<Blog />} />
      <Route path='blog/:id' element={<BlogDetails />} />
      <Route path='contact' element={<Contact />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </div>
  );
}

export default App;
