module.exports = [
    {
        id: 'fetch-access-token',
        url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET',
        method: 'get',
    }
]