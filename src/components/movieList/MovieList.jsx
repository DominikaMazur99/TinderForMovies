import React, { useState } from "react";
import { MovieGrid } from "../../layouts/MainLayout.styled";

import MovieItem from "./movieItem/MovieItem";
import LazyLoader from "../loader/LazyLoader";

const MovieList = ({ movies, onAccept, onReject }) => {
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
                    key={movie.id}
                    movie={movie}
                    onAccept={onAccept}
                    onReject={onReject}
                />
            ))}
            {visibleCount < movies.length && (
                <LazyLoader onLoadMore={loadMoreMovies} />
            )}
        </MovieGrid>
    );
};

export default MovieList;
