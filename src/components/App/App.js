import React from 'react';
import { Route, Routes, Navigate, useNavigate, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import filterSearch from '../../utils/FilterSearch';
import beatFilmApi from '../../utils/MoviesApi';
import api from '../../utils/MainApi';
import ProtectedRoute from '../../utils/ProtectedRoute';


function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuPopupOpen, setIsMenuPopupOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLog, setIsLog] = React.useState(false);
  const [movies, setMovies] = React.useState([]);  
  const [ownMovies, setOwnMovies] = React.useState([]);
  const [inputTitle, setInputTitle] = React.useState("");
  const [inputSavedMoviesTitle, setInputSavedMoviesTitle] = React.useState("");
  const [check, setCheck] = React.useState(false);
  const [checkSavedMovies, setCheckSavedMovies] = React.useState(false);
  const [infoText, setInfoText] = React.useState("");
  const [savedMoviesInfoText, setSavedMoviesInfoText] = React.useState("");
  const [preloader, setPreloader] = React.useState(false);
  const [gridColumns, setGridColumns] = React.useState(3);
  const [gridRows, setGridRows] = React.useState(4);
  const [authMessage, setAuthMessage] = React.useState("");
  const lastCard = gridColumns * gridRows;
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
  // Слушатель изменения размера экрана
  React.useEffect(() => {
    window.addEventListener('resize', getColumns);

    return () => {
      window.removeEventListener('resize', getColumns);
    }
  }, [])

  React.useEffect(() => {
      if (localStorage.inputTitle) { setInputTitle(JSON.parse(localStorage.inputTitle)); }
      if (localStorage.check) { setCheck(JSON.parse(localStorage.check)); }
      if (localStorage.foundMovies) { setMovies(JSON.parse(localStorage.foundMovies)); }
      if (localStorage.inputCheckSavedMovies) { setCheckSavedMovies(JSON.parse(localStorage.inputCheckSavedMovies)); }
      if (localStorage.SavedMoviesTitle) { setInputSavedMoviesTitle(JSON.parse(localStorage.inputSavedMoviesTitle)); }
      if (localStorage.savedMovies) { setOwnMovies(JSON.parse(localStorage.savedMovies)); }
  }, [])

  React.useEffect(() => {
    if (inputTitle) {      
      searchMoviesCard();
    }
  }, [check])

  React.useEffect(() => {
    if (inputSavedMoviesTitle) {   
    searchSavedMoviesCard();
    }
  }, [checkSavedMovies])

  React.useEffect(() => {
    getSavedMoviesCard();
  }, [])

  React.useEffect(() => {
    if (movies & location.pathname === "/movies") { 
      getColumns() }
      if (ownMovies & location.pathname === "/saved-movies") { 
        getColumns() }
  }, [])

  React.useEffect(() => {
    if (localStorage.getItem("jwt")) {
      api
        .checkToken()
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setIsLog(true);
          }
        })
        .catch((err) => {
          console.log(err);
          setIsLog(true);
      });
    }
  }, [isLog]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((info) => {
        setCurrentUser(info);
      })
      .catch((err) => console.log(err));
  }, [loggedIn])

  // Считаем количество столбцов и записываем в стейт
  const getColumns = () => {
    const grid = document.querySelector('.movies__list');
    let columns = window.getComputedStyle(grid).getPropertyValue("grid-template-columns").split(" ").length;
    setGridColumns(columns);
    window.innerWidth < 500 && setGridRows(5);
  }

  const getCurrentCards = (arrMovies) => {
      return arrMovies.slice(0, lastCard);
  }

  // Кнопка еще
  function getMore() {
    getColumns();
    if (gridColumns === 1) { return setGridRows(gridRows + 2) }
    setGridRows(gridRows + 1);
  }

  // Фильтруем и отдаем результат. 
  function searchMoviesCard() {
    localStorage.setItem('check', JSON.stringify(check));
    localStorage.setItem('inputTitle', JSON.stringify(inputTitle));
    const searchRes = filterSearch(
      JSON.parse(localStorage.movie),
      JSON.parse(localStorage.inputTitle),
      JSON.parse(localStorage.check));
    setPreloader(false);
    if (searchRes.length !== 0) {
      setMovies(searchRes);
      localStorage.setItem('foundMovies', JSON.stringify(searchRes));
      setInfoText("");
    } else {
      setInfoText("Ничего не найдено");
    }   
  }

  function searchSavedMoviesCard() {
    localStorage.setItem('checkSavedMovies', JSON.stringify(checkSavedMovies));
    localStorage.setItem('inputSavedMoviesTitle', JSON.stringify(inputSavedMoviesTitle));
    const searchRes = filterSearch(
      JSON.parse(localStorage.savedMovies),
      JSON.parse(localStorage.inputSavedMoviesTitle),
      JSON.parse(localStorage.checkSavedMovies));
    if (searchRes.length !== 0) {
      setOwnMovies(searchRes);
      setSavedMoviesInfoText("");
    } else {
      setSavedMoviesInfoText("Ничего не найдено");
    }   
  }

  // Получаем фильмы со стороннего Api.
  function getMoviesCard() {
    setPreloader(true);
    if (!localStorage.movie) {
    beatFilmApi
      .getMovies()
      .then((movie) => {
        localStorage.setItem('movie', JSON.stringify(movie));
        searchMoviesCard();
      })
      .catch((err) => {
        console.log(err);
        setInfoText("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз");
      });
    } else {
      searchMoviesCard();
    }
  }
  
  function getSavedMoviesCard() {
    setPreloader(true);
    api
      .getMovies()
      .then((movie) => {
        localStorage.setItem('savedMovies', JSON.stringify(movie.filter((f) => f.owner === currentUser._id)));
        searchSavedMoviesCard();
        setPreloader(false);
      })
      .catch((err) => {
        console.log(err);
        setInfoText("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз");
      });
  }

    // Отправляем запрос в API и сохраняем фильм в нашу базу
  function saveMovie(movie) {
    api
      .addMovie(movie)
      .then((newMovie) => {
        setOwnMovies([...ownMovies, newMovie]);
      })
      .catch((err) => console.log(err));
  }

    // Отправляем запрос в API и удаляем фильм, создаем копию массива, исключив удаленную карточку
  function removeMovie(movie) {
    api
      .deleteMovie(movie._id)
      .then(() => {
        setOwnMovies((state) => state.filter((c) => c._id !== movie._id));
      })
      .catch((err) => console.log(err));
  }

  function toggleSaveButton(movie) {
    const isSaved = ownMovies.some((film) => film.movieId === movie.id);
    if (!isSaved) {
      saveMovie(movie);
    } else {
      removeMovie(ownMovies.find((film) => film.movieId === movie.id));
    }
  }

  function handleMenuPopupClick() {
    setIsMenuPopupOpen(true);
  }

  function closePopup() {
    setIsMenuPopupOpen(false);
  }



  function handleRegistration(name, email, password) {
    api
      .register(name, email, password)
      .then(() => {
        handleLogin(email, password);
      })
      .catch((err) => {
        console.log(err);
        setAuthMessage("Что-то пошло не так...");
      });
  }

  function handleLogin(email, password) {
    api
      .authorize(email, password)
      .then((data) => {
        localStorage.setItem('jwt', data.jwt);
        setLoggedIn(true);
        navigate("/movies")
      })
      .catch((err) => {
        console.log(err);
        setAuthMessage("Что-то пошло не так...");
      });
  }

  function updateUserInfo(name, email) {
    api
      .updateProfile(name, email)
      .then((info) => {
        setCurrentUser(info)
        setAuthMessage("Данные обновились");
      })
      .catch((err) => {
        console.log(err);
        setAuthMessage("Такой email уже существует");
      });
  }


  function logout() {
    setCurrentUser({});
    setLoggedIn(false);
    localStorage.removeItem('jwt');
    navigate("/");
  }

  return (
    <>
    <CurrentUserContext.Provider value={currentUser}>
      {pathWithHeader.includes(location.pathname) && (<Header 
        loggedIn={loggedIn}
        isOpen={isMenuPopupOpen}
        onOpenPopup={handleMenuPopupClick}
      />)}
      <Routes>
        <Route path="/" 
          element={
            <>
            <Main />            
            <Navigation 
            isOpen={isMenuPopupOpen}
            onClose={closePopup}
          />
          </>
          }
        />
        {isLog ? 
        <>
          <Route path="/movies"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Movies 
                  movies={getCurrentCards(movies)}
                  lastCard={lastCard}
                  ownMovies={ownMovies}
                  inputTitle={inputTitle}
                  setInputTitle={setInputTitle}
                  getMoviesCard={getMoviesCard}
                  setInfoText={setInfoText}
                  setCheck={setCheck}
                  check={check}
                  infoText={infoText}
                  preloader={preloader}
                  getMore={getMore}
                  toggleSaveButton={toggleSaveButton}
                />
                <Navigation 
                  isOpen={isMenuPopupOpen}
                  onClose={closePopup}
                />
              </ProtectedRoute>
            }
          />
          <Route path="/saved-movies"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <SavedMovies             
                  movies={movies}
                  ownMovies={ownMovies}
                  getSavedMoviesCard={getSavedMoviesCard}
                  preloader={preloader}
                  removeMovie={removeMovie}
                  setInputSavedMoviesTitle={setInputSavedMoviesTitle}
                  checkSavedMovies={checkSavedMovies}
                  inputSavedMoviesTitle={inputSavedMoviesTitle}
                  setCheckSavedMovies={setCheckSavedMovies}
                  savedMoviesInfoText={savedMoviesInfoText}
                  setSavedMoviesInfoText={setSavedMoviesInfoText}
                />
                <Navigation 
                  isOpen={isMenuPopupOpen}
                  onClose={closePopup} 
                />
              </ProtectedRoute>
            }
          />
          <Route path="/profile"
            element={              
              <ProtectedRoute loggedIn={loggedIn}>
                <Profile 
                  logout={logout}
                  updateUserInfo={updateUserInfo} 
                  authMessage={authMessage}
                  />
                <Navigation 
                  isOpen={isMenuPopupOpen}
                  onClose={closePopup}
                />
              </ProtectedRoute>
            }
          />
          </> : null}
        <Route path="/signin"
          element={
            loggedIn ? <Navigate to="/" /> : <Login
              authMessage={authMessage}
              handleLogin={handleLogin} 
            />
          }
        />
        <Route path="/signup"
          element={
            loggedIn ? <Navigate to="/" /> : <Register
              authMessage={authMessage}
              handleRegistration={handleRegistration} 
            />
          }
        />
        <Route path="*"
          element={
            <PageNotFound />
          }
        />
      </Routes>
      {pathWithFooter.includes(location.pathname) && (<Footer />)}
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
