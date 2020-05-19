<?php 
	require 'functions.php';
	// koneksi ke setiap server
	// perintah sql
	$query = "SELECT * FROM data";
	// hasil fetch data
	$data = query($query);

	echo $data[0]["cpu"];

 	?>