import React, { useRef } from "react";
import {
    DialogContainer,
    Backdrop,
    DialogHeader,
    DialogContent,
} from "./DialogComponent.style";
import MovieList from "../movieList/MovieList";
import { IoReturnDownBack } from "react-icons/io5";
import IconButton from "../buttons/IconButton";

const DialogComponent = ({ show, onClose, acceptedMovies }) => {
    const dialogRef = useRef(null);

    const handleBackdropClick = (e) => {
        if (dialogRef.current && !dialogRef.current.contains(e.target)) {
            onClose();
        }
    };

    if (!show) return null;

    return (
        <Backdrop onClick={handleBackdropClick} data-testid="backdrop">
            <DialogContainer ref={dialogRef} role="dialog" aria-modal="true">
                <DialogHeader>
                    <h2>Accepted Movies</h2>
                    <IconButton
                        content={<IoReturnDownBack size={30} color="white" />}
                        onClick={onClose}
                    />
                </DialogHeader>
                <DialogContent>
                    {acceptedMovies && acceptedMovies.length > 0 ? (
                        <MovieList movies={acceptedMovies} type="accepted" />
                    ) : (
                        <p>Not any accepted films here...</p>
                    )}
                </DialogContent>
            </DialogContainer>
        </Backdrop>
    );
};

export default DialogComponent;
