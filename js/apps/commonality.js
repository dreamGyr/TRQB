// 页面公共  js
(function(){


    $(function(){
        // 联系我们下拉框
        $(".g-relation").hover(function(){
            setTimeout(function(){
                $(".seletBox").stop().slideDown('fast');
            },500)
        },function(){
            setTimeout(function(){
                $(".seletBox").stop().slideUp('fast');
            },500)

        })

    })


})()






