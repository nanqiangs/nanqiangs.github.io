//禁用右键（防止右键查看源代码） 
// window.oncontextmenu = function () { return false; }
//  //(防止F12和shift+ctrl+i调起开发者工具） 
// document.onkeydown = function(e) {
//     if (e.keyCode == 123 || event.ctrlKey || event.shiftKey) { // F12键的键码是123
//         window.event.returnValue = false;
//     }
// };
//  //如果用户在工具栏调起开发者工具，那么判断浏览器的可视高度和可视宽度是否有改变，如有改变则关闭本页面 
//  var h = window.innerHeight, w = window.innerWidth;
//  var s = h/w
// window.onresize = function () {
//  if (h != window.innerHeight || w != window.innerWidth) {
//         window.close();
//         window.location = "about:blank";
//       }
//     }
