const db = require('../utils/database')

const { DataTypes } = require('sequelize')

const UserCourses = db.define('users_courses', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
},{
    timestamps: false
})

module.exports = UserCourses