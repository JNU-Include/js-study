/**
 * Created by iminhyeok on 2017. 6. 5..
 */

var RSS = "http://web.kma.go.kr/weather/forecast/mid-term-rss3.jsp?stnId=109";

var parseString = require('xml2js').parseString;
var request = require('request');

//RSS 다운로드
request(RSS, function(err, response, body){
	if(!err && response.statusCode == 200){
	analyzeRSS(body);
	}
});

function analyzeRSS(xml){
	//XML을 JS 오브젝트로 변환
	parseString(xml, function(err, obj){
	if(err){ console.log(err); return;}
	//기상 예보 출력
	//console.log(JSON.stringify(obj));
	var datas = obj.rss.channel[0].item[0].description[0].body[0].location[0].data;
	var city = obj.rss.channel[0].item[0].description[0].body[0].location[0].city;

	for(var i in datas){
		var data = datas[i];
		console.log(city + "" + data.tmEf + "" + data.wf + "" + data.tmn + "~" + data.tmx);
		}
	});
}
