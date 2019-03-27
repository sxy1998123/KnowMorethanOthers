$(function(){
	for(var i = 1; i < $('.Rightpage').length; i++){
		$('.Rightpage').eq(i).hide(); 
	}


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
			url: "http://localhost:8080",
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
		  $('.Rightpage').show();
		  
	  }, 1000);
	  setTimeout(() => {
		  $('.bookPage').eq(0).hide();
		  $('.Rightpage').eq(1).addClass('runclass');
		  $('.bookPage').eq(1).show();
	  }, 2000);
	  
	  setTimeout(() => {
		$('.Rightpage').eq(2).addClass('runclass');
	}, 2500);
	  setTimeout(() => {
		$('.Rightpage').eq(3).addClass('runclass');
	}, 2750);
	   setTimeout(() => {
		$('.Rightpage').eq(4).addClass('runclass');
	}, 3000);
	   setTimeout(() => {
		$('.Rightpage').eq(5).addClass('runclass');
	}, 3250);
	});



});

