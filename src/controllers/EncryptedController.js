import forge from "node-forge";
import { CompactEncrypt } from "jose";
import { publicKey } from "../config/keys.js";

export const encrypted = async (req, res) => {
  try {
    const data = req.body;

    const currentKey = forge.random.getBytesSync(32);

    const keyBase64 = forge.util.encode64(currentKey);

    // Encrypt the Key using PublicKey
    const encryptedKey = forge.util.encode64(publicKey.encrypt(keyBase64));

    const AesInt8 = Uint8Array.from(
      currentKey.split("").map((letter) => letter.charCodeAt(0))
    );

    // Encrypt the data using EncryptJWT
    const jwt = await new CompactEncrypt(
      new TextEncoder().encode(JSON.stringify(data))
    )
      .setProtectedHeader({ alg: "dir", enc: "A256GCM" })
      .encrypt(AesInt8);

    // Return the encrypted message
    return res.json({ jwt, encryptedKey });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
