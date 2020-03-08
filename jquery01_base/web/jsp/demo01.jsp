<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>jquery与js的简单对比 </title>
        <script src="../js/jquery-1.11.0.js" type="text/javascript"></script>
        <script type="text/javascript">
            // 使用原生js的方式完成页面加载
            window.onload = function () {
                alert("hello5");
            }


            // 使用jquery的方式完成页面加载
            // 使用jquery方式1
            $(document).ready(function () {
                alert("hello1");
            });
            $(document).ready(function () {
                alert("hello2");
            });

            // 使用jquery方式二
            $(function () {
                alert("hello3");
            });
            $(function () {
                alert("hello4");
            });
        </script>
    </head>
    <body>

    </body>
</html>