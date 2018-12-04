window.onscroll = function() {hideDuringScroll()};
function hideDuringScroll() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("topofpagebutton").style.display = "block";
    } else {
        document.getElementById("topofpagebutton").style.display = "none";
    }
}
	
function backToTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}
