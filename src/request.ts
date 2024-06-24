const API_KEY = '';

export const requests = {
    feachTrending: `/trending/all/week?api_key=${API_KEY}&language=ja-JP`,
    feachNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    feactTopRated: `/discover/tv?api_key=${API_KEY}&languager=ja-JP`,
    feactActionMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
    feactComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    feactHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10765`,
    feactRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    feactDocumentMovies: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
};
