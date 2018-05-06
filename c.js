        function setClipboardText(event){   
            event.preventDefault();  
            var node = document.createElement('div');  
            node.appendChild(window.getSelection().getRangeAt(0).cloneContents());  
            var htmlData = '<div>著作权归xmdhs所有。<br />'   
                            + '商业转载请联系作者获得授权，非商业转载请注明出处。<br />'  
                            + '作者：xmdhs<br />链接：xmdhs.ml<br />'  
                            + '来源：xmdhs.ml<br /><br />'   
                            + node.innerHTML   
                            + '</div>';  
            var textData = '著作权归作者所有。\n'   
                            + '商业转载请联系作者获得授权，非商业转载请注明出处。\n'  
                            + '作者：xmdhs\n链接：xmdhs.ml\n'  
                            + '来源：xmdhs.ml\n\n'   
                            + window.getSelection().getRangeAt(0);  
            if(event.clipboardData){    
                event.clipboardData.setData("text/html", htmlData);   
                event.clipboardData.setData("text/plain",textData);  
            }  
            else if(window.clipboardData){    
                return window.clipboardData.setData("text", textData);    
            }    
        };    
        var answer = document.getElementById("answer");  
        answer.addEventListener('copy',function(e){  
            setClipboardText(e);  
        });  
