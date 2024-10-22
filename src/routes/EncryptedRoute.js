import { Router } from "express";
import { encrypted } from "../controllers/EncryptedController.js";

const router = Router();

/**
 * @swagger
 * /api/V1/encrypted:
 *   post:
 *     summary: Encrypt data
 *     description: Encrypts the provided data using a public key and returns the encrypted key and JWT.
 *     tags:
 *       - Encrypted data endpoint
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               data:
 *                 type: object
 *                 description: The data to be encrypted.
 *                 example:
 *                   {
 *                     "name": "Alexander Dev",
 *                     "email": "xander.dev@example.com"
 *                   }
 *     responses:
 *       200:
 *         description: Successfully encrypted the data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 jwt:
 *                   type: string
 *                   description: The encrypted JWT token.
 *                 encryptedKey:
 *                   type: string
 *                   description: The encrypted symmetric key used for encryption.
 *       500:
 *         description: Internal server error.
 */
router.post("/encrypted", encrypted);

export default router;
