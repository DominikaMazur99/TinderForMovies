import React, { useRef } from "react";
import { DialogContainer, Backdrop } from "./DialogComponent.style";
import MovieList from "../movieList/MovieList";

const DialogComponent = ({ show, onClose, acceptedMovies }) => {
    const dialogRef = useRef(null);

    const handleBackdropClick = (e) => {
        if (dialogRef.current && !dialogRef.current.contains(e.target)) {
            onClose();
        }
    };

    if (!show) return null;

    return (
        <Backdrop onClick={handleBackdropClick}>
            <DialogContainer ref={dialogRef}>
                <h2>Accepted Movies</h2>
                {acceptedMovies ? (
                    <MovieList movies={acceptedMovies} type="accepted" />
                ) : (
                    <p>Not any accepted films here...</p>
                )}
            </DialogContainer>
        </Backdrop>
    );
};

export default DialogComponent;
