const sortRecipes = (recipes) => {
    return recipes.sort(function (a, b) {
        return a.title.localeCompare(b.title, 'es', {
            ignorePunctuation: true,
        });
    });
};

module.exports = sortRecipes;
