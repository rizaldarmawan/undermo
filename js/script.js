var tabel = document.getElementById("tabel");
window.setInterval(function(){
  var xhr = new XMLHttpRequest();
  //cek kesiapan ajax
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200 ) {
      dataLain.innerHTML = xhr.responseText;
      console.log('berjalan');
    }
  }

  //eksekusi ajax
  xhr.open('GET', 'ajax.php', true);
  xhr.send();
}, 500);

