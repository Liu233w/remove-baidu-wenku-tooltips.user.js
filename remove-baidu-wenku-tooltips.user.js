// ==UserScript==
// @name        移除百度文库在选中文字后弹出的提示框
// @namespace   wwwlsmcom@outlook.com
// @include     http://wenku.baidu.com/view/*
// @version     1
// @grant       none
// @description 百度文库中在页面上选中一段文字之后会自动弹出一个提示框，相当的烦人。本脚本就是用于移除这个提示框的。
// ==/UserScript==

window.onload = function () {
  var helper = document.getElementById('reader-helper-el');
  helper.innerHTML = '';
};
