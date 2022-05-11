import React from 'react';
import { Route, Routes, Navigate, useNavigate, useLocation } from "react-router-dom";
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound'
import Footer from '../Footer/Footer';
import movieImg from '../../images/movie-img.png'
import Navigation from '../Navigation/Navigation';


function App() {
  const location = useLocation();
  const [isMenuPopupOpen, setIsMenuPopupOpen] = React.useState(false);

  const pathWithHeader = [
    '/',
    '/profile',
    '/movies',
    '/saved-movies',
  ]
  const pathWithFooter = [
    '/',
    '/movies',
    '/saved-movies',
  ]
  const cards = [
    { img: movieImg,
        name: "В погоне за Бэнкси",
        duration: 74,
        _id: 1,
    },
    { img: movieImg,
        name: "В погоне за Бэнкси",
        duration: 74,
        _id: 2,
    },
    { img: movieImg,
        name: "В погоне за Бэнкси",
        duration: 74,
        _id: 3,
    },
    { img: movieImg,
        name: "В погоне за Бэнкси",
        duration: 74,
        _id: 4,
    },
    { img: movieImg,
        name: "В погоне за Бэнкси",
        duration: 74,
        _id: 5,
    },
    { img: movieImg,
        name: "В погоне за Бэнкси",
        duration: 74,
        _id: 6,
    },
    { img: movieImg,
        name: "В погоне за Бэнкси",
        duration: 74,
        _id: 7,
    },
    { img: movieImg,
        name: "В погоне за Бэнкси",
        duration: 74,
        _id: 8,
    },
    { img: movieImg,
        name: "В погоне за Бэнкси",
        duration: 74,
        _id: 9,
    },
  ]

  function handleMenuPopupClick() {
    setIsMenuPopupOpen(true);
  }

  function closePopup() {
    setIsMenuPopupOpen(false);
  }

  return (
    <>
      {pathWithHeader.includes(location.pathname) && (<Header 
      location={location}
      isOpen={isMenuPopupOpen}
      onOpenPopup={handleMenuPopupClick}
      />)}
      <Routes>
        <Route path="/" 
          element={
          <Main />
          }
        />
        <Route path="/movies"
          element={
            <>
            <Movies cards={cards} location={location} />
            <Navigation 
            isOpen={isMenuPopupOpen}
            onClose={closePopup}            
            location={location}/>
            </>
          }
        />
        <Route path="/saved-movies"
          element={
            <>
            <SavedMovies 
            cards={cards}
            location={location} />
            <Navigation 
            isOpen={isMenuPopupOpen}
            onClose={closePopup}            
            location={location}/>
            </>
          }
        />
        <Route path="/profile"
          element={
            <>
            <Profile />
            <Navigation 
            isOpen={isMenuPopupOpen}
            onClose={closePopup}
            location={location}
            />
            </>
          }
        />
        <Route path="/signin"
          element={
            <Login location={location} />
          }
        />
        <Route path="/signup"
          element={
            <Register location={location} />
          }
        />
        <Route path="*"
          element={
            <PageNotFound />
          }
        />
      </Routes>
      {pathWithFooter.includes(location.pathname) && (<Footer />)}
    </>
  );
}

export default App;
