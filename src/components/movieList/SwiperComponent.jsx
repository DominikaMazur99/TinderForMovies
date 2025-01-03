import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import MovieItem from "./movieItem/MovieItem";
import { SwiperContainer } from "./MovieList.style";

const SwiperComponent = ({ movies, onReject, onAccept }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSwipeUp = () => {
        const currentMovie = movies[currentIndex];
        console.log("Rejected:", currentMovie?.title);

        if (currentMovie) {
            onReject(currentMovie.id);
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const handlers = useSwipeable({
        onSwipedUp: handleSwipeUp,
        preventScrollOnSwipe: true,
        trackTouch: true,
        trackMouse: true,
    });

    if (currentIndex >= movies.length) {
        return <p>No more recommendations</p>;
    }

    return (
        <SwiperContainer {...handlers}>
            <MovieItem
                key={movies[currentIndex]?.id}
                movie={movies[currentIndex]}
                onAccept={onAccept}
                onReject={onReject}
                isMobile
            />
        </SwiperContainer>
    );
};

export default SwiperComponent;
