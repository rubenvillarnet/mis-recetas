const postres = require('./postres.json');
const sortRecipes = require('../_assets/js/sortRecipes');

module.exports = sortRecipes(postres);
