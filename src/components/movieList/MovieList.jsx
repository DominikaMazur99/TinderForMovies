import React, { useState } from "react";
import { MovieGrid } from "../../layouts/MainLayout.styled";

import MovieItem from "./movieItem/MovieItem";
import LazyLoader from "../loader/LazyLoader";

const MovieList = ({ movies, onAccept, onReject, type }) => {
    const [visibleCount, setVisibleCount] = useState(8);

    const loadMoreMovies = () => {
        setTimeout(() => {
            setVisibleCount((prev) => prev + 8);
        }, 1000);
    };

    return (
        <MovieGrid>
            {movies.slice(0, visibleCount).map((movie) => (
                <MovieItem
                    data-testid="movie-item"
                    key={movie.id}
                    movie={movie}
                    onAccept={onAccept}
                    onReject={onReject}
                    type={type}
                />
            ))}
            {visibleCount < movies.length && (
                <LazyLoader
                    onLoadMore={loadMoreMovies}
                    data-testid="lazy-loader"
                />
            )}
        </MovieGrid>
    );
};

export default MovieList;
