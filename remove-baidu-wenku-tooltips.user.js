// ==UserScript==
// @name        移除百度文库在选中文字后弹出的提示框
// @description 百度文库中在页面上选中一段文字之后会自动弹出一个提示框，相当的烦人。本脚本就是用于移除这个提示框的。
//
// @namespace   wwwlsmcom@outlook.com
// @author      Liu233w
//
// @include     http://wenku.baidu.com/view/*
// @include     https://wenku.baidu.com/view/*
// @version     1.1
// @grant       none
//
// @updateURL   https://raw.githubusercontent.com/Liu233w/remove-baidu-wenku-tooltips.user.js/master/remove-baidu-wenku-tooltips.user.js
//
// ==/UserScript==

window.onload = function () {
  var helper = document.getElementById('reader-helper-el');
  helper.innerHTML = '';
};
