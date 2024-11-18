import { CustomerModel } from "../postgres/postgres.js"



// Get All Customers

export const getAllCustomer = async (req, res) => {
    try {

        const customers = await CustomerModel.findAll();
        if (customers.length == 0) {
            return res.status(200).json({ "error": "customer not found" })
        }
        return res.status(200).json(customers)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ "error": "internal error" })

    }
}


// Add Customers

export const addCustomer = async (req, res) => {
    const { agentname, agencycode,  pannumber, gstnumber,  licensenumber, emailid, contactperson,  contactnumber, officeaddress, state, city, operatingregions, agencystatus } = req.body;

    try {
        // Check if the email already exists in the database
        const checkMail = await CustomerModel.findOne({ where: { emailid: emailid } });

        if (checkMail === null) {
            // Create a new customer with the full set of data
            await CustomerModel.create({
                agentname, 
                agencycode,  
                pannumber, 
                gstnumber,  
                licensenumber, 
                emailid, 
                contactperson,  
                contactnumber, 
                officeaddress, 
                state, 
                city, 
                operatingregions, 
                agencystatus
            });

            return res.status(201).json({ message: "Customer Added Successfully" });
        }

        return res.status(200).json({ message: "Customer already exists" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

// Update Customer

export const updateCustomer = async (req, res) => {
    let id = req.params.id;


    try {

        const customer = await CustomerModel.update(req.body, { where: { id: id } });

        if (customer[0] === 0) {
            return res.status(404).json({ message: "Customer not found" });
        }

        return res.status(200).json({ message: "Updated successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

// Delete Customer

export const deleteCustomer = async (req, res) => {
    let id = req.params.id;

    try {
        const customer = await CustomerModel.findOne({ where: { id: id } });

        if (customer === null) {
            return res.status(404).json({ message: "Customer Not Found" });
        }
        await customer.destroy()

        return res.status(200).json({ message: "Deleted Successfully" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });

    }
}


