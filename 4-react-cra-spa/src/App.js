import { Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Blog from './Blog';
import BlogDetails from './BlogDetails';
import Home from './Home';
import TeamAbout from './TeamAbout';
import NotFound from './NotFound'
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App"> 
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='about' element={<About />}>
          <Route path='team' element={<TeamAbout />} /> 
        </Route>
        <Route path='blog' element={<Blog />} />
        <Route path='blog/:slug' element={<BlogDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
