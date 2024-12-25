const jwt = require('jsonwebtoken');
const secretKey = "f6f83d91b905e4f25d58f7b6fbb4b9f8e3f34516c7d8a33f4a1adfe442cd8edb9e59fe717f64f575160cc0f85b09c84b";
// Function to generate a license key based on the machine ID
function generateToken(lkey) {
    // Validate the machineId input
    const payload = {
        licenseKey: lkey, // License key// Private key (could be encrypted or encoded for security)
        exp: Math.floor(Date.now() / 1000) + (60 * 60*24*30*12) // Expiration set for 1 hour from now
    };

    // Create the JWT token
    const token = jwt.sign(payload, secretKey);

    console.log("Generated JWT Token:", token);
    return token;
}

function verifyToken(token){

   const decoded2= jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
          console.log('Token verification failed:', err);

return 'invalid'

} else {
          console.log('Decoded token:', decoded);
       return decoded
        }
      });
 return decoded2
}


// Export the function using CommonJS
module.exports = {generateToken,verifyToken};




