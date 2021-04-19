window.onload = init;

function init() {
    document.querySelector('.ham').onclick = showHideMobileMenu;
    document.querySelector('#submit').onclick = submitProfile;
}

// To show and hide mobile menu when .ham is clicked
function showHideMobileMenu() {

	var mobileNav = document.querySelector('.mobile-nav');

	// in a if statement == is used to compare two value, if the values matches then the condition is true
	// an if statement is followed by an else statement which runs when the given condition is not met
	if(mobileNav.style.display=="block") {
		mobileNav.style.display="none";
	} else {
		mobileNav.style.display="block";
	}
}

async function submitProfile() {
    var profile = document.querySelector('#profile');
    profile.classList.toggle('fade');
    await sleep(500);

    var name = document.querySelector('#name').value;
    var email = document.querySelector('#email').value;
    var address = document.querySelector('#address').value;
    var city = document.querySelector('#city').value;
    var provinceDropdown = document.querySelector('#province');
    var province = provinceDropdown.options[provinceDropdown.selectedIndex].value;
    var postalCode = document.querySelector('#postalcode').value;
    
    document.querySelector('#profile-name').innerHTML = name;
    document.querySelector('#profile-email').innerHTML = email;
    document.querySelector('#profile-address').innerHTML = 
        address + '<br /> ' + city + ', ' + province + ', ' + postalCode;

    profile.classList.toggle('fade');

    console.log(name);
    console.log(email);
    console.log(address);
    console.log(city);
    console.log(province);
    console.log(postalCode);

    return false;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
