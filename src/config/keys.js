import fs from "fs";
import forge from "node-forge";
import setting from "./setting.js";

const { PUB_KEY_PATH } = setting;

// Public Key PEM
const pubKeyPem = fs.readFileSync(PUB_KEY_PATH, "utf8");

// Convert public key pem to forge pki
const publicKey = forge.pki.publicKeyFromPem(pubKeyPem);

// Export public key
export { publicKey };
