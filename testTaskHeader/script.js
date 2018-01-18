function inserList(number){
	for(let i=0; i<number; i++) {
		document.getElementById('list').innerHTML += '<li>'+i+'</li>';
	}
}
inserList(125);
window.onscroll = function scroll() {
	if (window.pageYOffset < 15) {
		document.getElementById('header').style.position = "static";
	} else if (window.pageYOffset > 15) {
		document.getElementById('header').style.position = "fixed";
		document.getElementById('header').style.top = ""+pageYOffset+"";
	}
}