import React, { useRef } from "react";
import {
    DialogContainer,
    Backdrop,
    DialogHeader,
    DialogContent,
} from "./DialogComponent.style";
import MovieList from "../movieList/MovieList";
import { IoMdClose } from "react-icons/io";
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
        <Backdrop onClick={handleBackdropClick}>
            <DialogContainer ref={dialogRef}>
                <DialogHeader>
                    <h2>Accepted Movies</h2>
                    <IconButton
                        content={<IoMdClose size={30} color="white" />}
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
