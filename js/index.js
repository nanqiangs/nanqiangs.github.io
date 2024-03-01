function checkPassword() {
            const password = document.getElementById('passwordInput').value;

            // 在这里添加你的密码验证逻辑
            if (password === '123456') {
                document.getElementById('message').innerText = '密码正确，欢迎进入！';
            } else {
                document.getElementById('message').innerText = '密码错误，请重试。';
            }
        }
//禁用右键（防止右键查看源代码） 
window.oncontextmenu = function () { return false; }
 //(防止F12和shift+ctrl+i调起开发者工具） 
document.onkeydown = function(e) {
    if (e.keyCode == 123 || event.ctrlKey || event.shiftKey) { // F12键的键码是123
        window.event.returnValue = false;
    }
};
 //如果用户在工具栏调起开发者工具，那么判断浏览器的可视高度和可视宽度是否有改变，如有改变则关闭本页面 
 var h = window.innerHeight, w = window.innerWidth;
 var s = h/w
window.onresize = function () {
 if (h != window.innerHeight || w != window.innerWidth) {
        window.close();
        window.location = "about:blank";
      }
    }
