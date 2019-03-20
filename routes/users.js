var express = require('express');
var router = express.Router();

const Ut = require('../common/utils');  

let appId = 'wxbd568c09346d6b81', secret = '3f5068503829fdec17d70bcdd1baf1c4'
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/cryptdata', async (req, res) => {
  let WXBizDataCrypt = require('../common/WXBizDataCrypt')
  const sha1 = require("sha1");
  try {
    let { encryptedData, iv, js_code, rawData, signature } = req.body;
    // 获取session_key
    let opts = {
      url: `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${secret}&js_code=${js_code}&grant_type=authorization_code`
    }
    let r1 = await Ut.promiseReq(opts);
    let { session_key } = JSON.parse(r1);
    console.log(r1)
    if (!session_key) return res.json('');
    // 数据签名校验
    let signature2 = sha1(rawData + session_key);
    if (signature != signature2) return res.json("数据签名校验失败");
    // 解密
    let pc = new WXBizDataCrypt(appId, session_key)
 
    let data = pc.decryptData(encryptedData, iv)
 
    console.log('解密后 data: ', data)
    res.json(data);
  }
  catch (e) {
    console.log(e);
    res.json('');
  }
})

module.exports = router;
