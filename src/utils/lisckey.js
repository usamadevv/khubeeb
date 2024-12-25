const crypto = require('crypto');

// Secret key (you can replace this with your securely generated secret key)
const secretKey = "f6f83d91b905e4f25d58f7b6fbb4b9f8e3f34516c7d8a33f4a1adfe442cd8edb9e59fe717f64f575160cc0f85b09c84b";

// Function to generate a license key based on the machine ID
function generateLicenseKey(machineId) {
  // Validate the machineId input
  if (!machineId || typeof machineId !== 'string') {
    throw new Error('Invalid machineId provided.');
  }

  // Create the HMAC with SHA-256 using the secret key and the machine ID
  const hash = crypto.createHmac('sha256', secretKey)
    .update(machineId)  // Append machineId (and other details if needed)
    .digest('hex');     // Get the hash as a hexadecimal string

  console.log('Generated License Key:', hash);
  return hash;
}

// Export the function using CommonJS
module.exports = generateLicenseKey;
