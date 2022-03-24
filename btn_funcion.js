function loginf()
{	
	document.getElementById("register_form").style.display = "none";
	document.getElementById("login_form").style.display = "block";
	
	document.getElementById("button_login").className = "btn btn-success";
	document.getElementById("button_register").className = "btn btn-secondary";
}
function regf()
{	
	document.getElementById("register_form").style.display = "block";
	document.getElementById("login_form").style.display = "none";


	document.getElementById("button_login").className = "btn btn-secondary";
	document.getElementById("button_register").className = "btn btn-success";
}
