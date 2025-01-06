import React, { useState, useEffect } from "react";
import { AppTitle, Container, Content, Header } from "./MainLayout.styled";
import MovieList from "../components/movieList/MovieList";
import { IoLibraryOutline } from "react-icons/io5";
import { ButtonContainer } from "../components/movieList/movieItem/Movieitem.style";
import IconButton from "../components/buttons/IconButton";
import DialogComponent from "../components/dialogs/DialogComponent";
import SwiperComponent from "../components/movieList/SwiperComponent";
import { fetchData } from "../services/api";

const MainLayout = () => {
    const [movies, setMovies] = useState([]);
    const [acceptedMovies, setAcceptedMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showAcceptedMovies, setShowAcceptedMovies] = useState(false);

    useEffect(() => {
        const loadMovies = async () => {
            try {
                const data = await fetchData("/api/recommendations");
                setMovies(data);
            } catch (error) {
                console.error("Failed to load movies.");
            } finally {
                setLoading(false);
            }
        };

        loadMovies();
    }, []);

    useEffect(() => {
        const loadAcceptedMovies = async () => {
            try {
                const data = await fetchData("/api/recommendations/accepted");
                setAcceptedMovies(data);
            } catch (error) {
                console.error("Failed load accepted recommendations:", error);
            }
        };

        loadAcceptedMovies();
    }, []);

    const handleAccept = async (id) => {
        try {
            const updatedMovie = await fetchData(
                `/api/recommendations/${id}`,
                "PATCH",
                { status: "accepted" }
            );

            setMovies((prev) =>
                prev.filter((movie) => movie.id !== updatedMovie.id)
            );
            setAcceptedMovies((prev) => [...prev, updatedMovie]);
        } catch (error) {
            console.error("Error during accept action.");
        }
    };

    const handleReject = async (id) => {
        try {
            const updatedMovie = await fetchData(
                `/api/recommendations/${id}`,
                "PATCH",
                { status: "rejected" }
            );

            setMovies((prev) =>
                prev.filter((movie) => movie.id !== updatedMovie.id)
            );
        } catch (error) {
            console.error("Error during reject action.");
        }
    };

    const handleShowAcceptedMovies = () => {
        setShowAcceptedMovies(true);
    };

    const handleCloseModal = () => {
        setShowAcceptedMovies(false);
    };
    const isMobile = window.innerWidth <= 768;
    console.log(movies);

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
