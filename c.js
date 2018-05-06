document.body.oncopy = function () {  
            setTimeout( function () {   
                        var text = clipboardData.getData("text");  
                        if (text) {text = text + "\r\n本篇文章来源于 xmdhs.ml 原文链接："+location.href;   
                                     clipboardData.setData("text", text); } }, 100 )   
}  
