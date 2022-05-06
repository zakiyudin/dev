/**
 * @api {get} /api/user/ Get User
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "success": true,
 *   "data": {
 *     "name": "John Doe",
 *     "email": "johndoe@gmail.com",
 * }
 * 
 * @apiErrorExample {json} Error-Response:
 * HTTP/1.1 400 Bad Request
 * {
 *  "success": false,
 *  "message": "Please enter all fields"
 * }
 * 
 * 
 * @api {post} /api/user/register Register User
 * @apiName RegisterUser
 * @apiGroup User
 * 
 * @apiParam {String} name Name of the User
 * @apiParam {String} email Email of the User
 * @apiParam {String} password Password of the User
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 201 Created
 * {
 *  "success": true,
 * "data": {
 *  "name": "John Doe",
 *  "email": "johndoe@gmail.com",
 * }
 * 
 * @apiErrorExample {json} Error-Response:
 * HTTP/1.1 400 Bad Request
 * {
 *  "success": false,
 *  "message": "Please enter all fields"
 * }
 * 
 * @api {post} /api/user/login Login User
 * @apiName LoginUser
 * @apiGroup User
 * 
 * @apiParam {String} email Email of the User
 * @apiParam {String} password Password of the User
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 * "success": true,
 * "message": "Login Successful",
 * 
 */

