/*
     * Flot Interactive Chart
     * -----------------------
     */
    // We use an inline data source in the example, usually data would
    // be fetched from a server
    var tabel = document.getElementById("tabel");
    console.log(tabel);

    window.setInterval(function(){
        var cpu = document.getElementById("cpu");
        console.log(cpu);
    
        var data = [], totalPoints = 100

        function getCpuData() {

          if (data.length > 0)
            data = data.slice(1)

          // Data CPU
          while (data.length < totalPoints) {
            var y    = <?php echo json_encode($data[0]["cpu"]); ?>;
            data.push(y)
          }

          // Zip the generated y values with the x values
          var res = []
          for (var i = 0; i < data.length; ++i) {
            res.push([i, data[i]])
          }

          return res
        }

        var interactive_plot = $.plot('#interactive', [getCpuData()], {
          grid  : {
            borderColor: '#f3f3f3',
            borderWidth: 1,
            tickColor  : '#f3f3f3'
          },
          series: {
            shadowSize: 0, // Drawing is faster without shadows
            color     : '#3c8dbc'
          },
          lines : {
            fill : true, //Converts the line chart to area chart
            color: '#3c8dbc'
          },
          yaxis : {
            min : 0,
            max : 100,
            show: true
          },
          xaxis : {
            show: true
          }
        })
    }, 500);
