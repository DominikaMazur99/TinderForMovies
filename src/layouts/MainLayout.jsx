import React, { useState, useEffect } from "react";
import { AppTitle, Container, Content, Header } from "./MainLayout.styled";
import MovieList from "../components/movieList/MovieList";
import { IoLibraryOutline } from "react-icons/io5";
import { ButtonContainer } from "../components/movieList/movieItem/Movieitem.style";
import IconButton from "../components/buttons/IconButton";
import DialogComponent from "../components/dialogs/DialogComponent";
import SwiperComponent from "../components/movieList/SwiperComponent";

const MainLayout = () => {
    const [movies, setMovies] = useState([]);
    const [acceptedMovies, setAcceptedMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showAcceptedMovies, setShowAcceptedMovies] = useState(false);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = await fetch("/api/recommendations");
                const data = await res.json();
                setMovies(data);
            } catch (error) {
                console.error("Error fetching recommendations:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    useEffect(() => {
        const fetchAcceptedMovies = async () => {
            try {
                const res = await fetch("/api/recommendations/accepted");
                const data = await res.json();
                setAcceptedMovies(data);
            } catch (error) {
                console.error(
                    "Error fetching accepted recommendations:",
                    error
                );
            }
        };

        fetchAcceptedMovies();
    }, []);

    const handleAccept = async (id) => {
        const res = await fetch(`/api/recommendations/${id}`, {
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
        const res = await fetch(`/api/recommendations/${id}`, {
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
    const isMobile = window.innerWidth <= 768;

    return (
        <>
            <Container>
                <Header>
                    <ButtonContainer>
                        <AppTitle $isMobile={isMobile}>
                            Movie Recommendations
                        </AppTitle>
                        <IconButton
                            tooltip="Show accepted movies list"
                            content={
                                <IoLibraryOutline size={30} color="white" />
                            }
                            onClick={handleShowAcceptedMovies}
                        />
                    </ButtonContainer>
                </Header>
                {isMobile ? (
                    <SwiperComponent
                        movies={movies}
                        onReject={handleReject}
                        onAccept={handleAccept}
                    />
                ) : (
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
                )}
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
