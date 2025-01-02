import React, { useState, useEffect } from "react";
import { Container, Content } from "./MainLayout.styled";
import MovieList from "../components/movieList/MovieList";
import { IoLibraryOutline } from "react-icons/io5";
import { ButtonContainer } from "../components/movieList/movieItem/Movieitem.style";
import IconButton from "../components/buttons/IconButton";

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
                <ButtonContainer>
                    <h1>Movie Recommendations</h1>
                    <IconButton
                        tooltip="Show accepted movies list"
                        content={<IoLibraryOutline size={30} color="white" />}
                    />
                </ButtonContainer>

                {loading ? (
                    <p>Loading movies...</p>
                ) : (
                    <MovieList movies={movies} />
                )}
            </Content>
            {/* <NavbarComponent /> */}
        </Container>
    );
};

export default MainLayout;
