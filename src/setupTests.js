import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () =>
            Promise.resolve([
                {
                    id: "1",
                    title: "Mocked Movie 1",
                    summary: "Summary 1",
                    imageURL: "https://via.placeholder.com/150",
                    rating: 8.5,
                },
                {
                    id: "2",
                    title: "Mocked Movie 2",
                    summary: "Summary 2",
                    imageURL: "https://via.placeholder.com/150",
                    rating: 7.2,
                },
            ]),
    })
);
