module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets", "assets");
    // serve _data/airports.json as /airports.json
    eleventyConfig.addPassthroughCopy("_data/airports.json", "airports.json");
};