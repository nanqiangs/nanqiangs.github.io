function checkPassword() {
            const password = document.getElementById('passwordInput').value;

            // 在这里添加你的密码验证逻辑
            if (password === '123456') {
                document.getElementById('message').innerText = '密码正确，欢迎进入！';
            } else {
                document.getElementById('message').innerText = '密码错误，请重试。';
            }
        }