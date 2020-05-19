<?php 
	require 'functions.php';
	// koneksi ke setiap server
	// perintah sql
	$query = "SELECT * FROM data";
	// hasil fetch data
	$data = query($query);

 	?>
  <?php foreach ($data as $monitor) :?>
                
                  <p class="text-center">
                    <strong>Data Lainnya</strong>
                  </p>

                  <div class="progress-group">
                    <span class="progress-text">Memory Usage</span>
                    <span class="progress-number"><b><?= $monitor["memory"]?>%</b></span>

                    <div class="progress sm">
                      <div class="progress-bar progress-bar-aqua" style="width: <?= $monitor["memory"]?>%"></div>
                    </div>
                  </div>
                  <!-- /.progress-group -->
                  <div class="progress-group">
                    <span class="progress-text">Temperature</span>
                    <span class="progress-number"><b><?= $monitor["suhu"]?>C</b></span>

                    <div class="progress sm">
                      <div class="progress-bar progress-bar-red" style="width: <?= $monitor["suhu"]?>%"></div>
                    </div>
                  </div>
                  <!-- /.progress-group -->
                  <div class="progress-group">
                    <span class="progress-text">CPU</span>
                    <span class="progress-number"><b><?= $monitor["cpu"]?>%</b></span>

                    <div class="progress sm">
                      <div class="progress-bar progress-bar-green" style="width: <?= $monitor["cpu"]?>%"></div>
                    </div>
                  </div>
                  <!-- /.progress-group -->
                  
                
  <?php endforeach; ?>
