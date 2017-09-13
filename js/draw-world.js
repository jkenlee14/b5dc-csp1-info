var markers = [
      {latLng: [42.79, 105.03], name: 'Gobi Desert - Mongolian Death Worm', weburl:"/deathworm.html"},
      {latLng: [34.04, -111.09], name: 'Arizona, USA - Thunderbird', weburl:"/thunderbird.html"},
      {latLng: [11.39, 122.63], name: 'Panay, Philippines - Aswang', weburl:"/aswang.html"},
      {latLng: [38.84, -120.90], name: 'California - Bigfoot', weburl:"/bigfoot.html"},
    ];

$(function(){
      $('#world-map').vectorMap({
      	map: 'world_mill',
        zoomOnScroll: false,
      	backgroundColor: '#253319',
      	markerStyle: {
    	initial: {
        	fill: '#253319',
        	stroke: '#94d811'
    		},
    	hover: {
    		fill: '#94d811',
    		stroke: 'black'
    		},
    	selected: {
    		fill: '#c8ff0e'
  			},
    	},
      markers: markers,

    onMarkerClick: function(events, index) {
      // console.log(markers[index].weburl);
        window.location = "http://creepycryptids.x10host.com" +markers[index].weburl;
    }
  });
});