<?php 
	require 'functions.php';
	// koneksi ke setiap server
	// perintah sql
	$query = "SELECT * FROM data";
	// hasil fetch data
	$data = query($query);

 ?>
<tbody id="tabel">
	<?php foreach ($data as $monitor) :?>
		<tr class="row100 body">
			<td class="cell100 column1">Galileo0<?= $monitor["id"]; ?></td>
			<td class="cell100 column2"><?= $monitor["suhu"]; ?>°C</td>
			<td class="cell100 column3"><?= $monitor["cpu"]; ?>%</td>
			<td class="cell100 column4"><?= $monitor["memory"]; ?>%</td>
		</tr>
	<?php endforeach; ?>
</tbody>