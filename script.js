let header = document.getElementsByClassName('page-header');

window.addEventListener('scroll', function() {
	if (document.body.scrollTop > 20) {
        header.style.border = "1px solid red";
    }
	
});