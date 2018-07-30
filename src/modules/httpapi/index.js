'use strict';

(function() {
  var http = require('http')

  const HOST = 'bsm.ilinkin.com.cn'
  const PORT = '80'
  const SignKey = 'zhangjing'
  const SignSecret = '6dbedf8ed753e5cc100200d15f669bcf4fe31abaf49bab8e260b2e2d0d80e472'
  const Format = 'json'

  var getRequestUrl = (opts) => {
    var buf = new Buffer(JSON.stringify(Object.assign(opts, {
      SignKey: SignKey,
      SignSecret: SignSecret,
      Format: Format
    })));
    var host = 'bsm.ilinkin.com.cn'
    var port = 80
    return 'http://' + HOST + ':' + PORT + '/thirdpart/?query=' + buf.toString('base64');
  }

  var request = (opts, callback) => {

    var resData = '';
    http.get(getRequestUrl(opts), function(res) {
      res.on('data', function(chunk) {
        resData += chunk
      })
      res.on('end', function() {
        if (callback != undefined) {
          callback(JSON.parse(resData))
        }
      })
    })
  }

  module.exports = {
    querySite: (opts, callback) => {
      request(Object.assign({
        Action: 'QueryAllSite',
        Page: 0,
        PageSize: 10
      }, opts), callback)
    }
  };
})()
