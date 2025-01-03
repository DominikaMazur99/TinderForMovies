import IconButton from "../../buttons/IconButton";
import { MovieCard } from "../MovieList.style";
import { SlCheck, SlClose } from "react-icons/sl";
import { ButtonContainer } from "./Movieitem.style";

const MovieItem = ({
    movie,
    onAccept,
    onReject,
    type = "all",
    isMobile = false,
}) => {
    return (
        <MovieCard $isMobile={isMobile}>
            <div>
                <img src={movie.imageURL} alt={movie.title} loading="lazy" />
                <h3>{movie.title}</h3>
                {type !== "accepted" && <p>{movie.summary}</p>}
                <p>
                    <strong>Rating:</strong> {movie.rating}
                </p>
            </div>
            {type !== "accepted" && (
                <ButtonContainer>
                    <IconButton
                        content={<SlCheck size={35} color="green" />}
                        onClick={() => onAccept(movie.id)}
                    />
                    <IconButton
                        content={<SlClose size={35} color="red" />}
                        onClick={() => onReject(movie.id)}
                    />
                </ButtonContainer>
            )}
        </MovieCard>
    );
};

export default MovieItem;
