// Data gathered from http://populationpyramid.net/germany/2015/

// Age categories
var categories = [
    'NC', 'NE', 'NW', 'SE',
    'SS', 'SW'
];

Highcharts.chart('pyramid', {
    chart: {
        type: 'bar',
        style: {
          fontFamily: 'Arial, sans-serif, Poppins,',
        },
        height: 600,
        //Added the background of production site:
        backgroundColor: '#00A556',
        // The background can be transparent in production.
        //backgroundColor: 'transparent',
    },
    title: {
        text: 'Percent of Polling Units in Each Zone During the 2015 Election in Which',
        style: {
          color: '#ffffff',
          fontSize: '1.8em',
        },

    },
    subtitle: {
        text: ''
    },
    legend: {
        align: 'center',
        verticalAlign: 'top',
        layout: 'vertical',
        x: 0,
        itemStyle: {
          color: '#ffffff',
        }
    },
    xAxis: [{
        categories: categories,
        reversed: false,
        labels: {
            step: 1,
            style: {
              color: '#ffffff',
            },
        },
    }, { // mirror axis on right side
        opposite: true,
        reversed: false,
        categories: categories,
        linkedTo: 0,
        labels: {
            step: 1,
            style: {
              color: '#ffffff',
            },
        },
    }],
    yAxis: {
        title: {
            text: null,
        },

        labels: {
            formatter: function () {
                return Math.abs(this.value) + '%';
            },
            style: {
              color: '#ffffff',
            },
        }
    },
    exporting: {
            enabled: false,
    },

    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },

    tooltip: {
        formatter: function () {
            return this.series.name + ' in ' + this.point.category + ' zone:' + '<br/>' +
                '<b>' + Highcharts.numberFormat(Math.abs(this.point.y), 0) + '%' + '</b>';
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Voters were accredited without their PVCs being checked by the card reader',
        color: '#FFDE17',
        data: [
            -23, -23, -24,
            -29, -26, -19
        ]
    }, {
        name: 'Voters were accredited even though the card reader could not read their PVC',
        color: '#D1D1D1',
        data: [
            6, 5, 13, 11, 7, 2,
        ]
    }]
});
