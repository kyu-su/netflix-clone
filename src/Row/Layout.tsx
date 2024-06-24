import { Movie } from './useProps';

type LayoutProps = {
    title: string;
    movies: Movie[];
    isLargeRow?: boolean;
};

export const Layout = ({ title, movies, isLargeRow }: LayoutProps) => {
    const image_url = 'https://image.tmdb.org/t/p/original';

    return (
        <div>
            <h2>{title}</h2>
            <div>
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        src={`${image_url}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`}
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    );
};
