import { DataTypes } from "sequelize";


export const createCustomerModel = async (sequelize) => {

    const Customer = sequelize.define('Customer', {

        agentname: {
            type: DataTypes.STRING,
            allowNull: false
        },

        agencycode: {
            type: DataTypes.STRING,
            allowNull: false
        },

        pannumber: {
            type: DataTypes.STRING,
            allowNull: false,
            isLowercase: true,
            unique: true
        },

        gstnumber: {
            type: DataTypes.STRING,
            allowNull: false
        },

        licensenumber: {
            type: DataTypes.STRING,
            allowNull: false
        },

        emailid: {
            type: DataTypes.STRING,
            allowNull: false
        },

        contactperson: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contactnumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        officeaddress: {
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

    return Customer;

}