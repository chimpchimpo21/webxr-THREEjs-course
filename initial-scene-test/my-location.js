function test(){
    
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
        
    function success(pos) {
        var crd = pos.coords;
        var long = crd.longitude;
        var lat = crd.latitude;
        console.log(long, lat);
    }
        
    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }
        
    navigator.geolocation.getCurrentPosition(success, error, [options]);
    
}
   

export{ test };


