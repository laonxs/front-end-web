<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>定时显示和隐藏广告</title>
        <script src="../js/jquery-1.11.0.js" type="text/javascript"></script>
        <script type="text/javascript">
            // 定义全局变量
            var time;

            $(function () {
                // 方式一：直接展示
                // $("#s1").show();
                // 方式二	：按不同速度展示
                // $("#s1").show("fast");		// fast、slow、normal
                // 方式三：按指定时间展示出来
                // $("#s1").show(5000);		// 单位:毫秒
                // 方式四：显示完成后，执行函数
                // $("#s1").show(毫秒值，function() {});

                // 展示：show slideDown(向下滑动) fadeIn(淡入)
                // 隐藏：hide slideUp(向上滑动)	fadeOut(淡出)
                // time = setInterval("showAds()", 2000);
            });

            // 显示广告页面
//                        function showAds() {
//                            $("#s1").show(5000);
//                            clearInterval(time);
//                            time = setInterval("hideAds()", 8000);		// 页面的真实消失是在页面展示完全后的三秒钟开始执行
//                        }

            // 隐藏广告页面
            //            function hideAds() {
            //                $("#s1").hide(5000);
            //                clearInterval(time);
            //            }
        </script>
    </head>
    <body>
        <img id="s1" src="../img/01.jpg" width="800px" height="500px" style="display: none">
    </body>
</html>