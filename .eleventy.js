module.exports = (eleventyConfig) => {
    eleventyConfig.addLayoutAlias('default', 'layouts/default.hbs');

    return {
        dir: {
            input: 'src/',
            includes: '_includes',
        },
        templateFormats: ['hbs', 'png', 'jpg', 'jpeg'],
        markdownTemplateEngine: 'liquid',
        htmlTemplateEngine: 'hbs',
        dataTemplateEngine: 'hbs',
    };
};
