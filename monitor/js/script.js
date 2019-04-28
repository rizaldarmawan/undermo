var tabel = document.getElementById('tabel');
var body = document.getElementById('body');



window.setInterval(function(){
	console.log('ok');
  var xhr = new XMLHttpRequest();
	//cek kesiapan ajax
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200 ) {
			tabel.innerHTML = xhr.responseText;
			//container.innerHTML = xhr.responseText;
		}
	}

	//eksekusi ajax
	xhr.open('GET', 'ajax.php', true);
	xhr.send();
}, 500);
