import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Loader } from "../../layouts/MainLayout.styled";

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
        <div
            ref={ref}
            style={{
                height: 100,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Loader />
        </div>
    );
};

export default LazyLoader;
