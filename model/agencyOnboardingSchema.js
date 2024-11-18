import { DataTypes } from "sequelize";


export const createAgencyModel = async (sequelize) => {

    const Agency = sequelize.define('Agency', {

        agent_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        agency_code: {
            type: DataTypes.STRING,
            allowNull: false
        },

        pan_no: {
            type: DataTypes.STRING,
            allowNull: false,
            isLowercase: true,
            unique: true
        },

        gst_no: {
            type: DataTypes.STRING,
            allowNull: false
        },

        license_no: {
            type: DataTypes.STRING,
            allowNull: false
        },

        email_id: {
            type: DataTypes.STRING,
            allowNull: false
        },

        contact_person: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contact_no: {
            type: DataTypes.STRING,
            allowNull: false
        },
        office_address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        operatingregions: {
            type: DataTypes.STRING,
            allowNull: false
        },
        agencystatus: {
            type: DataTypes.STRING,
            allowNull: false
        },

    });

    return Agency;

}