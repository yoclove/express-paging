module.exports = function(db,req,limits,cb){
	var page = req.query.p; /*当前页数 默认1 第一页*/
	var limit = limits; /*显示多少条数据*/
    var skip = (page - 1) * limit; /*跳过前X条数据*/
    var count = 0; /*总记录数*/


    db.find({},null,{skip:skip,limit:limit,sort:{_id:-1}},function (err,data){
        if(err){
            console.log(err);
        }else{
           db.count({},function (err,count){
                if(err) console.log(err);
                count = Math.round(count / limit + 0.4);
                cb(function(){
                	return paging = {
	                    data: data,
	                    page: parseInt(page),
	                    count: count
	                }
                })
                
            });
        }
    })

}