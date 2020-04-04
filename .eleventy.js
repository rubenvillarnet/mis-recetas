module.exports = (eleventyConfig) => {

  eleventyConfig.addLayoutAlias('default', 'layouts/default.hbs');

  return {
    dir: {
      input: "src/",
      includes: "_includes"
    },
    templateFormats: ['hbs'],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "hbs",
    dataTemplateEngine: "hbs",
  }
}