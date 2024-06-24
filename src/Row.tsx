import axios from './axios';
import { useState, useEffect } from 'react';

import "./Row.scss";
import YouTube from 'react-youtube';

type Props = {
    title: string;
    fetchUrl: string;
    isLargeRow?: boolean;
};

type Movie = {
    id: string;
    name: string;
    title: string;
    original_name: string;
    poster_path: string;
    backdrop_path: string;
};

type Options = {
    height: string;
    width: string;
    playerVars: {
        autoPlay: 0 | 1 | undefined;
    }
}

const base_url = 'https://image.tmdb.org/t/p/original/';

export const Row: React.FC<Props> = ({
    title,
    fetchUrl,
    isLargeRow = false,
}: Props) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [trailerUrl, setTrailerUrl] = useState<string | null>("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);

            return request;
        }

        fetchData();
    }, [fetchUrl]);

    const opts: Options = {
        height: "390",
        width: "640",
        playerVars: {
            autoPlay: 1
        }
    }

    const handleClick = async (movie: Movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            let trailerUrl = await axios.get(
                `/movie/${movie.id}/videos?api_key=0f251d2d2ff07d1201b47ccb805f2c4c`
            )
            setTrailerUrl(trailerUrl.data.results[0]?.key);
        }
    }

    console.log(movies);

    return (
        <div className="Row">
            <h2>{title}</h2>
            <div className="Row-posters">
                {/* ポスターコンテンツ */}
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        className={
                            `Row-poster${isLargeRow ? ' Row-poster-large': ""}`
                        }
                        src={`${base_url}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`}
                        alt={movie.name}
                        onClick={() => handleClick(movie)}
                    />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={ trailerUrl } opts={opts} />}
        </div>
    );
};
