import { ProgrammeModel } from "../postgres/postgres.js"



// Get All Programmes

export const getAllProgramme = async (req, res) => {
    try {

        const programmes = await ProgrammeModel.findAll();
        if (programmes.length == 0) {
            return res.status(200).json({ "error": "programme not found" })
        }
        return res.status(200).json(programmes)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ "error": "internal error" })

    }
}


// Add Programme

export const addProgramme = async (req, res) => {
    const { programme_code,programme_name,organization_name,start_date,end_date,duration,region,state,districts,seasons,total_points,type,crop_1 ,percentage_1 ,crop_2,percentage_2 } = req.body;

    try {
        // Check if the programme_code already exists in the database
        const checkCode = await ProgrammeModel.findOne({ where: { programme_code: programme_code } });

        if (checkCode === null) {
            // Create a new user with the full set of data
            await ProgrammeModel.create({
                programme_code,  
                programme_name,  
                organization_name, 
                start_date, 
                end_date,  
                duration,  
                region ,
                state, 
                districts ,
                seasons, 
                total_points,  
                type,  
                crop_1 ,  
                percentage_1 , 
                crop_2,    
                percentage_2
            });

            return res.status(201).json({ message: "Programme Added Successfully" });
        }

        return res.status(200).json({ message: "Programme already exists" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};


// Update Programme

export const updateProgramme = async (req, res) => {
    let id = req.params.id;


    try {

        const programme = await ProgrammeModel.update(req.body, { where: { id: id } });

        if (programme[0] === 0) {
            return res.status(404).json({ message: "Programme not found" });
        }

        return res.status(200).json({ message: "Updated successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};


// Delete Programme

export const deleteProgramme = async (req, res) => {
    let id = req.params.id;

    try {
        const programme = await ProgrammeModel.findOne({ where: { id: id } });

        if (programme === null) {
            return res.status(404).json({ message: "Programme Not Found" });
        }
        await programme.destroy()

        return res.status(200).json({ message: "Deleted Successfully" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });

    }
}
