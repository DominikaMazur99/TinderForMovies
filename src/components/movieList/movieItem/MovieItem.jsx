import IconButton from "../../buttons/IconButton";
import { MovieCard } from "../MovieList.style";
import { SlCheck, SlClose } from "react-icons/sl";
import { ButtonContainer, CardContent } from "./Movieitem.style";

const MovieItem = ({
    movie,
    onAccept,
    onReject,
    type = "all",
    isMobile = false,
}) => {
    const renderButtons = () => (
        <ButtonContainer>
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
        <div
            style={
                isMobile
                    ? { display: "grid", gridTemplateRows: "4fr 1fr" }
                    : undefined
            }
        >
            <MovieCard $isMobile={isMobile}>
                <div>
                    <img
                        src={movie.imageURL}
                        alt={movie.title}
                        loading="lazy"
                    />
                    <CardContent>
                        <h3>{movie.title}</h3>
                        <p>{movie.summary}</p>
                        <p>
                            <strong>Rating:</strong> {movie.rating}
                        </p>
                    </CardContent>
                    {type !== "accepted" && !isMobile && renderButtons()}
                </div>
            </MovieCard>
            {type !== "accepted" && isMobile && renderButtons()}
        </div>
    );
};

export default MovieItem;
