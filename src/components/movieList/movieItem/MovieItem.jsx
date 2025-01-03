import IconButton from "../../buttons/IconButton";
import { MovieCard } from "../MovieList.style";
import { SlCheck, SlClose } from "react-icons/sl";
import { ButtonContainer } from "./Movieitem.style";

const MovieItem = ({ movie, onAccept, onReject }) => {
    return (
        <MovieCard>
            <img src={movie.imageURL} alt={movie.title} loading="lazy" />
            <h3>{movie.title}</h3>
            <p>{movie.summary}</p>
            <p>
                <strong>Rating:</strong> {movie.rating}
            </p>
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
        </MovieCard>
    );
};

export default MovieItem;
