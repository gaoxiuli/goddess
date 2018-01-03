var express = require('express');
var router = express.Router();
var https = require("https");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//http://m.msparis.com/js/pageIndex.json
router.get("/list",(req,res) => {
	console.log("111111111111")
	var option = {
//		hostname:"wap.fruitday.com",
//		port:"443",
//		path:"/v3/product/category_list?store_id_list=3&class_id="
//		hostname:"list.mogujie.com",
//		port:"443",
//		path:"/module/mget"
//		hostname:"list.mogujie.com",
//		port:"443",
//		path:"/module/mget?code=sketch%2ChotWord"

// 	hostname:"api.douban.com",
//  port:"443",
//  path:"/v2/movie/top250"
//https://m.msparis.com/js/pageIndex.json
	  hostname:"m.msparis.com",
    port:"443",
    path:"/js/pageIndex.json"

	}
	var reqData = https.request(option, (resData) => {
		var str = ""
		resData.on('data', (val) =>{
			str += val
		})
		resData.on('end', () =>{
			console.log("@222")
			res.send(str)
		})
		resData.on('error', (err) =>{
			console.log(err)
		})
	})
	reqData.on('error', (err) =>{
			console.log(err)
		})
	reqData.end();
})
module.exports = router;
