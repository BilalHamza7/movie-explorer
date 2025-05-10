import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './mainLayout.jsx';
import Home from './pages/home.jsx';
import Login from './pages/login.jsx';
import Trending from './pages/trending.jsx';
import { Provider } from 'react-redux';
import store from './store/store.js';
import MovieDetails from './components/movieDetails.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* redirecting users visiting '/' to login page */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          <Route path='/home' element={<Home />} />
          <Route path='/trending' element={<Trending />} />
          <Route path="/detailsPage" element={<MovieDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);