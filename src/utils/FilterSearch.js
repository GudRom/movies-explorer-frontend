// На входе получаем массив фильмов и значение поиска, на выходе массив искомых фильмов
export default function filterSearch(movies, search, check){
    const regex = new RegExp(search, 'gi')
    let res = movies.filter((movie) => regex.test(movie.nameRU));
    if (check) { return res.filter((movie) => movie.duration <= 40)};
    return res;
}