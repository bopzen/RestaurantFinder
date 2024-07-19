import { Routes, Route } from 'react-router-dom';

import Footer from './components/footer/footer.jsx'
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx';
import RestaurantList from './components/restaurants/RestaurantList.jsx';
import NotFound from './components/not-found/NotFound.jsx';
import RestaurantMap from './components/restaurants/RestaurantMap.jsx';
import SearchResults from './components/search/SearchResults.jsx';
import Register from './components/auth/Register.jsx';
import Login from './components/auth/Login.jsx';
import Logout from './components/auth/Logout.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import About from './components/about/About.jsx';

function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/restaurants" element={<RestaurantList />} />
          <Route path="/map" element={<RestaurantMap />} />
          <Route path="/search" element={<SearchResults />} />

          <Route path="/not-found" element={<NotFound />} />
          <Route path="/*" element={<NotFound />} />
      </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
