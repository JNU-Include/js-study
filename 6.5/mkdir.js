/**
 * Created by iminhyeok on 2017. 6. 5..
 */

var fs = require('fs');

console.log("mkdir 실행");
fs.mkdir("test", function () {
    console.log("폴더 생성 완료")
});
console.log("mkdir 실행 완료 결과 대기");
