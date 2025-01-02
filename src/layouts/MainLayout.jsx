import React, { Suspense } from "react";
import { Container, MovieGrid } from "./MainLayout.styled";

const MovieList = React.lazy(() => import("../components/movieList/MovieList"));

const MainLayout = () => {
    return (
        <Container>
            <h1>Movie Recommendations</h1>
            <Suspense fallback={<p>Loading movies...</p>}>
                <MovieGrid>
                    <MovieList />
                </MovieGrid>
            </Suspense>
        </Container>
    );
};

export default MainLayout;
