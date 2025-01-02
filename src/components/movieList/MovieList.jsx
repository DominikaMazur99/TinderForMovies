import React from "react";
import { MovieGrid } from "../../layouts/MainLayout.styled";
import { MovieCard } from "./MovieList.style";

const MovieList = ({ movies }) => {
    return (
        <MovieGrid>
            {movies.map((movie) => (
                <MovieCard key={movie.id}>
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
                </MovieCard>
            ))}
        </MovieGrid>
    );
};

export default MovieList;
