var request=require('request');
request('http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=FnlWGNbBkZ4a9jXtznZEvKltroenqU8CYfI9w9t8GUFNvDVGZHBJsKNr%2BMdpk%2BYR%2FKwjGVLSTCJrja2VP2uVsA%3D%3D&pageNo=1&numOfRows=10&startCreateDt=20200310&endCreateDt=20200315&',function(error, response, body){
if(!error&&response.statusCode==200)
  console.log(body);
});