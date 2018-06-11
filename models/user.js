

module.exports = (sequelize, DataTypes ) => {

    let User = sequelize.define("User", {

     nameFirst:
      {
          type: DataTypes.STRING,
          validate: {
              is: ["^[a-z]+$",'i'],
          }

      },
      nameLast:
      {
          type: DataTypes.STRING,
          validate: {
            is: ["^[a-z]+$",'i'],
        } 
      },
      email:
      {
          type: DataTypes.STRING,
          validate: {
            isEmail: true
        }
      },
      userName:
      {
          type: DataTypes.STRING,
      },
      userPsswd:
      {
          type: DataTypes.STRING, 
      },
      userAddress: {
          type: DataTypes.STRING, 
      },
      userState: {
          type: DataTypes.STRING, 
      },
      userZipcode: {
          type: DataTypes.STRING, 
      },
      userLongitude:
      {
          type: DataTypes.INTEGER,
          allowNull: true, 
          validate: {
            min: -180, 
            max: 180, 
          }
      },
      userLatitude: 
      {
          type: DataTypes.INTEGER,
          allowNull: true, 
          validate: {
              min: -90, 
              max: 90, 
          }
      },
      userLoginIp:
      {
          type: DataTypes.INTEGER, 
          validate: {
              isIP: true, 
          }
      } 

    })
    return User
}