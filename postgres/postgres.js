import { Sequelize } from "sequelize";
import { createUserModel } from "../model/userSchema.js";
import { createCustomerModel } from "../model/customerSchema.js";
import { createProgrammeModel } from "../model/programmeSchema.js";
import { createAgencyModel } from "../model/agencyOnboardingSchema.js";
import { createWorkModel } from "../model/workAllocationSchema.js";

const sequelize = new Sequelize('AgronomIQ', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres'
});

let UserModel=null;
let CustomerModel=null;
let ProgrammeModel=null;
let AgencyModel=null;
let WorkModel=null;


const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        UserModel=await createUserModel(sequelize)
        CustomerModel=await createCustomerModel(sequelize)
        ProgrammeModel=await createProgrammeModel(sequelize)
        AgencyModel=await createAgencyModel(sequelize)
        WorkModel=await createWorkModel(sequelize)
        await sequelize.sync();
        console.log("Database Created")
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export { 
    connection ,
    UserModel,
    CustomerModel,
    ProgrammeModel,
    AgencyModel,
    WorkModel

}

