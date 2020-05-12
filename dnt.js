var iframes = document.getElementsByTagName("iframe");

console.log("blah hmmm");
[...iframes].forEach(fixIframe);


function fixIframe(iframe)
{
	if(iframe.hasAttribute("data-src"))
	{
		iframe.setAttribute("src", iframe.getAttribute("data-src"));
		var placeholders = iframe.parentElement.getElementsByClassName("onetrust-placeholder");
		[...placeholders].forEach(placeholder => iframe.parentElement.removeChild(placeholder));
	}
}