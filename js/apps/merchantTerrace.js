(function(){
      // file img上传封装
    $(function() {
       function files(ele,id,icon){
             $(ele).change(function() {
                var $file = $(this);
                var fileObj = $file[0];
                var windowURL = window.URL || window.webkitURL;
                var dataURL;
                var $img = $(id);

                if(fileObj && fileObj.files && fileObj.files[0]){
                    dataURL = windowURL.createObjectURL(fileObj.files[0]);
                    $img.attr('src',dataURL);
                }else{
                dataURL = $file.val();
                var imgObj = document.getElementById(id);
                imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
                imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;

            }

                if(($img).attr("src")){
                    $(icon).css({
                        "display":"none"
                    });
                }
        })
    }
        files(file_upload1,preview1,"#icon1");
        files(file_upload2,preview2,"#icon2");
        files(file_upload3,preview3,"#icon3");
        files(file_upload4,preview4,"#icon4");
        files(file_upload5,preview5,"#icon5");
        files(file_upload6,preview6,"#icon6");
        files(file_upload7,preview7,"#icon7");
        files(file_upload8,preview8,"#icon8");
        files(file_upload9,preview9,"#icon9");

        (function(){
            console.log( $(".showBtn"));
            // 设置蒙版高度是整个body高度
            $(".alertMb").css({
                "height":$("body").height()
            })
            // 点击实例按钮
            $(".showBtn").click(function() {
                $(".alertMb").css("display","block")
            });
            // 点击关闭按钮
            $(".closeBtn").click(function(){
                $(".alertMb").css("display","none")
            })
            // 点击我知道了
             $(".alertSureBtn").click(function(){
                $(".alertMb").css("display","none")
            })
        })()

       // // 联系我们下拉框
       //  $(".g-relation").hover(function(){
       //      setTimeout(function(){
       //          $(".seletBox").stop().slideDown('fast');
       //      },500)
       //  },function(){
       //      setTimeout(function(){
       //          $(".seletBox").stop().slideUp('fast');
       //      },500)

       //  })



});

})()
