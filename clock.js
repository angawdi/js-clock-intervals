var ss = mm = hh =count = 0;

console.log('hi');
(function(){
	setInterval(function(){
		count++;
	ss = count % 60;
	mm = Math.floor((count/60)%60);
	hh = Math.floor(count/60/60);
	secondd(ss);
	minutee(mm);
	hourr(hh);
	}, 1);

	
	
}());

function secondd(sec){
	var sss = document.getElementById('second');
	sss.style.transform = "rotate(" + (sec/60)*360 + "deg)";
}

function minutee(min){
	var mmm = document.getElementById('minute');
	mmm.style.transform = "rotate(" + (min/60)*360 + "deg)";
}

function hourr(hrr){
	var hhh = document.getElementById('hour');
	hhh.style.transform = 'rotate(' + (hrr/60)*360 + 'deg)';
}