import forge from "node-forge";
import setting from "./setting.js";

const { PUBLIC_KEY } = setting;

// Convert public key pem to forge pki
const publicKey = forge.pki.publicKeyFromPem(PUBLIC_KEY);

// Export public key
export { publicKey };
