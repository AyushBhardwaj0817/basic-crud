import jwt from 'jsonwebtoken';



export const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const SECRET_KEY = process.env.SECRET_KEY;
    if (authHeader) {
        const token = authHeader.split(' ')[1];  // Extract the token after "Bearer"
        //return res.send(token);
        jwt.verify(token, SECRET_KEY, (err, user) => {
            if (err) {
                return res.status(403).json({ message: "Invalid or expired token" });
            }


            req.user = user;  // Attach the user info to the request
            next();  // Pass control to the next handler
        });
    } else {
        res.status(401).json({ message: "Authorization token missing" });
    }
};
