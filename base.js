/*
    公用方法都放到一个函数的原型中
*/
var base = function () {};
//获取地址栏方法  直接引用就可以获取返回值:值为对象
base.prototype.getUrl = function () {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    //返回值
    return theRequest;
}
//判断表单是否为空方法  传入一个标签名即可
base.prototype.getInputVal = function (ele) {
    // 1.3 遍历每一个输入框
    ele.each(function (index, value) {
        // 1.4 获取每个输入框的value值 并且去除空格
        var val = $(value).val().trim();
        // 1.5 判断当前输入框的值是否为空      
        if (!val) {
            // 1.6 为空就获取为空的元素的上一个兄弟label  元素里面 的文本值           
            var label = $(value).prev().text();
            // 1.7 拼接上 文本值 不允许为空
            alert(label + "不允许为空");
            // 1.8 只要进入 了这个判断表示为空 为空就吧check 改成false
            check = false;
            // 1.9 只要有其中一个为空 结束 只是退出了这个循环
            return false;
        }
    });

}
//判断手机号码 (返回0 不合格) (或者1 合格)
base.prototype.isMobilePhone = function (phone) {
    var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (reg.test(phone)) {
        return 1;
    } else {
        return 0;
    }
};
base.prototype.getSum=function(arr){
    var max=-Infinity;
    for(var i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}