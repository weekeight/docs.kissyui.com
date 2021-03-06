/**
@module filter-menu
*/

/**
可过滤菜单
@class FilterMenu
@constructor
@extends Menu
@param config {Object}
*/

/**
是否允许输入多个， 默认为false
@attribute allowMultiple {Boolean} 
@default false
*/

/**
placeholder 内容
@attribute placeholder {String} 
*/

/**
过滤的字符串
@attribute filterStr {String} 
*/

/**
根据所给字符串，过滤出响应的项

可以重写此方法，进行自定义，不自定义则是简单的内容 indexOf 查找
@method filterItems
@static
@param str {String} 需要过滤的字符串
*/

/**
重置用户的输入以及过滤结果
@method reset
@static
*/