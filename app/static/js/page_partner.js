function apply_action() {
	var input_name = $(".name_input");
	var input_phone = $(".phone_input");

	if (input_name.val().length == 0) {
		alert('请输入您的姓名！');
		return false;
	}

	var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
	if (!reg.test(input_phone.val())) { 
	    alert('请输入有效的手机号码！'); 
	    return false; 
	};

	$.ajax({
		url: '/api/v1/apply/user/',
        type: 'POST',
        dataType: 'json',
        cache: 'false',
        data: {
            apply_name: input_name.val(),
            apply_phone: input_phone.val()
        },

        success: function(Data) {
                switch (Data.code) {
                    case 0:
                        alert("服务器异常！");
                        break;
                    case 1:
                        alert("申请成功，请等待客服联系！");
                        break;
                    case 2:
                        alert("您已提交过申请，请等待客服联系")
                        break;
                    default:
                        break;
                }
            },

            complete: function() {
            	input_name.val("");
            	input_phone.val("");
            }
	});
};

function record_apply_user() {

}