
function abOrSnsr() {
    const sensor = new AbsoluteOrientationSensor();
    Promise.all([navigator.permissions.query({ name: "accelerometer" }),
             navigator.permissions.query({ name: "magnetometer" }),
             navigator.permissions.query({ name: "gyroscope" })])
            .then(results => {
                if (results.every(result => result.state === "granted")) {
                    sensor.start();
                    return sensor.quaternion;
                } else {
                    var error_msg = "No permissions to use AbsoluteOrientationSensor.";
                    return error_msg;
                }
            });
}

function aos() {
    var aos = null;
    try {
        aos = new AbsoluteOrientationSensor( { frequency: 60, referenceFrame: 'device' });
        aos.onerror = (event) => {
            //handle runtime errors
            if (event.error.name === "NotAllowedError") {
                return 'Permission to access sensor was denied.';
            } else if (event.error.name === "NotReadableError") {
                return 'Cannot connect to the sensor.';
            }
        };

        aos.onreading = (e) => {
            return 'I can maybe use this.'
        };

        aos.start();

    } catch (error) {
      //handle construction errors
      if (error.name === "SecurityError") {
          return 'Sensor construction was blocked by the Permissions Policy.';
      } else if (error.name === "ReferenceError") {
          return "Sensor is not supported by the User Agent.";
      } else {
          throw error;
      }
    }
}
     