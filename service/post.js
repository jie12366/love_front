var rootDocment = 'http://127.0.0.1:66'; //你的域名

function post(url, data, cb) {
  wx.request({
    url: rootDocment + url,
    data: data,
    method: 'post',
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    success: function(res) {
      return typeof cb == "function" && cb(res.data)
    },
    fail: function() {
      return typeof cb == "function" && cb(false)
    }
  })
}

module.exports = {
  post: post
}