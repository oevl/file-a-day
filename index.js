var moment = require('moment-timezone');
var today = moment.utc(Date.now()).tz("America/Panama").format("YYYY-MM-DD");
var file_a_day = today +".txt"
var http = require("http");
http.createServer(function(request, response) {
	  response.setHeader('Content-disposition', 'attachment; filename='+file_a_day);
	  response.setHeader('Content-type', 'text/plain');
	  response.writeHead(200, {"Content-Type": "text/plain"});
	  response.charset = 'UTF-8';
	  response.write(today+"\n"+"---"+"\n");
	  response.end();
}).listen(8888);
