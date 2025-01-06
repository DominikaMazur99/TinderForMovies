import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import MovieItem from "./movieItem/MovieItem";
import {
    SwiperContainer,
    Overlay,
    SwipeInfo,
    Arrow,
    SwipeInfoWrapper,
    SwipeArrowWrapper,
} from "./MovieList.style";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SwiperComponent = ({ movies, onReject, onAccept }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [swipeDirection, setSwipeDirection] = useState(null);
    const [swipeDistance, setSwipeDistance] = useState(0);
    const [imgClicked, setImgClicked] = useState(false);
    const SWIPE_THRESHOLD = 150;

    const handleSwipeComplete = () => {
        const currentMovie = movies[currentIndex];

        if (Math.abs(swipeDistance) > SWIPE_THRESHOLD) {
            if (swipeDistance > 0) {
                onReject(currentMovie.id);
            } else if (swipeDistance < 0) {
                onAccept(currentMovie.id);
            }

            setCurrentIndex((prev) => prev + 1);
        }
        resetSwipe();
    };

    const handleSwiping = (e) => {
        setSwipeDistance(e.deltaX);

        if (e.deltaX > 0) {
            setSwipeDirection("right");
        } else if (e.deltaX < 0) {
            setSwipeDirection("left");
        }
    };

    const resetSwipe = () => {
        setSwipeDirection(null);
        setSwipeDistance(0);
    };

    const handlers = useSwipeable({
        onSwiping: handleSwiping,
        onSwiped: handleSwipeComplete,
        preventScrollOnSwipe: true,
        trackTouch: true,
        trackMouse: true,
    });

    if (currentIndex >= movies.length) {
        return <p style={{ padding: "30px" }}>No more recommendations</p>;
    }

    return (
        <SwiperContainer
            {...handlers}
            $swipeDistance={swipeDistance}
            data-testid="swiper"
        >
            <Overlay
                $swipeDirection={swipeDirection}
                $swipeDistance={swipeDistance}
                $imgClicked={imgClicked}
            >
                {swipeDirection === "right" && (
                    <SwipeInfo $swipeDistance={swipeDistance}>
                        <p>Reject Recommendation</p>
                        <Arrow>
                            <IoIosArrowForward />
                        </Arrow>
                    </SwipeInfo>
                )}
                {swipeDirection === "left" && (
                    <SwipeInfo $swipeDistance={swipeDistance}>
                        <Arrow>
                            <IoIosArrowBack />
                        </Arrow>
                        <p>Accept Recommendation</p>
                    </SwipeInfo>
                )}
                {imgClicked && (
                    <SwipeInfo>
                        <SwipeInfoWrapper>
                            <SwipeArrowWrapper>
                                <Arrow>
                                    <IoIosArrowBack />
                                </Arrow>
                                <p>Accept</p>
                            </SwipeArrowWrapper>
                            <SwipeArrowWrapper>
                                <p>Reject</p>
                                <Arrow>
                                    <IoIosArrowForward />
                                </Arrow>
                            </SwipeArrowWrapper>
                        </SwipeInfoWrapper>
                    </SwipeInfo>
                )}
            </Overlay>
            <MovieItem
                key={movies[currentIndex]?.id}
                movie={movies[currentIndex]}
                onAccept={onAccept}
                onReject={onReject}
                setImgClicked={setImgClicked}
                distanceChange={swipeDistance !== 0}
                isMobile
            />
        </SwiperContainer>
    );
};

export default SwiperComponent;
