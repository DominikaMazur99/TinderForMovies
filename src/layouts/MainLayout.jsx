import React, { useState, useEffect } from "react";
import { Container, Content } from "./MainLayout.styled";
import NavbarComponent from "../components/navbar/NavbarComponent";
import MovieList from "../components/movieList/MovieList";

const MainLayout = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = await fetch("/api/movies");
                const data = await res.json();
                setMovies(data);
            } catch (error) {
                console.error("Error fetching movies:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    return (
        <Container>
            <Content>
                <h1>Movie Recommendations</h1>
                {loading ? (
                    <p>Loading movies...</p>
                ) : (
                    <MovieList movies={movies} />
                )}
            </Content>
            <NavbarComponent />
        </Container>
    );
};

export default MainLayout;
