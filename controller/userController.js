import { UserModel } from "../postgres/postgres.js"



// Get All Users

export const getAllUser = async (req, res) => {
    try {

        const users = await UserModel.findAll();
        if (users.length == 0) {
            return res.status(200).json({ "error": "user not found" })
        }
        return res.status(200).json(users)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ "error": "internal error" })

    }
}

// Add Users

export const addUser = async (req, res) => {
    const { firstname, lastname, email, contactnumber, role, reportingto, reportingtoname } = req.body;

    try {
        // Check if the email already exists in the database
        const checkMail = await UserModel.findOne({ where: { email: email } });

        if (checkMail === null) {
            // Create a new user with the full set of data
            await UserModel.create({
                firstname,
                lastname,
                email,
                contactnumber,
                role,
                reportingto,
                reportingtoname
            });

            return res.status(201).json({ message: "User Added Successfully" });
        }

        return res.status(200).json({ message: "User already exists" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};


// Update User

export const updateUser = async (req, res) => {
    let id = req.params.id;


    try {

        const user = await UserModel.update(req.body, { where: { id: id } });

        if (user[0] === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json({ message: "Updated successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

// Delete User

export const deleteUser = async (req, res) => {
    let id = req.params.id;

    try {
        const user = await UserModel.findOne({ where: { id: id } });

        if (user === null) {
            return res.status(404).json({ message: "User Not Found" });
        }
        await user.destroy()

        return res.status(200).json({ message: "Deleted Successfully" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });

    }
}





