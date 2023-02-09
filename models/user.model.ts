'use strict';
import { stringify } from 'querystring';
import {
  DataType,
  Model, UUIDV4
} from 'sequelize';
//import { generateFromEmail } from 'unique-username-generator';

interface UserAttributes{
  id: string,
  email: string;
  name: string;
  username: string;
  // followers: Number;
  // followings: Number;
}

module.exports = (sequelize:any, DataTypes:any) =>  {
  class User extends Model<UserAttributes>
  implements UserAttributes {
    
    
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: string;
    email!: string;
    name!: string;
    username!: string;
    // followers!: Number;
    // followings!: Number;

    
    // static associate({Post}) {
    //   // define association here
    //   this.hasMany(Post,{foreignKey:'userId',as:'posts'})
    // }
    // static associate(Post:any) {
    //   this.hasMany(Post,{foreignKey:'userId',as:'posts'})
      
    // }
    static associate(models:any) {
      this.hasMany(models.Post, { foreignKey: 'userId', as: 'posts' });
    }
    
  }
  User.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull: { msg : 'User must have a email'},
        notEmpty: { msg : 'Email must not be empty'},
        isEmail:{ msg: 'Must be a valid email address'}
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull: { msg : 'User must have a name'},
        notEmpty: { msg : 'Name must not be empty'}
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull: { msg : 'Username must have a email'},
        notEmpty: { msg : 'username must not be empty'}
      }
    }
    //,
    // followers:{
    //   type: DataTypes.INTEGER,
    //   allowNull: true
    // },
    // followings:{
    //   type: DataTypes.INTEGER,
    //   allowNull: true
    // }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};