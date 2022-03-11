
// menampilkan sidebar
const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav)

// slider

const slider = document.querySelector('.slider');
M.Slider.init(slider, {
	indicators: 'false',
	height: 500,
	duration: 700,
	interval: 5000
});