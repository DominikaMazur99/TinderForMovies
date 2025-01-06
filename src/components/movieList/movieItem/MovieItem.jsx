import IconButton from "../../buttons/IconButton";
import { MovieCard } from "../MovieList.style";
import { SlCheck, SlClose } from "react-icons/sl";
import { ButtonContainer, CardContent } from "./Movieitem.style";
import { useEffect } from "react";

const MovieItem = ({
    movie,
    onAccept,
    onReject,
    type = "all",
    isMobile = false,
    setImgClicked,
    distanceChange,
}) => {
    const handleMouseDown = () => {
        setImgClicked(true);
    };

    const handleMouseUp = () => {
        setImgClicked(false);
    };

    useEffect(() => {
        if (distanceChange) {
            setImgClicked(false);
        }
    }, [distanceChange]);

    const renderButtons = () => (
        <ButtonContainer style={{ bottom: "0" }}>
            <IconButton
                content={<SlCheck size={isMobile ? 50 : 35} color="green" />}
                ariaLabel="Accept"
                onClick={() => onAccept(movie.id)}
            />
            <IconButton
                content={<SlClose size={isMobile ? 50 : 35} color="red" />}
                onClick={() => onReject(movie.id)}
                ariaLabel="Reject"
            />
        </ButtonContainer>
    );

    return (
        <MovieCard $isMobile={isMobile}>
            <img
                src={movie.imageURL}
                alt={movie.title}
                onMouseDown={isMobile ? handleMouseDown : null}
                onMouseUp={isMobile ? handleMouseUp : null}
                onTouchStart={isMobile ? handleMouseDown : null}
                onTouchEnd={isMobile ? handleMouseUp : null}
                loading="lazy"
                onError={(e) => {
                    e.target.src = "";
                    e.target.alt = "No Image Available";
                }}
            />
            <CardContent>
                <h3>{movie.title}</h3>
                <p>{movie.summary}</p>
                <p>
                    <strong>Rating:</strong> {movie.rating}
                </p>
            </CardContent>

            {type !== "accepted" && (
                <ButtonContainer>
                    <IconButton
                        content={
                            <SlCheck size={isMobile ? 50 : 35} color="green" />
                        }
                        ariaLabel="Accept"
                        onClick={() => onAccept(movie.id)}
                    />
                    <IconButton
                        content={
                            <SlClose size={isMobile ? 50 : 35} color="red" />
                        }
                        onClick={() => onReject(movie.id)}
                        ariaLabel="Reject"
                    />
                </ButtonContainer>
            )}
        </MovieCard>
    );
};

export default MovieItem;
