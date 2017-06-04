/**
 * Created by iminhyeok on 2017. 6. 3..
 */


var request = require('request');
var fs = require('fs');

var url = "http://jpub.tistory.com/";
var savepath = "test.html";

request(url).pipe(fs.createWriteStream(savepath));
