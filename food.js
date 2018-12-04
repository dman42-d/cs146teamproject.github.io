function bareB(){
  window.open("https://www.bareburger.com/")
}

function mamounB(){
  window.open("http://mamouns.com/")
}

function chipB(){
  window.open("https://www.chipotle.com/")
}

function pierceB(){
  window.open("http://stevensdining.com/pierce-dining-hall/")
}

function bennyB(){
  window.open("https://www.bennytudinospizzeria.com/")
}

function karmaB(){
  window.open("http://www.karmakafe.com/")
}

window.onscroll = function() {hideDuringScroll()};
function hideDuringScroll() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("buttongototop").style.display = "block";
    } else {
        document.getElementById("buttongototop").style.display = "none";
    }
}
	
function backToTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}
