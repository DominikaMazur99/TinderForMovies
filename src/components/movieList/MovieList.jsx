import React, { useState, useEffect } from "react";
import { getMovies } from "../../api/movieService";

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("/api/movies")
            .then((res) => res.json())
            .then((data) => setMovies(data));
    }, []);

    return (
        <div>
            {movies?.map((movie) => (
                <div key={movie.id}>
                    <img
                        src={movie.imageURL}
                        alt={movie.title}
                        loading="lazy"
                    />
                    <h3>{movie.title}</h3>
                    <p>{movie.summary}</p>
                    <p>
                        <strong>Rating:</strong> {movie.rating}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default MovieList;
