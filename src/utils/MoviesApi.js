class MoviesApi {
    constructor({
        address
    }) {
        this.address = address;
    }

    getMovies() {
        return fetch(`${this.address}`, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                }
            })
            .then(res => this._checkResult(res))
    }

    _checkResult(res) {
        if (res.ok) {
            return res.json()
        } else {
            return Promise.reject(`Ошибка: ${res.status}`)
        }
    }
}

const configM = {
    address: 'https://api.nomoreparties.co/beatfilm-movies',
}

const beatFilmApi = new MoviesApi(configM);
export default beatFilmApi;