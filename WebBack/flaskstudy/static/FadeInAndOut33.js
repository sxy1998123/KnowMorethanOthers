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


	 $('#submit').click(function(){
	 	var file = $("#SubmitArea").find("input")[0].files[0];
	 	var reader = new FileReader();
	 	var imgFile;

		reader.onload = function(e){
			imgFile = e.target.result;
			var RSstr = imgFile.substring(22);
			var Json = {'Img':RSstr};
			console.log(imgFile);
			$("#imgContent").attr('src',imgFile);

		$.ajax({
			type:"post",
			url: "/testpost",
			contentType: "application/json; charset=utf-8",
			data: JSON.stringify(Json),
			dataType: "json",
			success: function (message) {
				console.log(1);
				console.log(message)
				if (message) {
					console.log("请求已提交!");
				}
			},
			error: function (message) {
				console.log(0);
				console.log(message)
				// $("#request-process-patent").html("提交数据失败！");
			}
		      })
		}
		reader.readAsDataURL(file);
	  $('.Rightpage').eq(0).addClass('runclass');
	  
	  setTimeout(() => {
		  $('#SubmitArea').hide();
		  $('.Rightpage').show();
		  
	  }, 1000);
	  setTimeout(() => {
		  $('.Rightpage').eq(1).addClass('runclass');
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
	   	for(var i = 1; i < $('.Rightpage').length; i++)
		     $('.Rightpage').eq(i).hide();
		$('.bookPage').eq(1).show();
		$('.bookPage').eq(0).hide();
	}, 5000);
		});




});

