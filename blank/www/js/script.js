var select = function (call)
{
	if (call === 1) 
	{
		console.log(call);
		document.getElementById('demo').innerHTML="You Choose Rock!";
		var comp = Math.floor((Math.random() * 3) + 1);
	};
	if (call === 2) 
	{
		console.log(call);
		document.getElementById('demo').innerHTML="You Choose Paper!";
		var comp = Math.floor((Math.random() * 3) + 1);
	};
	if (call === 3) 
	{
		console.log(call);
		document.getElementById('demo').innerHTML="You Choose Sissors!";
		var comp = Math.floor((Math.random() * 3) + 1);
	};
}

var doall = function(call)
{ 
	var comp = Math.floor((Math.random() * 3) + 1); //Computer Generator
	console.log('computer:'+comp);   // Print computer choice to console. 
	select(call); //User Choice Output
	computerRun(comp,call);
}


var computerRun = function (computer,user)
{
	

	if (computer === 1) 
	{
		document.getElementById('demo2').innerHTML="Computer Choose Rock!";
		if (user === 1) {
			document.getElementById('demo3').innerHTML="ITS A TIE!";
		}
		else if (user === 3) {
			document.getElementById('demo3').innerHTML="Computer Wins!";
		} else{
			document.getElementById('demo3').innerHTML="You Won!";
		};
	};
	if (computer === 2) 
	{
		document.getElementById('demo2').innerHTML="Computer Choose Paper!";
		if (user === 2) {
			document.getElementById('demo3').innerHTML="ITS A TIE!";
		}
		else if (user === 1) {
			document.getElementById('demo3').innerHTML="Computer Wins!";
		} else{
			document.getElementById('demo3').innerHTML="You Won!";
		};		
	};
	if (computer === 3) 
	{
		document.getElementById('demo2').innerHTML="Computer Choose Sissors!";
		if (user === 3) {
			document.getElementById('demo3').innerHTML="ITS A TIE!";
		}
		else if (user === 2) {
			document.getElementById('demo3').innerHTML="Computer Wins!";
		} else{
			document.getElementById('demo3').innerHTML="You Won!";
		};
	};
}

