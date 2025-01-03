import React, { useState, useEffect } from "react";
import { Container, Content, Header } from "./MainLayout.styled";
import MovieList from "../components/movieList/MovieList";
import { IoLibraryOutline } from "react-icons/io5";
import { ButtonContainer } from "../components/movieList/movieItem/Movieitem.style";
import IconButton from "../components/buttons/IconButton";
import DialogComponent from "../components/dialogs/DialogComponent";

const MainLayout = () => {
    const [movies, setMovies] = useState([]);
    const [acceptedMovies, setAcceptedMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showAcceptedMovies, setShowAcceptedMovies] = useState(false);

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

    useEffect(() => {
        const fetchAcceptedMovies = async () => {
            try {
                const res = await fetch("/api/movies/accepted");
                const data = await res.json();
                setAcceptedMovies(data);
            } catch (error) {
                console.error("Error fetching accepted movies:", error);
            }
        };

        fetchAcceptedMovies();
    }, []);

    const handleAccept = async (id) => {
        const res = await fetch(`/api/movies/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: "accepted" }),
        });

        if (res.ok) {
            const updatedMovie = await res.json();

            setMovies((prev) =>
                prev.filter((movie) => movie.id !== updatedMovie.id)
            );
            setAcceptedMovies((prev) => [...prev, updatedMovie]);
        }
    };

    const handleReject = async (id) => {
        const res = await fetch(`/api/movies/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: "rejected" }),
        });

        if (res.ok) {
            const updatedMovie = await res.json();

            setMovies((prev) =>
                prev.filter((movie) => movie.id !== updatedMovie.id)
            );
        }
    };

    const handleShowAcceptedMovies = () => {
        setShowAcceptedMovies(true);
    };

    const handleCloseModal = () => {
        setShowAcceptedMovies(false);
    };

    return (
        <>
            <Container>
                <Header>
                    <ButtonContainer>
                        <h1>Movie Recommendations</h1>
                        <IconButton
                            tooltip="Show accepted movies list"
                            content={
                                <IoLibraryOutline size={30} color="white" />
                            }
                            onClick={handleShowAcceptedMovies}
                        />
                    </ButtonContainer>
                </Header>
                <Content>
                    {loading ? (
                        <p>Loading movies...</p>
                    ) : (
                        <MovieList
                            movies={movies}
                            onAccept={handleAccept}
                            onReject={handleReject}
                        />
                    )}
                </Content>
                {/* <NavbarComponent /> */}
            </Container>
            <DialogComponent
                show={showAcceptedMovies}
                onClose={handleCloseModal}
                acceptedMovies={acceptedMovies}
            />
        </>
    );
};

export default MainLayout;
