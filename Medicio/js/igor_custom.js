var navav = document.querySelector('.nav-js');
var navbarnav = document.querySelector('.navbar-nav');
var logoStyle = document.querySelector('.logo-style');
var navbeb = document.querySelector('.navbar-bebe');

function ajdeBreMoreee() {
	if (window.innerWidth > 870 && window.pageYOffset > 200) {
  		navav.style.height = '50px';
  		logoStyle.style.width = '288px';
  		logoStyle.style.height = '43px';
  		logoStyle.style.marginTop = '5px';
		navbarnav.style.marginTop = '3px';
		navav.style.transition = '0.8s';
		logoStyle.style.transition = '1s';
		navbarnav.style.transition = '1s';
	}
	else {
		navav.style.height = '80px';
  		logoStyle.style.width = '335px';
  		logoStyle.style.height = '55px';
  		logoStyle.style.marginTop = '10px';
		navbarnav.style.marginTop = '15px';
		navav.style.transition = '0.8s';
		logoStyle.style.transition = '1s';
		navbarnav.style.transition = '1s';
	}
}

document.addEventListener('scroll', ajdeBreMoreee)
