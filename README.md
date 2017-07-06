#  iss通用gulp文件
说明：（对js、css、img进行压缩）
地址：[git@github.com:mazhenxiao/gulpFile.git](git@github.com:mazhenxiao/gulpFile.git)
---------------------
使用方法：
.*npm update minimatch*
.*npm install -g npm@3*
(需要minmimatch为3.0)
1.  安装**npm**、**node**、**gulp** 已安装可以忽略
2.  在本地执行 **npm install**  安装所需空间
3.  在命令行输入*gulp* 等待执行
*修改路径*（gulpfile.js文件config对象对应的变量为package中自定义对象，以龙湖为例子对应自定义对象为**“longfor”**，此对象可以自定义）

~~~javascript
	path = require('./package'), //配置路径，引入路径位置
/*	browserSync = require('browser-sync').create(),
	reload      = browserSync.reload,*/
	//在path中取路径
	config={
        dist:path.longfor.dist,
		_src_basemin:path.longfor._src_basemin,
		//_src_imagemin:path.WANDA._src_imgmin,
		_src_jsmin:path.longfor._src_jsmin,
		_src_js:path.longfor._src_js,
		_src_css:path.longfor._src_css,
		_src_cssmin:path.longfor._src_cssmin,
		_src_jstools:path.longfor._src_jstools,
		_src_font:path.longfor._src_font,
		_src_imgmin:path.longfor._src_imgmin,
		_src_imgsrc:path.longfor._src_imgsrc,
		_src_html:path.longfor._src_html
		//_src_imgmin:
	}
~~~
