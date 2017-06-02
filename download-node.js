/**
 * Created by iminhyeok on 2017. 6. 2..
 */
//다운로드 url 지정 및 저장 위치 지정
var url = "http://jpub.tistory.com"
var savepath = "test.html"

var http = require('http');
var fs = require('fs');

var outfile = fs.createWriteStream(savepath);

http.get(url, function (res) {
    res.pipe(outfile);
    res.on('end', function () {
        outfile.close()
        console.log("ok");
    });

});