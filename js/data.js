var transform = {'tag':'li','html':'${link}'};  
  
var data = [  
    {'link':'<a href="/post/9.html" target="_blank">因为喜欢你</a>'},
    {'link':'<a href="/post/6.html" target="_blank">对不起,给不了你想要的幸福！</a>'}, 
];  
  
document.getElementById('jl').innerHTML = json2html.transform(data,transform);  

var transform = {'tag':'li','html':'${link}'};  
  
var data = [  
    {'link':'<a href="/post/10.html" target="_blank">CSS控制文字只显示一行,超出部分显示省略号</a>'},
    {'link':'<a href="/post/7.html" target="_blank">javascript实现文章列表li 分页</a>'},  
    {'link':'<a href="/post/1.html" target="_blank">如何让markdown编辑器代码高亮</a>'},  
];  
  
document.getElementById('js').innerHTML = json2html.transform(data,transform);  

var transform = {'tag':'li','html':'${link}'};  
  
var data = [  
    {'link':'<a href="/post/5.html" target="_blank">纯JS版本伪春菜</a>'},
    {'link':'<a href="/post/4.html" target="_blank">Nginx永久301跳转https写法</a>'},  
    {'link':'<a href="/post/3.html" target="_blank">JavaScript实现强制重定向至HTTPS页面</a>'}, 
    {'link':'<a href="/post/2.html" target="_blank">替换原版MiniCMS订阅RSS代码</a>'},  	
];  
  
document.getElementById('wz').innerHTML = json2html.transform(data,transform);  

var transform = {'tag':'li','html':'${link}'};  
  
var data = [  
	{'link':'<a href="/post/11.html" target="_blank">Typecho 自定义分页样式</a>'},
    {'link':'<a href="/post/8.html" target="_blank">Typecho评论框代码/CSS</a>'}, 
];  
  
document.getElementById('ty').innerHTML = json2html.transform(data,transform);  