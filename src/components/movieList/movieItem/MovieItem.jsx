import IconButton from "../../buttons/IconButton";
import { MovieCard } from "../MovieList.style";
import { SlCheck, SlClose } from "react-icons/sl";
import { ButtonContainer } from "./Movieitem.style";

const MovieItem = ({ movie }) => {
    return (
        <MovieCard
            onClick={() => {
                console.log(movie.id, movie.title);
            }}
        >
            <img src={movie.imageURL} alt={movie.title} loading="lazy" />
            <h3>{movie.title}</h3>
            <p>{movie.summary}</p>
            <p>
                <strong>Rating:</strong> {movie.rating}
            </p>
            <ButtonContainer>
                <IconButton content={<SlCheck size={35} color="green" />} />
                <IconButton content={<SlClose size={35} color="red" />} />
            </ButtonContainer>
        </MovieCard>
    );
};

export default MovieItem;
