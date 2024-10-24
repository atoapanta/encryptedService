import fs from "fs";
import forge from "node-forge";
import setting from "./setting.js";

// const { PUB_KEY_PATH } = setting;

// Public Key PEM
// const pubKeyPem = fs.readFileSync(PUB_KEY_PATH, "utf8");

const pubKeyPem = `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAzD5D/etU9nOSKRrpD5AH
lfbuLKGU3uRi18RMq20xLG3YMNzrmJxyvX2FcHr5CmpWbe9OQmJRGOeW3buFLdl+
ww1a8VUPEtGYLlM0gQ7n926oj4qM4Kyq8BB15Ae07lV7zn31fS5HcWRm6e8IdDnE
MKB7EEaLgrJG0FRRpX5rqgGGe8lIwcFvKF75Xdaml0rfTmq14Ic0eU27hmSo+p9f
13Mp+WdVAvCytLW2beGDusfv0GjfSc5HdIwBB2z2IjQa5NZ0u7y0boCiXt2tSodN
IYWqg7Zl/begqak5hGhk5HfJReFR88lrdJDfb9ELrSzV7U091S8skDbOHTXAduSC
uDU7a1Pwhs5mSHshJo0sG/88RtrrbN1hK5Q3GkWBl3I99k4WYiPSaqBzzdHWPuDY
qKUQvotYjdA81xPPgPVmr3EC5asxumhSPfRvl2O2E6NRs06iQJIvdJuMCt9hWMoc
131wDEMzgkvGJtuL1Z/niMhB2PRQVhNaEvTvgGbrLD27o4jza55zHXbdHpiCLL/0
u8TO0UISjq3ABVeHlV14zgcOVJeJmmV7NMb1L+IlQkf/ijNtB4FaRykU8ycg/bZD
yqOcRhIGHaq8hH9lvOLDwdR4eMc2U3Ol/6KihQvH8RB1ab/NRtOExcIKc+2yloGG
V/NAE65i1jyugALOj6KI8HUCAwEAAQ==
-----END PUBLIC KEY-----`;

// Convert public key pem to forge pki
const publicKey = forge.pki.publicKeyFromPem(pubKeyPem);

// Export public key
export { publicKey };
