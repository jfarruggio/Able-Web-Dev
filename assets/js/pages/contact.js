var Contact = function () {

    return {
        
        //Chicago Map
        initMap: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				lat: 41.92598,
				lng: -87.765706,
			  });
			   var marker = map.addMarker({
				lat: 41.92598,
				lng: -87.765706,
		            title: 'Able Distributors'
		        });
			});
        }

    };
}();