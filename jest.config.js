module.exports = {
    transform: {
        "^.+\\.[t|j]sx?$": "babel-jest",
    },
    transformIgnorePatterns: ["/node_modules/(?!(axios|@bundled-es-modules)/)"],
};
