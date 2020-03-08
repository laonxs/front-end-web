<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>jquery对象和Dom对象的转换</title>
        <script src="../js/jquery-1.11.0.js" type="text/javascript"></script>
        <script type="text/javascript">
            // 使用js的方式
            function show() {
                var username = document.getElementById("username");
                // alert(username.value);

                // 将dom对象转成jquery对象
                var $username = $(username);
                // alert($username.val());

                // 将jquery对象转成js对象
                var username1 = $username[0];
                alert(username1.value);
            }
        </script>
    </head>
    <body>
        <input type="text" id="username" name="username" value="uname">
        <input type="button" value="按钮" onclick="show()">
    </body>
</html>