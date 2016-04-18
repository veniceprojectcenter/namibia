angular.module('app').controller('MainController', function(NgMap, $http, $scope) {
  var ctl = this;

  ctl.onClick = function(){
    alert("Item selected");
  };

  ctl.getDirections = function(){
    ctl.origin = 'Kongola, Regione dello Zambesi, Namibia';
    ctl.destination = 'Mururani, Regione di Kavango, Namibia';
    $('#modal_from_to').closeModal();
  };

  ctl.map = undefined;
  // MAP INIT
  NgMap.getMap({id: 'main_map'}).then(function(map) {
    cl("Init Map....");
    
    ctl.map = map;
    $.getJSON('wbcg.json', function (data) {
      ctl.features = ctl.map.data.addGeoJson(data);
    });
    // mapSrv.routeMap.setCenter({lat: 45.4362, lng: 12.3346});
    // mapSrv.directionsDisplay.setMap(mapSrv.routeMap);
    // mapSrv.showDirections(mapSrv.tmp_route, mapSrv.tmp_waypoints, mapSrv.tmp_request);
  });

  // GUI INIT
  setTimeout(function(){
    $('.modal-trigger').leanModal();
  }, 500);
});