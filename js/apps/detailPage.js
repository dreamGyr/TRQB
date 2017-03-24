(function(argument) {
    $(function(){
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

        files("#file_upload1",preview1,"#icon1");
        files(file_upload2,preview2,"#icon2");
    })
})()