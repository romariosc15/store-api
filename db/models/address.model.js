const { Model, DataTypes, Sequelize } = require('sequelize');

const { CUSTOMER_TABLE } = require('./customer.model')

const ADDRESS_TABLE = 'addresses';
const AddressSchema= {
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name:{
    allowNull: false,
    type: DataTypes.STRING
  },
  customerId:{
    field: 'customer_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CUSTOMER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  department:{
    allowNull: false,
    type: DataTypes.STRING
  },
  province:{
    allowNull: false,
    type: DataTypes.STRING
  },
  district:{
    allowNull: false,
    type: DataTypes.STRING
  },
  address:{
    allowNull: false,
    type: DataTypes.STRING
  },
  zipCode:{
    field: 'zip_code',
    allowNull: false,
    type: DataTypes.INTEGER
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  }
};

class Address extends Model{
  static associate(models) {
    this.belongsTo(models.Customer, {as: 'customer'});
  }
  static config(sequelize){
    return{
      sequelize,
      tableName: ADDRESS_TABLE,
      modelName: 'Address',
      timestamps: false
    }
  }
}

module.exports={ ADDRESS_TABLE, AddressSchema, Address }
