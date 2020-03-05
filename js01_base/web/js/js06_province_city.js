// 自定义的对象
function Forms(province, city) {
	this.province = province;
	this.city = city;
}

// 定义存储省份和城市信息的数组
var arr = new Array();
arr[0] = new Forms("请选择省份名", "请选择城市名");
arr[1] = new Forms("北京", "东城|西城|崇文|宣武|朝阳|丰台|石景山|海淀|门头沟|房山|通州|顺义|昌平|大兴|平谷|怀柔|密云|延庆");
arr[2] = new Forms("上海", "黄浦|卢湾|徐汇|长宁|静安|普陀|闸北|虹口|杨浦|闵行|宝山|嘉定|浦东|金山|松江|青浦|南汇|奉贤|崇明");
arr[3] = new Forms("天津", "和平|东丽|河东|西青|河西|津南|南开|北辰|河北|武清|红挢|塘沽|汉沽|大港|宁河|静海|宝坻|蓟县");
arr[4] = new Forms("重庆", "万州|涪陵|渝中|大渡口|江北|沙坪坝|九龙坡|南岸|北碚|万盛|双挢|渝北|巴南|黔江|长寿|綦江|潼南|铜梁|大足|荣昌|壁山|梁平|城口|丰都|垫江|武隆|忠县|开县|云阳|奉节|巫山|巫溪|石柱|秀山|酉阳|彭水|江津|合川|永川|南川");
arr[5] = new Forms("河北", "石家庄|邯郸|邢台|保定|张家口|承德|廊坊|唐山|秦皇岛|沧州|衡水");
arr[6] = new Forms("山西", "太原|大同|阳泉|长治|晋城|朔州|吕梁|忻州|晋中|临汾|运城");
arr[7] = new Forms("内蒙古", "呼和浩特|包头|乌海|赤峰|呼伦贝尔盟|阿拉善盟|哲里木盟|兴安盟|乌兰察布盟|锡林郭勒盟|巴彦淖尔盟|伊克昭盟");
arr[8] = new Forms("辽宁", "沈阳|大连|鞍山|抚顺|本溪|丹东|锦州|营口|阜新|辽阳|盘锦|铁岭|朝阳|葫芦岛");
arr[9] = new Forms("吉林", "长春|吉林|四平|辽源|通化|白山|松原|白城|延边");
arr[10] = new Forms("黑龙江", "哈尔滨|齐齐哈尔|牡丹江|佳木斯|大庆|绥化|鹤岗|鸡西|黑河|双鸭山|伊春|七台河|大兴安岭");
arr[11] = new Forms("江苏", "南京|镇江|苏州|南通|扬州|盐城|徐州|连云港|常州|无锡|宿迁|泰州|淮安");
arr[12] = new Forms("浙江", "杭州|宁波|温州|嘉兴|湖州|绍兴|金华|衢州|舟山|台州|丽水");
arr[13] = new Forms("安徽", "合肥|芜湖|蚌埠|马鞍山|淮北|铜陵|安庆|黄山|滁州|宿州|池州|淮南|巢湖|阜阳|六安|宣城|亳州");
arr[14] = new Forms("福建", "福州|厦门|莆田|三明|泉州|漳州|南平|龙岩|宁德");
arr[15] = new Forms("江西", "南昌市|景德镇|九江|鹰潭|萍乡|新馀|赣州|吉安|宜春|抚州|上饶");
arr[16] = new Forms("山东", "济南|青岛|淄博|枣庄|东营|烟台|潍坊|济宁|泰安|威海|日照|莱芜|临沂|德州|聊城|滨州|菏泽");
arr[17] = new Forms("河南", "郑州|开封|洛阳|平顶山|安阳|鹤壁|新乡|焦作|濮阳|许昌|漯河|三门峡|南阳|商丘|信阳|周口|驻马店|济源");
arr[18] = new Forms("湖北", "武汉|宜昌|荆州|襄樊|黄石|荆门|黄冈|十堰|恩施|潜江|天门|仙桃|随州|咸宁|孝感|鄂州");
arr[19] = new Forms("湖南", "长沙|常德|株洲|湘潭|衡阳|岳阳|邵阳|益阳|娄底|怀化|郴州|永州|湘西|张家界");
arr[20] = new Forms("广东", "广州|深圳|珠海|汕头|东莞|中山|佛山|韶关|江门|湛江|茂名|肇庆|惠州|梅州|汕尾|河源|阳江|清远|潮州|揭阳|云浮");
arr[21] = new Forms("广西", "南宁|柳州|桂林|梧州|北海|防城港|钦州|贵港|玉林|南宁地区|柳州地区|贺州|百色|河池");
arr[22] = new Forms("海南", "海口|三亚");
arr[23] = new Forms("四川", "成都|绵阳|德阳|自贡|攀枝花|广元|内江|乐山|南充|宜宾|广安|达川|雅安|眉山|甘孜|凉山|泸州");
arr[24] = new Forms("贵州", "贵阳|六盘水|遵义|安顺|铜仁|黔西南|毕节|黔东南|黔南");
arr[25] = new Forms("云南", "昆明|大理|曲靖|玉溪|昭通|楚雄|红河|文山|思茅|西双版纳|保山|德宏|丽江|怒江|迪庆|临沧");
arr[26] = new Forms("西藏", "拉萨|日喀则|山南|林芝|昌都|阿里|那曲");
arr[27] = new Forms("陕西", "西安|宝鸡|咸阳|铜川|渭南|延安|榆林|汉中|安康|商洛");
arr[28] = new Forms("甘肃", "兰州|嘉峪关|金昌|白银|天水|酒泉|张掖|武威|定西|陇南|平凉|庆阳|临夏|甘南");
arr[29] = new Forms("宁夏", "银川|石嘴山|吴忠|固原");
arr[30] = new Forms("青海", "西宁|海东|海南|海北|黄南|玉树|果洛|海西");
arr[31] = new Forms("新疆", "乌鲁木齐|石河子|克拉玛依|伊犁|巴音郭勒|昌吉|克孜勒苏柯尔克孜|博尔塔拉|吐鲁番|哈密|喀什|和田|阿克苏");
arr[32] = new Forms("香港", "");
arr[33] = new Forms("澳门", "");
arr[34] = new Forms("台湾", "台北|高雄|台中|台南|屏东|南投|云林|新竹|彰化|苗栗|嘉义|花莲|桃园|宜兰|基隆|台东|金门|马祖|澎湖");
arr[35] = new Forms("其它", "北美洲|南美洲|亚洲|非洲|欧洲|大洋洲");
	
window.onload = function() {
	var province = document.getElementById("province");
	// noinspection JSAnnotator
    province.options.length = arr.length;
	for (var i = 0; i < arr.length; i++) {
		province.options[i].text = arr[i].province;
		province.options[i].value = arr[i].province;
		 
		//获取城市的下拉框对象
		var city = document.getElementById("city");
		//通过provinceObj设置option标签的个数
		// noinspection JSAnnotator
        city.options.length = 1;
		city.options[0].text = "请选择城市名";
	}
}

function select(index) {
	// 获取城市的下拉框对象
	var cityObj = document.getElementById("city");
	
	// 通过cityObj设置option标签的个数
	// 1 获取index下数组的元素
	var cityStr = arr[index].city;//西安|渭南|...
	// 2 根据|分割
	var cells = cityStr.split("|");
	// 3 option标签的个数就是cells数组的长度
	// noinspection JSAnnotator
    cityObj.options.length = cells.length;
	
	// 遍历数组cells数组
	for(var i = 0; i < cells.length; i++) {
		cityObj.options[i].text = cells[i];
		cityObj.options[i].value = cells[i];
	}
}

function check() {
	// 对用户名是否为空进行校验
	var username = document.getElementById("username").value;
	if (username == "") {
		// alert("用户名不能为空");
		document.getElementById("spanusername").innerHTML = "用户名不能为空";
		return false;
	}
	
	// 校验邮箱格式，使用test方式获得是boolean值，使用match方式获得是数组
	// 在HTML5中会自动校验邮箱格式
	var email = document.getElementById("email").value;
	if(!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(email)){
		// alert("邮箱格式不正确！");
		document.getElementById("spanemail").innerHTML = "邮箱格式不正确";
		return false;
	}
}
