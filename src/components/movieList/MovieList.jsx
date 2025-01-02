import React, { useState } from "react";
import { Loader, MovieGrid } from "../../layouts/MainLayout.styled";
import { MovieCard } from "./MovieList.style";
import { useInView } from "react-intersection-observer";

const MovieList = ({ movies }) => {
    const [visibleCount, setVisibleCount] = useState(8);

    const loadMoreMovies = () => {
        setTimeout(() => {
            setVisibleCount((prev) => prev + 8);
        }, 1000);
    };

    return (
        <MovieGrid>
            {movies.slice(0, visibleCount).map((movie) => (
                <MovieItem key={movie.id} movie={movie} />
            ))}
            {visibleCount < movies.length && (
                <LazyLoader onLoadMore={loadMoreMovies} />
            )}
        </MovieGrid>
    );
};

const MovieItem = ({ movie }) => {
    return (
        <MovieCard>
            <img src={movie.imageURL} alt={movie.title} loading="lazy" />
            <h3>{movie.title}</h3>
            <p>{movie.summary}</p>
            <p>
                <strong>Rating:</strong> {movie.rating}
            </p>
        </MovieCard>
    );
};

const LazyLoader = ({ onLoadMore }) => {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    React.useEffect(() => {
        if (inView) {
            onLoadMore();
        }
    }, [inView, onLoadMore]);

    return (
        <div
            ref={ref}
            style={{
                height: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Loader />
        </div>
    );
};

export default MovieList;
