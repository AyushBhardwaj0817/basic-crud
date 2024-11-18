import { AgencyModel } from "../postgres/postgres.js"



// Get All agency

export const getAllAgency = async (req, res) => {
    try {

        const agencies = await AgencyModel.findAll();
        if (agencies.length == 0) {
            return res.status(200).json({ "error": "Details not found" })
        }
        return res.status(200).json(agencies)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ "error": "internal error" })

    }
}


// Add Agency

export const addAgency = async (req, res) => {
    const { agent_name, agency_code,  pan_no, gst_no,  license_no, email_id, contact_person,  contact_no, office_address, state, city, operatingregions, agencystatus } = req.body;

    try {
        // Check if the email already exists in the database
        const checkMail = await AgencyModel.findOne({ where: { email_id: email_id } });

        if (checkMail === null) {
            // Create a new agency with the full set of data
            await AgencyModel.create({
                agent_name, 
                agency_code,  
                pan_no, 
                gst_no,  
                license_no, 
                email_id, 
                contact_person,  
                contact_no, 
                office_address, 
                state, 
                city, 
                operatingregions, 
                agencystatus
            });

            return res.status(201).json({ message: "Agency Added Successfully" });
        }

        return res.status(200).json({ message: "Agency already exists" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

// Update Agency

export const updateAgency = async (req, res) => {
    let id = req.params.id;


    try {

        const agency = await AgencyModel.update(req.body, { where: { id: id } });

        if (agency[0] === 0) {
            return res.status(404).json({ message: "Agency not found" });
        }

        return res.status(200).json({ message: "Updated successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};


// Delete Agent

export const deleteAgent = async (req, res) => {
    let id = req.params.id;

    try {
        const agent = await AgencyModel.findOne({ where: { id: id } });

        if (agent === null) {
            return res.status(404).json({ message: "Agent Not Found" });
        }
        await agent.destroy()

        return res.status(200).json({ message: "Deleted Successfully" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });

    }
}