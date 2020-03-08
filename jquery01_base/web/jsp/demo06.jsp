<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>复选框</title>
		<script src="../js/jquery-1.11.0.js" type="text/javascript"></script>
		<script type="text/javascript">
			$(function() {
				// 方式一：
				var selectAll = $("#selectAll");
				selectAll.click(function() {
					// 为什么使用attr，获得的是undefined；使用prop，获得的是true
					// 使用表单元素选择器
					// $(":checkbox[name='select']").prop("checked",selectAll.prop("checked"));
					$(":checkbox[name='select']").prop("checked",this.checked);  // this代表的是获取的标签对象
				}); 
				
				// 方式二：简便方式
				/* $("#selectAll").click(function() {
					$(":checkbox[name='select']").prop("checked",this.checked);  // 不可以使用this
				}); */
			});
		</script>
	</head>
	<body>
		<table id="tb1" border="1" width="300">
			<tr>
				<th><input type="checkbox" id="selectAll" name="selectAll"></th>
				<th>分类</th>
				<th>名称</th>
				<th>描述</th>
				<th>操作</th>
			</tr>
			<tr>
				<td><input type="checkbox" name="select"></td>
				<td>分类1</td>
				<td>名称1</td>
				<td>描述1</td>
				<td>操作1</td>
			</tr>
			<tr>
				<td><input type="checkbox" name="select"></td>
				<td>分类2</td>
				<td>名称2</td>
				<td>描述2</td>
				<td>操作2</td>
			</tr>
			<tr>
				<td><input type="checkbox" name="select"></td>
				<td>分类3</td>
				<td>名称3</td>
				<td>描述3</td>
				<td>操作3</td>
			</tr>
			<tr>
				<td><input type="checkbox" name="select"></td>
				<td>分类4</td>
				<td>名称4</td>
				<td>描述4</td>
				<td>操作4</td>
			</tr>
			<tr>
				<td><input type="checkbox" name="select"></td>
				<td>分类5</td>
				<td>名称5</td>
				<td>描述5</td>
				<td>操作5</td>
			</tr>
		</table>
	</body>
</html>