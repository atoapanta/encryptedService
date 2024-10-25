import fs from "fs";
import path from "path";
import forge from "node-forge";
import setting from "./setting.js";

const { PUB_KEY_PATH } = setting;

const keyPath = path.resolve(PUB_KEY_PATH);

// Public Key PEM
const pubKeyPem = fs.readFileSync(keyPath, "utf8");

// Convert public key pem to forge pki
const publicKey = forge.pki.publicKeyFromPem(pubKeyPem);

// Export public key
export { publicKey };
