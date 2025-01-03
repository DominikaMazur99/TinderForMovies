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
    const movieCardMobile = () => {
        return (
            <div style={{ display: "grid", gridTemplateRows: "4fr 1fr" }}>
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
                    </div>
                </MovieCard>
                {type !== "accepted" && (
                    <ButtonContainer>
                        <IconButton
                            content={<SlCheck size={50} color="green" />}
                            onClick={() => onAccept(movie.id)}
                        />
                        <IconButton
                            content={<SlClose size={50} color="red" />}
                            onClick={() => onReject(movie.id)}
                        />
                    </ButtonContainer>
                )}
            </div>
        );
    };

    const movieCardDesktop = () => {
        return (
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

    return isMobile ? movieCardMobile() : movieCardDesktop();
};

export default MovieItem;
