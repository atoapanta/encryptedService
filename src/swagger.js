/**
 * @swagger
 * components:
 *   schemas:
 *     Message:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: "API On"
 */

/**
 * @swagger
 * /message:
 *   get:
 *     summary: Obtiene un mensaje.
 *     responses:
 *       200:
 *         description: Mensaje obtenido exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Message'
 */
