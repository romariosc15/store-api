const { Model, DataTypes, Sequelize } = require('sequelize');

const PRODUCT_TABLE = 'products';
const ProductSchema= {
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  categoryId:{
    allowNull: false,
    field: 'category_id',
    type: DataTypes.INTEGER
  },
  code:{
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  image:{
    allowNull: false,
    type: DataTypes.STRING
  },
  name:{
    allowNull: false,
    type: DataTypes.STRING
  },
  description:{
    allowNull: false,
    type: DataTypes.STRING
  },
  price:{
    allowNull: false,
    type: DataTypes.FLOAT
  },
  discount:{
    type: DataTypes.FLOAT
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  }
};

class Product extends Model{
  static associate(){}
  static config(sequelize){
    return{
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: false
    }
  }
}

module.exports={ PRODUCT_TABLE, ProductSchema, Product }
