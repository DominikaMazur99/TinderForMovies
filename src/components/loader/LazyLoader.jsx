import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Loader } from "../../layouts/MainLayout.styled";
import { LazyLoaderWrapper } from "./LazyLoader.style";

const LazyLoader = ({ onLoadMore }) => {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        if (inView) {
            onLoadMore();
        }
    }, [inView, onLoadMore]);

    return (
        <LazyLoaderWrapper ref={ref}>
            <Loader data-testid="loader" />
        </LazyLoaderWrapper>
    );
};

export default LazyLoader;
