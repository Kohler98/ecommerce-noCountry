// nombre, apellido, password , correo, pais, estado, ciudad, codigoPostal,
const Sequelize = require('sequelize')
const {db} = require("../dataBase/db.js")

 
const Categorias = db.define('categorias',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    nombre:Sequelize.TEXT,
    slug:Sequelize.TEXT
},{
    timestamps:false
})

module.exports = Categorias;