const{ Category, CategorySchema } = require('./category.model');
const{ Product, ProductSchema } = require('./product.model');
const setupModels = (sequelize) => {
  Category.init(CategorySchema, Category.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
};
module.exports= setupModels;
