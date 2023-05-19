const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function(eleventyConfig) {
    let markdownLibrary = markdownIt({
        html: true,
        breaks: true,
        linkify: true
    });
    
    markdownLibrary.use(markdownItAnchor, {
        permalink: true,
        permalinkClass: "direct-link",
        permalinkSymbol: "#"
    });

    eleventyConfig.setLibrary("md", markdownLibrary);

    eleventyConfig.addPassthroughCopy("assets", "assets");
    // serve _data/airports.json as /airports.json
    eleventyConfig.addPassthroughCopy("_data/airports.json", "airports.json");
};