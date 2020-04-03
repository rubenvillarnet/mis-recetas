module.exports = (eleventyConfig) => {

  eleventyConfig.addLayoutAlias('default', 'layouts/default.hbs');

  return {
    templateFormats: ['hbs'],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "hbs",
    dataTemplateEngine: "hbs",
  }
}