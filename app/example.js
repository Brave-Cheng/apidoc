/**
 * @api {post}  auth  1.用户认证Token
 * @apiVersion 0.1.0
 * @apiName auth
 * @apiGroup ALL
 * @apiPermission none
 *
 * @apiSampleRequest auth
 *
 * @apiDescription 访问接口需要提供指定的账号与密码，用于验证使用者身份信息。
 *
 * @apiExample Example usage:
 *     endpoint: http://api.wuliu.dev.weipei.cc
 *
 *     body:
 *     {
 *       "phone": "18615788190",
 *       "password": "admin"
 *     }
 *
 * @apiDescription 用户输入账号登陆.
 * Define 用户需要修改现有的手机号码,需要提交新的手机号码到服务器.
 *
 * @apiParam (Request Body Fields) {Integer} phone 司机手机号码.
 * @apiParam (Request Body Fields) {String} password 司机账号密码.
 *
 * @apiSuccess {String}   token 身份令牌.
 *
 *
 */
function auth() { return; }

/**
 * @api {post} refresh-token 2. 用户刷新Token
 * @apiVersion 0.1.0
 * @apiName refresh-token
 * @apiGroup ALL
 * @apiPermission none
 *
 * @apiSampleRequest refresh-token
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Bearer {token}"
 *       "eg"："@apiHeader (Request Header Fields) {String} [Authorization="Bearer de6821a970634cb19619b1023ebdfb82b1ae2f05"]   Authorization."
 *     }
 *
 *
 *
 * @apiDescription 用户输入账号登陆.
 * Define 用户需要修改现有的手机号码,需要提交新的手机号码到服务器.
 *
 * @apiParam (Request Body Fields) {String} account account.
 * @apiParam (Request Body Fields) {String} password password.
 *
 * @apiSuccess {String} account_id  用户ID.
 *
 */
function refreshtoken() { return; }

/**
 * @api {get}  users/{id}  3. 账户基础信息
 * @apiVersion 0.1.0
 * @apiName users/{id}
 * @apiGroup ALL
 * @apiPermission none
 *
 * @apiSampleRequest auth
 *
 * @apiDescription 访问接口需要提供指定的账号与密码，用于验证使用者身份信息。
 *
 * @apiExample Example usage:
 *     endpoint: http://api.wuliu.dev.weipei.cc
 *
 *     body:
 *     {
 *       "phone": "18615788190",
 *       "password": "admin"
 *     }
 *
 * @apiDescription 用户输入账号登陆.
 * Define 用户需要修改现有的手机号码,需要提交新的手机号码到服务器.
 *
 * @apiParam (Request Body Fields) {Integer} phone 司机手机号码.
 * @apiParam (Request Body Fields) {String} password 司机账号密码.
 *
 * @apiSuccess {String}   token 身份令牌.
 *
 *
 */
function auth() { return; }
