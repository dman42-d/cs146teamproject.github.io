function checkmobile() {
	var elements = document.getElementsByClassName('text');
	if ((typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)){
		for (var i = 0; i < elements.length; i++) {
  			var element = elements[i];
  			element.style.fontSize = "10px";
}}    	
}
	
window.onscroll = function() {hideDuringScroll()};
function hideDuringScroll() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("topButton").style.display = "block";
    } else {
        document.getElementById("topButton").style.display = "none";
    }
}
	
function backToTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}
