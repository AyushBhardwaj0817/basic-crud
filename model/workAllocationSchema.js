import { DataTypes } from "sequelize";


export const createWorkModel = async (sequelize) => {

    const Work = sequelize.define('Work', {

        programme_name: {
            type: DataTypes.STRING,
            allowNull: false,
           
        },

        select_states: {
            type: DataTypes.STRING,
            allowNull: false
        },

        select_districts: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },

        agency_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        start_date: {
            type: DataTypes.STRING,
            allowNull: false
        },

        end_date: {
            type: DataTypes.STRING,
            allowNull: false
        },

        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
       

    });

    return Work;

}