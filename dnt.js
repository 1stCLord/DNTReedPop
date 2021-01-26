var iframes = document.getElementsByTagName("iframe");

[...iframes].forEach(fixelement);

var scripts = document.getElementsByTagName("script");
[...scripts].forEach(fixelement);

function fixelement(element)
{
	if(element.hasAttribute("data-src"))
	{
		element.setAttribute("src", element.getAttribute("data-src"));
		var placeholders = element.parentElement.getElementsByClassName("onetrust-placeholder");
		[...placeholders].forEach(placeholder => element.parentElement.removeChild(placeholder));
		placeholders = element.parentElement.getElementsByClassName("embed_placeholder");
		[...placeholders].forEach(placeholder => element.parentElement.removeChild(placeholder));
	}
}