// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.

// let response = await fetch(url);

// if (response.ok) { // if HTTP-status is 200-299
//   // get the response body (the method explained below)
//   let json = await response.json();
// } else {
//   alert("HTTP-Error: " + response.status);
// }

let headers = new Headers();




headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');

headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:8000');
headers.append('Access-Control-Allow-Credentials', 'true');


var dat_a = [
    ['ug-2595', 0],
    ['ug-7073', 1],
    ['ug-7074', 2],
    ['ug-7075', 3],
    ['ug-2785', 4],
    ['ug-2791', 5],
    ['ug-3385', 6],
    ['ug-3388', 7],
    ['ug-2786', 8],
    ['ug-7056', 9],
    ['ug-7083', 10],
    ['ug-7084', 11],
    ['ug-7058', 12],
    ['ug-1678', 13],
    ['ug-1682', 14],
    ['ug-1683', 15],
    ['ug-1685', 16],
    ['ug-7051', 17],
    ['ug-2762', 18],
    ['ug-2767', 19],
    ['ug-2777', 20],
    ['ug-2778', 21],
    ['ug-2780', 22],
    ['ug-2781', 23],
    ['ug-2782', 24],
    ['ug-2783', 25],
    ['ug-2779', 26],
    ['ug-2784', 27],
    ['ug-3382', 28],
    ['ug-3384', 29],
    ['ug-3389', 30],
    ['ug-3383', 31],
    ['ug-3390', 32],
    ['ug-3386', 33],
    ['ug-3391', 34],
    ['ug-3392', 35],
    ['ug-3394', 36],
    ['ug-2750', 37],
    ['ug-7048', 38],
    ['ug-7080', 39],
    ['ug-7081', 40],
    ['ug-1684', 41],
    ['ug-7082', 42],
    ['ug-1688', 43],
    ['ug-7079', 44],
    ['ug-7068', 45],
    ['ug-7070', 46],
    ['ug-7049', 47],
    ['ug-2787', 48],
    ['ug-7055', 49],
    ['ug-2769', 50],
    ['ug-7052', 51],
    ['ug-2774', 52],
    ['ug-7059', 53],
    ['ug-7060', 54],
    ['ug-7057', 55],
    ['ug-2790', 56],
    ['ug-2776', 57],
    ['ug-7067', 58],
    ['ug-7065', 59],
    ['ug-7066', 60],
    ['ug-7069', 61],
    ['ug-7061', 62],
    ['ug-7063', 63],
    ['ug-7062', 64],
    ['ug-7064', 65],
    ['ug-7086', 66],
    ['ug-2744', 67],
    ['ug-1679', 68],
    ['ug-1680', 69],
    ['ug-7054', 70],
    ['ug-1686', 71],
    ['ug-7078', 72],
    ['ug-1677', 73],
    ['ug-1690', 74],
    ['ug-2745', 75],
    ['ug-2752', 76],
    ['ug-2754', 77],
    ['ug-1687', 78],
    ['ug-2757', 79],
    ['ug-1689', 80],
    ['ug-2760', 81],
    ['ug-2761', 82],
    ['ug-2766', 83],
    ['ug-2765', 84],
    ['ug-2764', 85],
    ['ug-2749', 86],
    ['ug-2768', 87],
    ['ug-2763', 88],
    ['ug-2748', 89],
    ['ug-2771', 90],
    ['ug-2772', 91],
    ['ug-2775', 92],
    ['ug-2788', 93],
    ['ug-2789', 94],
    ['ug-3381', 95]
];

function get_intervention_detail(dat_a) {
  
    fetch('http://127.0.0.1:8000/',
    {
        headers:headers
    })
    .then(res => res.json())
    .then(data => {

    var all_data = data.data;
    
    var all_data_array = [];

    var daret = dat_a;

    for(var r = 0; r < daret.length; r++){
        daret[r][1] = all_data[r].number;
    }

    // Create the chart
Highcharts.mapChart('container', {
    chart: {
        map: 'countries/ug/ug-all'
    },

    title: {
        text: 'Highmaps basic demo'
    },

    subtitle: {
        text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/ug/ug-all.js">Uganda</a>'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    colorAxis: {
        min: 0
    },

    series: [{
        data: daret,
        name: 'Farmer Numbers',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});



    })
    .catch(function (error) {
    });

}

get_intervention_detail(dat_a);

