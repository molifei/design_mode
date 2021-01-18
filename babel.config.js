module.exports = function (api) {

    api.cache(true)

    const presets = ["@babel/preset-env"];
    const plugins = [
        "@babel/plugin-transform-arrow-functions",
        ["@babel/plugin-proposal-decorators", {"legacy": true}],
        ["@babel/plugin-proposal-class-properties", {"loose": true}],
        "@babel/plugin-transform-runtime"
    ];

    return {
        presets,
        plugins
    };
}
