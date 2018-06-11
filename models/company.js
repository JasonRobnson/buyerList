module.exports = function() {
    let Company = sequelize.define('Company', {
        
        companyName:
         {
            type: Sequelize.STRING, 
            notEmpty: true
         },
         companyAddressStr:
         {
             type: Sequelize.STRING,
             notEmpty: true 
         },
         companyAddressState:
         {
             type: Sequelize.STRING,
             notEmpty: true
         },
         companyZipCode:
         {
             type: Sequelize.INTEGER,
             notEmpty: true,
             not:["[a-z]",'i'],
         }, 
         pulicCompany: 
         {
             type: Sequelize.STRING,
             notEmpty: true
         },
         companyEmail:
         {
             tpe: Sequelize.STRING, 
             validate: {
                 isEmail: true
             }
         }
    })
    return Company;
}