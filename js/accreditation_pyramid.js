// Data gathered from http://populationpyramid.net/germany/2015/

// Age categories
var categories = [
    'Ebonyi', 'Edo', 'Ekiti', 'FCT',
    'Kebbi', 'Kwara', 'Ondo', 'Taraba', 'Oyo',
    'Jigawa', 'Ogun', 'Bayelsa', 'Lagos', 'Adamawa',
    'Kogi', 'Plateau', 'Zamfara', 'Niger', 'Delta',
    'Gombe', 'Bauchi', 'Imo', 'Osun', 'Yobe', 'Borno', 'Enugu',
    'Nassarawa', 'Rivers', 'Benue', 'Akwa Ibom', 'Cross River',
    'Katsina', 'Kano', 'Sokoto', 'Abia', 'Kaduna', 'Anambra'
];

Highcharts.chart('pyramid', {
    chart: {
        type: 'bar',
        style: {
          fontFamily: 'Arial, sans-serif',
        },
        height: 580,
        backgroundColor: 'transparent',
    },
    title: {
        text: 'Percent of Polling Units in Which Voters Were Accredited to Vote without the PVC Reader Checking Their Card',
    },
    subtitle: {
        text: '(Click on the legend to explore by year.)'
    },
    xAxis: [{
        categories: categories,
        reversed: false,
        labels: {
            step: 1
        }
    }, { // mirror axis on right side
        opposite: true,
        reversed: false,
        categories: categories,
        linkedTo: 0,
        labels: {
            step: 1
        }
    }],
    yAxis: {
        title: {
            text: null
        },
        labels: {
            formatter: function () {
                return Math.abs(this.value) + '%';
            }
        }
    },

    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },

    tooltip: {
        formatter: function () {
            return this.series.name + ' in ' + this.point.category + ' state:' + '<br/>' +
                '<b>' + Highcharts.numberFormat(Math.abs(this.point.y), 0) + '%' + '</b>';
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Percent of PUs in 2011',
        color: '#0e677f',
        data: [
            0, 0, 0, 0, 0, 0, 0, 0, -3, -4,
            -7, -9, -10, -11, -11, -11,
            -12, -12, -13, -13, -14, -16,
            -16, -17, -19, -19, -19, -19,
            -32, -35, -35, -36, -38, -38,
            -43, -43, -52
        ]
    }, {
        name: 'Percent of PUs in 2015',
        color: '#81d2ff',
        data: [
            26, 56, 36, 0, 6, 8, 21, 42, 56, 27,
            44, 20, 41, 52, 51, 56, 26, 51, 52, 26,
            48, 64, 27, 42, 53, 46, 58, 54, 56, 52,
            55, 59, 53, 62, 70, 52, 56
        ]
    }]
});
