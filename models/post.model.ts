'use strict';
const {
  Model
} = require('sequelize');
const { User } = require("../models");

module.exports = (sequelize:any, DataTypes:any) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(User: any) {
    //   this.belongsTo(User,{foreignKey: 'userId', as: 'user'})
      
    // }
    static associate(models:any) {
      this.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    }
    
    toJSON(){
      return { ...this.get(),id: undefined,uuid:undefined}
    }
  }
  Post.init({
    uuid:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    tweet: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 280]
      }
    }
    
  }, {
    sequelize,
    tablename:'posts',
    modelName: 'Post',
  });
  return Post;
};