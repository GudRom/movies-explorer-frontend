class MainApi {
    constructor({
        address
    }) {
        this.address = address;
    }

    getToken = () => {
        return `Bearer ${localStorage.getItem('jwt')}`;
    }

    _checkResult(res) {
        if (res.ok) {
            return res.json()
        } else {
            return Promise.reject(`Ошибка: ${res.status}`)
        }
    }

    getMovies() {
        return fetch(`${this.address}/movies`, {
                headers: {
                    authorization: this.getToken(),
                }
            })
            .then(res => this._checkResult(res))
    }

    addMovie(data) {
        return fetch(`${this.address}/movies`, {
                method: 'POST',
                headers: {
                    authorization: this.getToken(),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    country: data.country,
                    director: data.director,
                    duration: data.duration,
                    year: data.year,
                    description: data.description,
                    image: data.image.url,
                    trailerLink: data.trailerLink,
                    thumbnail: data.image.formats.thumbnail.url,
                    movieId: data.id,
                    nameRU: data.nameRU,
                    nameEN: data.nameEN,
                })
            })
            .then(res => this._checkResult(res))
    }

    deleteMovie(movieId) {
        return fetch(`${this.address}/movies/${movieId}`, {
                method: 'DELETE',
                headers: {
                    authorization: this.getToken(),
                    'Content-Type': 'application/json'
                }
            })
            .then(res => this._checkResult(res))
    }

    getUserInfo() {
        return fetch(`${this.address}/users/me`, {
                headers: {
                    authorization: this.getToken(),
                }
            })
            .then(res => this._checkResult(res))
    }

    updateProfile(name, email) {
        return fetch(`${this.address}/users/me`, {
                method: 'PATCH',
                headers: {
                    authorization: this.getToken(),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email
                })
            })
            .then(res => this._checkResult(res))
    }

    register(name, email, password) {
        return fetch(`${this.address}/signup`, {
                method: 'POST',
                headers: HEADERS,
                body: JSON.stringify({
                    name,
                    email,
                    password
                }),
            })
            .then(res => this._checkResult(res));
    }

    authorize(email, password) {
        return fetch(`${this.address}/signin`, {
                method: 'POST',
                headers: HEADERS,
                body: JSON.stringify({
                    email,
                    password
                }),
            })
            .then(res => this._checkResult(res));
    };

    checkToken() {
        return fetch(`${this.address}/users/me`, {
                method: 'GET',
                headers: {
                    ...HEADERS,
                    authorization: this.getToken(),
                },
            })
            .then(res => this._checkResult(res));
    };
}

const HEADERS = {
    Accept: "application/json",
    "Content-Type": "application/json",
};

const configMain = {
    address: 'https://api.movies.gudrom.nomoredomains.work',
}

const api = new MainApi(configMain);
export default api;