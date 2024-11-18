import { WorkModel } from "../postgres/postgres.js"



// Get All agency

export const getAllWork = async (req, res) => {
    try {

        const works = await WorkModel.findAll();
        if (works.length == 0) {
            return res.status(200).json({ "error": "Details not found" })
        }
        return res.status(200).json(works)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ "error": "internal error" })

    }
}


// Add Work

export const addWork = async (req, res) => {
    const { programme_name, select_states, select_districts, agency_name, start_date, end_date, type   } = req.body;

    try {
        // Check if the agency name allready exists in the database
        const checkAgency = await WorkModel.findOne({ where: { agency_name: agency_name } });

        if (checkAgency === null) {
            // Create a new work with the full set of data
            await WorkModel.create({
                programme_name,
                select_states,
                select_districts,
                agency_name,
                start_date,        
                end_date,
                type 
            });

            return res.status(201).json({ message: "Work Added Successfully" });
        }

        return res.status(200).json({ message: "Work already exists" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

// Update Work

export const updateWork = async (req, res) => {
    let id = req.params.id;


    try {

        const work = await WorkModel.update(req.body, { where: { id: id } });

        if (work[0] === 0) {
            return res.status(404).json({ message: "Work not found" });
        }

        return res.status(200).json({ message: "Updated successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};


// Delete Work

export const deleteWork = async (req, res) => {
    let id = req.params.id;

    try {
        const work = await WorkModel.findOne({ where: { id: id } });

        if (work === null) {
            return res.status(404).json({ message: "Work Not Found" });
        }
        await work.destroy()

        return res.status(200).json({ message: "Deleted Successfully" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });

    }
}
