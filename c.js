$("body").bind('copy', function (e) {
	if (typeof window.getSelection == "undefined") return; 
	
	var body_element = document.getElementsByTagName('body')[0];
	var selection = window.getSelection();
	
	
	if (("" + selection).length < 30) return;

	var newdiv = document.createElement('div');
	newdiv.style.position = 'absolute';
	newdiv.style.left = '-99999px';
	body_element.appendChild(newdiv);
	newdiv.appendChild(selection.getRangeAt(0).cloneContents());		
	if (selection.getRangeAt(0).commonAncestorContainer.nodeName == "PRE") {
		newdiv.innerHTML = "<pre>" + newdiv.innerHTML + "</pre>";
	}
	
	newdiv.innerHTML += "<br /><br />文章来自: xmds.ml  文章地址：<a href='"
	+ document.location.href + "'>"
	+ document.location.href + "</a>";
			
	selection.selectAllChildren(newdiv);
	window.setTimeout(function () { body_element.removeChild(newdiv); }, 200);
});
