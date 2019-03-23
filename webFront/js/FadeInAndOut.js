$(function(){
     $('#cover').click(function(){
		   $('#cover').fadeOut(1000);
		  setTimeout(() => {
			  $('.bookPage').eq(0).fadeIn(2000);
		  }, 1000);
	 })
     function GetJsonData(){
		   var JSON= {
			   "imgsrc":$('#pic_selector').val().replace("C:\\fakepath\\","")
		   }
		   console.log(JSON);
		   return JSON;
	 }

	 $('#submit').click(function(){
		$.ajax({
			type:"POST",
			url: "RequestData.ashx",
			contentType: "application/json; charset=utf-8",
			data: GetJsonData(),
			dataType: "json",
			success: function (message) {
				if (message > 0) {
					alert("请求已提交！我们会尽快与您取得联系");
				}
			},
			error: function (message) {
				$("#request-process-patent").html("提交数据失败！");
			}

		})
	  $('.Rightpage').eq(0).addClass('runclass');
	  setTimeout(() => {
		  $('.SubmitArea').hide();
		  $('.Rightpage').eq(1).addClass('runclass');
	  }, 1000);
	  setTimeout(() => {
		  $('.bookPage').eq(0).hide();
		  $('.bookPage').eq(1).show();
		  
	  }, 2000);
	 
	});



});

