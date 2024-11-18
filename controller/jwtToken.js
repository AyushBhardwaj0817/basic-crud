
import jwt from 'jsonwebtoken';

// Get Token
export const getToken = async (req, res, next) => {

    const { secret_key } = req.body;

    const expectedSecretKey = process.env.SECRET_KEY
    
    //process.env.SECRET_KEY;

//    return res.send(secret_key);

    if (secret_key !== expectedSecretKey) {
        return res.status(401).json({
            message: "Secret key is not correct"
        });
    }

    try {
        const token = jwt.sign(
            { userId: secret_key },
            
            process.env.SECRET_KEY,
            { expiresIn: "20m" }
        );

        return res.status(200).json({ token });
    } catch (err) {
        console.log(err);
        const error = new Error("Error! Something went wrong.");
        return next(error);
    }
};
