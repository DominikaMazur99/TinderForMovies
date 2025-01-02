import React from "react";
import { MovieGrid } from "../../layouts/MainLayout.styled";

const MovieList = ({ movies }) => {
    return (
        <MovieGrid>
            {movies.map((movie) => (
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
        </MovieGrid>
    );
};

export default MovieList;
