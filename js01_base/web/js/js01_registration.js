// 校验表单提交
function check() {
    // 对用户名是否为空进行校验
    var username = document.getElementById("username").value;
    if (username == "") {
        document.getElementById("spanUsername").innerHTML = "用户名不能为空";
        return false;
    }

    // 校验邮箱格式，使用test方式获得是boolean值，使用match方式获得是数组
    // 在HTML5中会自动校验邮箱格式
    var email = document.getElementById("Email").value;
    if (!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(email)) {
        document.getElementById("spanemail").innerHTML = "邮箱格式不正确";
        return false;
    }
}
