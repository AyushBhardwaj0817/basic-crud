// import { DataTypes } from "sequelize";

// export const createUserModel = async (sequelize) => {

//     const User = sequelize.define('User', {

//         firstname: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },

//         lastname: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },

//         email: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             isLowercase: true,
//             unique: true
//         },

//         contactnumber: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },

//         role: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },

//         reportingto: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },

//         reportingtoname: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },

//     });

//     return User;

// }

import { DataTypes } from "sequelize";

export const createUserModel = async (sequelize) => {
    const User = sequelize.define('User', {
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            isLowercase: true,
            unique: true
        },
        contactnumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false
        },
        reportingto: {
            type: DataTypes.STRING,
            allowNull: false
        },
        reportingtoname: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return User;
};
