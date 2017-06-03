/**
 * Created by iminhyeok on 2017. 6. 2..
 */

var client = require('cheerio-httpcli');
var url = 'http://jpub.tistory.com';
var param = {};

client.fetch(url, param, function (err, $, res) {
    if(err){console.log("Error:",err);return;}

    var body = $.html();
    console.log(body);
});