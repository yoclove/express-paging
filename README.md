# express-paging
nodejs express分页封装

##使用
```js
	paging(mongodbmodel,req,显示数量,cb)
	//实例
	paging(db,req,3,function(data){
            res.render('index',{data : data().data, page : parseInt(data().page), count : data().count});
        });
    /*
		data:数据
		page:当前页
		count:总页码
    */
```

##html
```
	<% if(page > 1){ %>
		<a href="/?p=<%- page - 1 %>" class="btn btn-info">上一页</a>
	<% } %>
	<% if(!page) { page = 1}%>
	<% if(page <= count - 1) {%>
		<a href="/?p=<%- page + 1 %>" class="btn btn-info">下一页</a>
	<% }%>
	<span class="label label-danger">当前：<%- page %> 总页数：<%- count%></span>
```