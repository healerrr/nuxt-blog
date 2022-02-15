const qiniu = require('qiniu')
const ACCESS_KEY = 'EoikAR3-_uG_XXIuohdTKEWdpl8VGTdoXFgEKpK0';
const SECRET_KEY = 'Rm8ZpfZCn3lU9o8OymKI38oiVNWmvTo3vZnm-xYn';
const mac = new qiniu.auth.digest.Mac(ACCESS_KEY, SECRET_KEY);

const { Auth } = require('@middlewares/auth');
const AUTH_ADMIN = 16;

const { Resolve } = require('@lib/helper');
const res = new Resolve();

const Router = require('koa-router')

const router = new Router({
    prefix: '/api/v1'
})

// 创建回复
router.post('/upload/token', new Auth(AUTH_ADMIN).m, async (ctx) => {
    // console.log('mac', mac)
    const options = {
        scope: 'healerrr',
        expires: 7200
    };
    const putPolicy = new qiniu.rs.PutPolicy(options);
    ctx.response.status = 200;
    const data = {
        token: putPolicy.uploadToken(mac)
    }
    ctx.body = res.json(data)
})

module.exports = router

