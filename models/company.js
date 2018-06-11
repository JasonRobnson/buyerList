module.exports = function(sequelize, DataTypes) {
    let Company = sequelize.define('Company', {
        
        companyName:
         {
            type: DataTypes.STRING, 
            notEmpty: true
         },
         companyAddressStr:
         {
             type: DataTypes.STRING,
             notEmpty: true 
         },
         companyAddressState:
         {
             type: DataTypes.STRING,
             notEmpty: true
         },
         companyZipCode:
         {
             type: DataTypes.INTEGER,
             notEmpty: true,
             not:["[a-z]",'i'],
         }, 
         phoneNumber:
         {
            type: DataTypes.STRING,
            notEmpty: true, 
            not:["[a-z]",'i'], 
         },
         pulicCompany: 
         {
             type: DataTypes.STRING,
             notEmpty: true
         },
         companyEmail:
         {
             type: DataTypes.STRING, 
             validate: {
                 isEmail: true
             }
         }
    })
    return Company;
}