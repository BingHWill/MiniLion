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
		url: '/api/v1/apply/user',
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
                        input_name.val("");
            			input_phone.val("");
                        alert("申请成功，请等待客服联系！");
                        break;
                    case 2:
                        alert("申请失败，未知错误")
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

// $(".apply_phone input").on('keyup', function(event) {
// 	var reg=/^[1-9]\d*$|^0$/;
//     var input_number = this.value;
//     var input_length = input_number.length;

//    	if (reg.test(input_number) == true) {
//    		if (input_length >= 11) {
// 	        this.value = input_number.substr(0, 11);
// 	    }
//    	} else {
//    		this.value = input_number.substr(0, input_length-1)
//    	};
// });