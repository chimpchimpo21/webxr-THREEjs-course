var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
    var crd = pos.coords;
    var x = 1;
}

const info = document.getElementById("info");

window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
    var absolute = event.absolute;
    var alpha = event.alpha;
    var beta = event.beta;
    var gamma = event.gamma;

    console.log(`absolute: ${absolute}, alpha: ${alpha}, beta: ${beta}, gamma: ${gamma}`);
    info.innerHTML = `absolute: ${absolute}, alpha: ${alpha}, beta: ${beta}, gamma: ${gamma}`;
}