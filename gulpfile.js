var gulp = require("gulp"),
	rename = require("gulp-rename"),
//	sass = require("gulp-ruby-sass"),
	less = require("gulp-less"),
//	autoprefixer=require("gulp-autoprefixer"),
	minifycss=require('gulp-minify-css'),
	//jshint=require("gulp-jshint"),
	uglify=require("gulp-uglify"),
	imagemin = require("gulp-imagemin"),
	concat = require("gulp-concat"),
	//livereload = require("gulp-livereload"),
	clean = require("gulp-clean"),
	cache = require("gulp-cache"),
	notify = require("gulp-notify"),
	plumber = require('gulp-plumber'),
	htmlmin = require('gulp-htmlmin'),
	path = require('./package'), //配置路径

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
    
    //css处理
    gulp.task("cssmin",function(){
		//console.log(typeof config._src_cssmin)


    	return gulp.src(config._src_cssmin)
    				//.pipe(plumber())
    				//.pipe(less())
    				//.pipe(plumber())
    				//.pipe(Clean())
                    .pipe(concat("default.css"))
                    .pipe(gulp.dest(config._src_css))
                    .pipe(minifycss())
                    .pipe(rename(function(path){ console.log(path); path.basename+="-min"}))
                    .pipe(gulp.dest(config._src_css))
                    .pipe(notify({message:"css处理完成"}))
    })
	//图片压缩
	gulp.task("imagemin",function(){
		
	return gulp.src(config._src_imgmin)
				//.pipe(plumber())
			   //.pipe(Clean())
			   	 .pipe(cache(imagemin()))  //只有新图片会被压缩
			 //   .pipe(imagemin())
			   //.pipe(plumber())
			   //.pipe(cache(imagemin()))  //只有新图片会被压缩
			  // .pipe(rename(function(path){ console.log(path.basename) ;path.basename}))
			   .pipe(gulp.dest(config._src_imgsrc))
			   .pipe(notify({message:"图片处理完成"}))
	})
	//js压缩
	gulp.task("jsmin",function(){

	return gulp.src(config._src_jsmin)
				//.pipe(Clean())
				//.pipe(plumber())
				// .pipe(cache(uglify({"mangle":true})))
			    .pipe(uglify({"mangle":true}))
				//.pipe(rename(function(path){ console.log(path.basename);path.basename}))
			    .pipe(gulp.dest(config._src_js))
			   // .pipe(concat("all"+path.version+"-min.js"))  //合并
			   // .pipe(gulp.dest(config._src_js))
			    //.pipe(gulp.dest(config._src_basemin+config._src_min_js))
			  // .pipe(rename(function(path){ console.log(path.basename);path.basename+=".min" }))
			   .pipe(notify({message:"js处理完成"}))
	})
	gulp.task("copy",function(){
		return gulp.src([config._src_basemin+"**/*","!"+config._src_basemin+"module/**/*"])
				   .pipe(gulp.dest(config.dist))
				   .pipe(notify({message:"copy完成！"}))
	})
	//清除任务
	gulp.task("Clean",function(){
		return gulp.src(["D:/test/test/img/*","D:/test/test/js/*.js"])
					.pipe(clean())
					
	})
    //htmlmin

		gulp.task('minify', function() {
			return gulp.src('D:/cfldcn_shenji/BaseCode/CFLD.Audit.Web/Views/M_ExcelTemplate/RectResultExamine.cshtml')
				.pipe(htmlmin({collapseWhitespace: true}))
				.pipe(gulp.dest('D:/HXWeb/dist'));
		});
		//browser-sync
	// 静态服务器
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: config._src_basemin
        }
    });
    
});
	//监视
	gulp.task("watch",function(){
		gulp.watch(config._src_imgmin,['imagemin']);
		gulp.watch(config._src_jsmin,['jsmin']);
		gulp.watch(config._src_cssmin,['cssmin']);
		// gulp.watch([config._src_basemin+"*.html",config._src_basemin+"css/*.less",config._src_basemin+"js/*.js"]).on('change', reload);

		//gulp.watch([config._src_basemin+"*.html",config._src_basemin+"*/*.less",config._src_basemin+"*/*.js"],['browserSync'])
		//gulp.watch(config._src_cssmin+"less/*.less",["cssmin"])
		//console.log(path);
	})

	//默认执行
	//gulp.task("default",["jsmin"])
	//gulp.task("default",["browserSync","watch"])
    // gulp.task("default",["cssmin","jsmin","imagemin","watch"]);
//gulp.task("default",["minify"]);
gulp.task("default",["jsmin","imagemin","copy"]);