// require needed modules
let express = require('express');
let weather = require('weather-js')
console.log(weather)
// Declare a new express app
let app = express()

//serve static files
app.use(express.static('static'))

// set the template language to ejs
app.set('view engine', 'ejs')

// declare routes
app.get('/', (req, res) => {
    res.render('home')
})
//Options:
//search:     location name or zipcode
//degreeType: F or C
app.get('/weather', (req, res) => {
    //take the req.body.zip, and pack it into a variable
    //make sure data is coming from the front end correctly
    //run the zip code through weather-js 
    areacode = (req.query.zip)
    weather.find({search: areacode, degreeType: 'F'}, function(err, result) {
        if(err) {console.log(err)};
        if(areacode === '') {
            res.render('home')
        }
        console.log(JSON.stringify(result, null, 2));
        //switch case to display images matching the weather text
        const backgroundImage = (sky) => {
            switch (sky) {
                case 'Light Rain': 
                    return 'https://img.lbpost.com/wp-content/uploads/2018/01/10171505/sprinkling.jpg'
                    break;

                case 'Rain Showers': 
                    return 'https://www.gannett-cdn.com/-mm-/df22a067005ed6b8011f36db78edac9e9494e4e9/c=23-0-377-266/local/-/media/2017/01/09/PalmSprings/PalmSprings/636195518086888335-tdsdc5-6gbotpg2piap3qx3le7-layout.jpg'
                    break;

                 case 'Light Rain and Snow': 
                    return 'https://bloximages.chicago2.vip.townnews.com/siouxcityjournal.com/content/tncms/assets/v3/editorial/e/62/e624f413-47c0-5daa-8968-8ae92d74ef79/5a9b11c04ff45.image.jpg?resize=1200%2C800'
                    break;

                case 'Rain': 
                    return 'https://www.4ni.co.uk/newsimages/1_235055_Heavy-Rain.jpg'
                    break;

                case 'Light Snow': 
                    return 'https://photos.smugmug.com/Landscapes/Yosemite-National-Park-A/i-hwrCSWZ/0/27cf3e18/M/Morning-Light-Snowing-Trees-Granite-Cliffs-Yosemite-National-Park-Spring-Snow-trees-_D811638-M.jpg'
                    break;

                case 'Snow': 
                    return 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/snowy-landscape-royalty-free-image-621983566-1542812946.jpg'
                    break;

                case 'T-Storms': 
                    return 'https://chathamvoice.com/wp-content/uploads/2016/08/thunderstorm-1.jpg'
                    break;
                
                case 'Sunny':
                    return 'https://www.azutopia.com/wp-content/uploads/2015/06/Sunburst_1200x900.jpg'
                    break;

                case 'Mostly Sunny':
                    return 'https://bloximages.chicago2.vip.townnews.com/billingsgazette.com/content/tncms/assets/v3/editorial/c/a5/ca5baefc-d922-54e1-9429-abd16a353bce/5a94ef342a5d5.image.jpg'
                    break;

                case 'Partly Cloudy':
                    return 'https://shannanvo.myworshiptimes31.com/wp-content/uploads/sites/57/2016/10/blue-sky-18.jpg'
                    break;
                
                 case 'Partly Sunny': 
                    return 'https://archive.reporternews.com/images.ashx?file=ARN-gen-weather-sunny.jpg&resize='
                    break;

                case 'Mostly Cloudy':
                    return 'https://img.particlenews.com/image.php?type=thumbnail_1024x576&url=01RP6C_0LqigHSV00'
                    break;

                 case 'Cloudy': 
                    return 'https://images.unsplash.com/photo-1500740516770-92bd004b996e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2252&q=80'
                    break;

                 case 'Clear':
                    return 'https://data.whicdn.com/images/318195295/original.jpg'
                    break;

                case 'Mostly Clear':
                    return 'https://shannanvo.myworshiptimes31.com/wp-content/uploads/sites/57/2016/10/blue-sky-18.jpg'
                    break;
                

                default:
                    return 'http://wallpapers-best.com/uploads/posts/2015-10/13_blue_sky.jpg'
                    break;
            } 
        };
       res.render('result', {
           location: result[0].location,
           current: result[0].current,
           forecast: result[0].forecast,
           backgroundImage: backgroundImage
       })
      });
})

app.get('/weather:zipcode', (req, res) => {
    areacode = (req.query.zip)
    weather.find({search: areacode, degreeType: 'F'}, function(err, result) {
        if(err) {console.log(err)};
        if(areacode === '') {
            res.render('home')
        }
        console.log(JSON.stringify(result, null, 2));
        //switch case to display images matching the weather text
        const backgroundImage = (sky) => {
            switch (sky) {
                case 'Light Rain': 
                    return 'https://img.lbpost.com/wp-content/uploads/2018/01/10171505/sprinkling.jpg'
                    break;

                case 'Rain Showers': 
                    return 'https://www.gannett-cdn.com/-mm-/df22a067005ed6b8011f36db78edac9e9494e4e9/c=23-0-377-266/local/-/media/2017/01/09/PalmSprings/PalmSprings/636195518086888335-tdsdc5-6gbotpg2piap3qx3le7-layout.jpg'
                    break;

                 case 'Light Rain and Snow': 
                    return 'https://bloximages.chicago2.vip.townnews.com/siouxcityjournal.com/content/tncms/assets/v3/editorial/e/62/e624f413-47c0-5daa-8968-8ae92d74ef79/5a9b11c04ff45.image.jpg?resize=1200%2C800'
                    break;

                case 'Rain': 
                    return 'https://www.4ni.co.uk/newsimages/1_235055_Heavy-Rain.jpg'
                    break;

                case 'Light Snow': 
                    return 'https://photos.smugmug.com/Landscapes/Yosemite-National-Park-A/i-hwrCSWZ/0/27cf3e18/M/Morning-Light-Snowing-Trees-Granite-Cliffs-Yosemite-National-Park-Spring-Snow-trees-_D811638-M.jpg'
                    break;

                case 'Snow': 
                    return 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/snowy-landscape-royalty-free-image-621983566-1542812946.jpg'
                    break;

                case 'T-Storms': 
                    return 'https://chathamvoice.com/wp-content/uploads/2016/08/thunderstorm-1.jpg'
                    break;
                
                case 'Sunny':
                    return 'https://www.azutopia.com/wp-content/uploads/2015/06/Sunburst_1200x900.jpg'
                    break;

                case 'Mostly Sunny':
                    return 'https://bloximages.chicago2.vip.townnews.com/billingsgazette.com/content/tncms/assets/v3/editorial/c/a5/ca5baefc-d922-54e1-9429-abd16a353bce/5a94ef342a5d5.image.jpg'
                    break;

                case 'Partly Cloudy':
                    return 'https://shannanvo.myworshiptimes31.com/wp-content/uploads/sites/57/2016/10/blue-sky-18.jpg'
                    break;
                
                 case 'Partly Sunny': 
                    return 'https://archive.reporternews.com/images.ashx?file=ARN-gen-weather-sunny.jpg&resize='
                    break;

                case 'Mostly Cloudy':
                    return 'https://img.particlenews.com/image.php?type=thumbnail_1024x576&url=01RP6C_0LqigHSV00'
                    break;

                 case 'Cloudy': 
                    return 'https://images.unsplash.com/photo-1500740516770-92bd004b996e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2252&q=80'
                    break;

                 case 'Clear':
                    return 'https://data.whicdn.com/images/318195295/original.jpg'
                    break;

                case 'Mostly Clear':
                    return 'https://shannanvo.myworshiptimes31.com/wp-content/uploads/sites/57/2016/10/blue-sky-18.jpg'
                    break;
                

                default:
                    return 'http://wallpapers-best.com/uploads/posts/2015-10/13_blue_sky.jpg'
                    break;
            } 
        };
       res.render('zipcode', {
           location: result[0].location,
           current: result[0].current,
           forecast: result[0].forecast,
           backgroundImage: backgroundImage
       })
      });
})


// pick a port for it to listen to
app.listen(3000, () => {
    console.log('Weather time bb!')
});