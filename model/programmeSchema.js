import { DataTypes } from "sequelize";


export const createProgrammeModel = async (sequelize) => {

    const Programme = sequelize.define('Programme', {

        programme_code: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        programme_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        organization_name: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },

        start_date: {
            type: DataTypes.STRING,
            allowNull: false
        },

        end_date: {
            type: DataTypes.STRING,
            allowNull: false
        },

        duration: {
            type: DataTypes.STRING,
            allowNull: false
        },

        region: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        districts: {
            type: DataTypes.STRING,
            allowNull: false
        },
        seasons: {
            type: DataTypes.STRING,
            allowNull: false
        },
        total_points: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        crop_1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        percentage_1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        crop_2: {
            type: DataTypes.STRING,
            allowNull: false
        },
        percentage_2: {
            type: DataTypes.STRING,
            allowNull: false
        },

    });

    return Programme;

}