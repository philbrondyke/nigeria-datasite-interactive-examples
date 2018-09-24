Highcharts.chart('line', {
    chart: {
        type: 'area',
        style: {
          fontFamily: 'Arial, sans-serif',
        },
        backgroundColor: 'transparent',
    },
    title: {
        text: 'Turnout in Nigerian Elections'
    },
    subtitle: {
        text: '2007 to 2015'
    },
    xAxis: {
        categories: ['1999', '2003', '2007', '2011', '2015']
    },
    yAxis: {
        title: {
            enabled: false,
            //text: 'Election Turnout'
          },
          min: 40,
          labels: {
              formatter: function () {
                  return this.value+"%";
              }
          }
    },
    tooltip: {
        formatter: function() {
              return 'In <b>' + this.x + '</b> turnout was <b>' + this.y + '</b>% ';
        }
        //pointFormat: 'In election turnout was {series.data}%.'
    },
    plotOptions: {
        area: {
            tickInterval: 4,
            marker: {
                enabled: false,
                symbol: 'circle',
                stroke: 5,
                radius: 5,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
    series: [{
        name: 'Turnout',
        color: '#0e677f',
        data: [52, 69, 57, 54, 44]
    }],
    legend: {
        enabled: false
    },
    credits: {
        enabled: false
    },
});
