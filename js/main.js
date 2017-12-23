window.onscroll = function (e) {  
	var header = document.getElementById("header");
	var main = document.getElementById("main");
	if(window.scrollY != 0) {
		header.classList ? header.classList.add('header-fixed') : header.className = 'header header-fixed';
		main.style.paddingTop = "65px";
	} else {
		header.classList ? header.classList.remove('header-fixed') : header.className = 'header';
		main.style.paddingTop = "110px";
	}
} 

$(document).ready(function() {
	var num = window.location.pathname.split('/')[2];
	if(num == "" || num == undefined) { num = "1"; }
	var pg = document.getElementById("page-" + num);
	if(pg != null) {
		pg.classList.add("active");
	}

	//Rewrite times
	var times = $('time');
	var now = new Date($.now());
	var time, utc1, utc2, diffDays, diffHours, diffMins, displayTime;
	
	times.each(function() {
		displayTime = "";
		time = new Date($(this).attr("datetime"));
		utc1 = Date.UTC(time.getFullYear(), time.getMonth(), time.getDate(), time.getHours(), time.getMinutes(), time.getSeconds());
		utc2 = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds());
		
		diffMins = Math.floor((utc2 - utc1) / 1000 / 60);
		diffHours = Math.floor(diffMins / 60);
		diffDays = Math.floor(diffHours / 24);
		
		if(diffMins == 1) displayTime = "a minute ago"
		else if(diffMins <= 59) displayTime = diffMins + " minutes ago"
		else if(diffHours == 1) displayTime = "an hour ago"
		else if(diffHours <= 23) displayTime = diffHours + " hours ago"
		else if(diffDays == 1) displayTime = "a day ago"
		else if(diffDays <= 6) displayTime = diffDays + " days ago"
		
		if(displayTime != "") $(this).text(displayTime);
	});
});