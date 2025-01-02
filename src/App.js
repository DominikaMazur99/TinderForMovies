import React, { Suspense } from "react";

const MainLayout = React.lazy(() => import("./layouts/MainLayout"));

const App = () => {
    return (
        <div>
            <Suspense fallback={<p>Loading layout...</p>}>
                <MainLayout />
            </Suspense>
        </div>
    );
};

export default App;
