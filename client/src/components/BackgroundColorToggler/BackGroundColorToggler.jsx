app.get("/home", (req, res) => {
    let lat;
    let long;
    navigator.geolocation.getCurrentPosition(function(position) {
        lat = position.coords.latitude;
        long = position.coords.longitude;
    });
    axios.get('https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=a61f27c463337d57f7a338a3cb1dc47f')
    .then(response=> res.json(response.data))
    .catch(err => res.send(err))
  })