var gulp = require('gulp');

var fs = require('fs'),
	util = require('./tools/util.js'),
	buildDocs = require('./tools/builddocs.js'),
	path = require('path'),
	process = require('child_process');

var config = {
	version : '5.0'
};

gulp.task('copyassets',function(){
	//拷贝src下的assets到build目录下
	util.exists('./src/assets','./build/assets',util.copy);
});

gulp.task('buildapi',function(){
	//生成api文档
	process.exec('yuidoc');
});

gulp.task('buildguide',function(){
	var srcPath = path.resolve('./src');
	//生成教程文档
	buildDocs.buildGuide(srcPath,config);
	//生成demos
	buildDocs.buildDemos(srcPath,config);
	//生成其他目录的文档
	buildDocs.buildOthers(srcPath,config);
});



gulp.task('default',['copyassets', 'buildapi', 'buildguide']);