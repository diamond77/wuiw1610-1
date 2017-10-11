var render=function (tpl,data) {
    return tpl.replace(/\{\{(\w+)\}\}/g,function () {    //正则//g全局    替换所有
        // console.log(arguments);
        return data[arguments[1]];
    })
}

var content="<div><h2>{{title}}</h2><p>{{description}}</p></p></div>";

// 一条数据
// var data={
//     title:'模版引擎',
//     description:'模板引擎（这里特指用于Web开发的模板引擎）是为了使用户界面与业务数据（内容）分离而产生的，它可以生成特定格式的文档，用于网站的模板引擎就会生成一个标准的HTML文档。'
// }
// console.log(render(content,data))    //一条数据

// 多条数据
var data=[{
    title:'模版引擎',
    description:'模板引擎（这里特指用于Web开发的模板引擎）是为了使用户界面与业务数据（内容）分离而产生的，它可以生成特定格式的文档，用于网站的模板引擎就会生成一个标准的HTML文档。'
},{
    title:'原理',
    description:'模板引擎的实现方式有很多，最简单的是“置换型”模板引擎，这类模板引擎只是将指定模板内容（字符串）中的特定标记（子字符串）替换一下便生成了最终需要的业务数据（比如网页）。'
},{
    title:'用途',
    description:'模板引擎可以让（网站）程序实现界面与数据分离，业务代码与逻辑代码的分离，这就大大提升了开发效率，良好的设计也使得代码重用变得更加容易。'
}]

data.forEach(function (v){        //多条数据 需遍历
    console.log(render(content,v))
})


