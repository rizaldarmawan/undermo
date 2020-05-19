
window.setInterval(function(){
  var xhr = new XMLHttpRequest();
  //cek kesiapan ajax
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200 ) {
      window.ycpu = xhr.responseText;
      console.log(xhr.responseText);
    }
  }

  //eksekusi ajax
  xhr.open('GET', 'ajax2.php', true);
  xhr.send();
}, 500);

