var express = require('express');
var path = require('path');
var app = express();
var connection = require('./connection');
app.set('view engine', 'pug');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (Swaziland)", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];

const fruits = ["Apple", "Banana", "Orange", "Mango", "Strawberry", "Pineapple", "Watermelon", "Grape", "Kiwi", "Blueberry", "Peach", "Cherry", "Lemon", "Lime", "Avocado", "Papaya", "Guava", "Pomegranate", "Coconut", "Dragon Fruit", "Lychee", "Passion Fruit", "Raspberry", "Blackberry", "Cranberry", "Apricot", "Plum", "Pear", "Fig", "Jackfruit", "Durian", "Starfruit", "Mangosteen", "Rambutan", "Persimmon", "Tangerine", "Clementine", "Grapefruit", "Pomelo", "Kumquat", "Nectarine", "Honeydew", "Cantaloupe", "Plantain", "Date", "Gooseberry", "Elderberry", "Mulberry", "Boysenberry", "Acai Berry", "Goji Berry", "Currant", "Physalis", "Soursop", "Custard Apple", "Tamarind", "Breadfruit", "Salak", "Longan", "Cherimoya", "Feijoa", "Quince", "Prickly Pear", "Jujube", "Kiwano", "Miracle Fruit", "Cloudberry", "Lingonberry", "Maracuja", "Pitaya", "Ugli Fruit", "Yuzu", "Finger Lime", "Buddha's Hand", "Blood Orange", "Mandarin", "Plantain", "Ackee", "Horned Melon", "Jabuticaba", "Langsat", "Mamey Sapote", "Noni", "Pawpaw", "Rollinia", "Sapodilla", "Sugar Apple", "Tayberry", "Velvet Apple", "Wax Apple", "African Cucumber"];

const basket = [
    { name: "Apple", taste: "sweet-tart", color: "red/green", weight: 182, season: "fall", country: "China" },
    { name: "Banana", taste: "sweet", color: "yellow", weight: 120, season: "year-round", country: "India" },
    { name: "Orange", taste: "sweet-tangy", color: "orange", weight: 140, season: "winter", country: "Brazil" },
    { name: "Mango", taste: "sweet", color: "yellow/orange", weight: 250, season: "summer", country: "India" },
    { name: "Strawberry", taste: "sweet", color: "red", weight: 12, season: "spring-summer", country: "USA" },
    { name: "Pineapple", taste: "sweet-tart", color: "yellow", weight: 900, season: "year-round", country: "Costa Rica" },
    { name: "Watermelon", taste: "sweet", color: "red/green", weight: 9000, season: "summer", country: "China" },
    { name: "Grape", taste: "sweet", color: "purple/green", weight: 5, season: "summer-fall", country: "China" },
    { name: "Kiwi", taste: "sweet-tart", color: "green", weight: 75, season: "fall-winter", country: "New Zealand" },
    { name: "Blueberry", taste: "sweet", color: "blue", weight: 1, season: "summer", country: "USA" },
    { name: "Peach", taste: "sweet", color: "orange-yellow", weight: 150, season: "summer", country: "China" },
    { name: "Cherry", taste: "sweet-tart", color: "red", weight: 8, season: "summer", country: "Turkey" },
    { name: "Lemon", taste: "sour", color: "yellow", weight: 110, season: "year-round", country: "India" },
    { name: "Lime", taste: "sour", color: "green", weight: 67, season: "year-round", country: "Mexico" },
    { name: "Avocado", taste: "creamy", color: "green", weight: 200, season: "year-round", country: "Mexico" },
    { name: "Papaya", taste: "sweet", color: "orange", weight: 800, season: "year-round", country: "India" },
    { name: "Guava", taste: "sweet-tart", color: "green/pink", weight: 100, season: "year-round", country: "India" },
    { name: "Pomegranate", taste: "sweet-tart", color: "red", weight: 280, season: "fall", country: "Iran" },
    { name: "Coconut", taste: "sweet", color: "brown", weight: 1500, season: "year-round", country: "Indonesia" },
    { name: "Dragon Fruit", taste: "mild-sweet", color: "white/pink", weight: 400, season: "summer", country: "Vietnam" },
    { name: "Lychee", taste: "sweet", color: "red/white", weight: 20, season: "summer", country: "China" },
    { name: "Passion Fruit", taste: "tart-sweet", color: "purple/yellow", weight: 50, season: "summer", country: "Brazil" },
    { name: "Raspberry", taste: "sweet-tart", color: "red", weight: 4, season: "summer", country: "Russia" },
    { name: "Blackberry", taste: "sweet-tart", color: "black", weight: 5, season: "summer", country: "Mexico" },
    { name: "Cranberry", taste: "tart", color: "red", weight: 2, season: "fall", country: "USA" },
    { name: "Apricot", taste: "sweet-tart", color: "orange", weight: 70, season: "summer", country: "Turkey" },
    { name: "Plum", taste: "sweet", color: "purple/red", weight: 80, season: "summer", country: "China" },
    { name: "Pear", taste: "sweet", color: "green/yellow", weight: 180, season: "fall", country: "China" },
    { name: "Fig", taste: "sweet", color: "purple/green", weight: 50, season: "summer-fall", country: "Turkey" },
    { name: "Jackfruit", taste: "sweet", color: "yellow", weight: 35000, season: "summer", country: "India" },
    { name: "Durian", taste: "sweet-pungent", color: "yellow", weight: 3000, season: "summer", country: "Thailand" },
    { name: "Starfruit", taste: "sweet-tart", color: "yellow", weight: 100, season: "year-round", country: "Malaysia" },
    { name: "Mangosteen", taste: "sweet-tart", color: "purple/white", weight: 80, season: "summer", country: "Indonesia" },
    { name: "Rambutan", taste: "sweet", color: "red", weight: 40, season: "summer", country: "Thailand" },
    { name: "Persimmon", taste: "sweet", color: "orange", weight: 168, season: "fall", country: "China" },
    { name: "Tangerine", taste: "sweet", color: "orange", weight: 85, season: "winter", country: "China" },
    { name: "Grapefruit", taste: "bitter-sweet", color: "pink/yellow", weight: 300, season: "winter", country: "China" },
    { name: "Kumquat", taste: "sweet-tart", color: "orange", weight: 20, season: "winter", country: "China" },
    { name: "Nectarine", taste: "sweet", color: "orange-red", weight: 140, season: "summer", country: "China" },
    { name: "Honeydew", taste: "sweet", color: "green", weight: 2000, season: "summer", country: "China" },
    { name: "Cantaloupe", taste: "sweet", color: "orange", weight: 1500, season: "summer", country: "China" },
    { name: "Date", taste: "very sweet", color: "brown", weight: 8, season: "fall-winter", country: "Egypt" },
    { name: "Gooseberry", taste: "tart", color: "green/red", weight: 5, season: "summer", country: "India" },
    { name: "Elderberry", taste: "tart", color: "black", weight: 3, season: "summer", country: "USA" },
    { name: "Mulberry", taste: "sweet-tart", color: "black/red", weight: 4, season: "summer", country: "China" },
    { name: "Acai Berry", taste: "tart", color: "purple", weight: 1, season: "year-round", country: "Brazil" },
    { name: "Goji Berry", taste: "sweet-tart", color: "red", weight: 1, season: "summer", country: "China" },
    { name: "Soursop", taste: "sweet-tart", color: "white", weight: 4000, season: "year-round", country: "Venezuela" },
    { name: "Custard Apple", taste: "sweet", color: "green", weight: 500, season: "summer", country: "India" },
    { name: "Tamarind", taste: "sour-sweet", color: "brown", weight: 15, season: "spring", country: "India" },
    { name: "Breadfruit", taste: "mild", color: "green", weight: 2000, season: "year-round", country: "Jamaica" },
    { name: "Salak", taste: "sweet-sour", color: "brown", weight: 80, season: "summer", country: "Indonesia" },
    { name: "Longan", taste: "sweet", color: "brown", weight: 10, season: "summer", country: "China" },
    { name: "Cherimoya", taste: "sweet", color: "green", weight: 500, season: "winter", country: "Peru" },
    { name: "Feijoa", taste: "sweet-tart", color: "green", weight: 80, season: "spring", country: "New Zealand" },
    { name: "Quince", taste: "tart", color: "yellow", weight: 200, season: "fall", country: "Turkey" },
    { name: "Prickly Pear", taste: "sweet", color: "red/purple", weight: 150, season: "summer-fall", country: "Mexico" },
    { name: "Jujube", taste: "sweet", color: "red/brown", weight: 15, season: "fall", country: "China" },
    { name: "Kiwano", taste: "sweet-tart", color: "orange", weight: 200, season: "summer", country: "New Zealand" },
    { name: "Blood Orange", taste: "sweet-tart", color: "red", weight: 180, season: "winter", country: "Italy" },
    { name: "Mandarin", taste: "sweet", color: "orange", weight: 80, season: "winter", country: "China" },
    { name: "Plantain", taste: "starchy", color: "green/yellow", weight: 180, season: "year-round", country: "Uganda" },
    { name: "Ackee", taste: "mild", color: "red/yellow", weight: 100, season: "year-round", country: "Jamaica" },
    { name: "Jabuticaba", taste: "sweet", color: "purple", weight: 5, season: "spring", country: "Brazil" },
    { name: "Langsat", taste: "sweet-sour", color: "yellow", weight: 20, season: "summer", country: "Malaysia" },
    { name: "Mamey Sapote", taste: "sweet", color: "brown", weight: 800, season: "summer", country: "Mexico" },
    { name: "Noni", taste: "bitter", color: "white", weight: 200, season: "year-round", country: "French Polynesia" },
    { name: "Pawpaw", taste: "sweet", color: "yellow", weight: 400, season: "fall", country: "USA" },
    { name: "Sapodilla", taste: "sweet", color: "brown", weight: 150, season: "year-round", country: "Mexico" },
    { name: "Sugar Apple", taste: "sweet", color: "green", weight: 400, season: "summer", country: "India" },
    { name: "Miracle Fruit", taste: "sweetens sour", color: "red", weight: 2, season: "year-round", country: "Ghana" },
    { name: "Yuzu", taste: "tart", color: "yellow", weight: 120, season: "winter", country: "Japan" },
    { name: "Finger Lime", taste: "citrus-burst", color: "various", weight: 10, season: "winter", country: "Australia" },
    { name: "Buddha's Hand", taste: "fragrant", color: "yellow", weight: 500, season: "winter", country: "China" },
    { name: "Pomelo", taste: "sweet-mild", color: "green/yellow", weight: 2000, season: "winter", country: "China" },
    { name: "Ugli Fruit", taste: "sweet-tangy", color: "green-orange", weight: 600, season: "winter", country: "Jamaica" },
    { name: "Maracuja", taste: "tart-sweet", color: "yellow", weight: 80, season: "summer", country: "Brazil" },
    { name: "Rollinia", taste: "sweet", color: "yellow", weight: 600, season: "summer", country: "Brazil" },
    { name: "Wax Apple", taste: "mild-sweet", color: "red/pink", weight: 80, season: "summer", country: "Taiwan" },
    { name: "Velvet Apple", taste: "sweet", color: "red", weight: 200, season: "summer", country: "Philippines" },
    { name: "African Cucumber", taste: "mild", color: "orange", weight: 400, season: "summer", country: "South Africa" },
    { name: "Cashew Apple", taste: "sweet-tart", color: "red/yellow", weight: 100, season: "spring", country: "Brazil" },
    { name: "Monstera Deliciosa", taste: "pineapple-banana", color: "green", weight: 800, season: "year-round", country: "Mexico" },
    { name: "Santol", taste: "sweet-sour", color: "yellow", weight: 150, season: "summer", country: "Philippines" },
    { name: "Lucuma", taste: "sweet-caramel", color: "yellow", weight: 300, season: "winter", country: "Peru" },
    { name: "Cupuaçu", taste: "chocolate-pineapple", color: "brown", weight: 800, season: "summer", country: "Brazil" },
    { name: "Baobab Fruit", taste: "tart", color: "white", weight: 150, season: "dry season", country: "Madagascar" },
    { name: "Tayberry", taste: "sweet-tart", color: "dark red", weight: 8, season: "summer", country: "Scotland" },
    { name: "Calamansi", taste: "sour", color: "green-orange", weight: 15, season: "year-round", country: "Philippines" },
    { name: "Hala Fruit", taste: "sweet", color: "orange", weight: 200, season: "year-round", country: "Hawaii" },
    { name: "Ice Apple", taste: "sweet", color: "white", weight: 100, season: "summer", country: "India" },
    { name: "Kaffir Lime", taste: "bitter-sour", color: "green", weight: 80, season: "year-round", country: "Thailand" },
    { name: "Marula", taste: "sweet-tart", color: "yellow", weight: 50, season: "summer", country: "South Africa" },
    { name: "Pequi", taste: "cheesy-citrus", color: "yellow", weight: 200, season: "spring", country: "Brazil" },
    { name: "Rose Apple", taste: "mild-sweet", color: "red/green", weight: 80, season: "summer", country: "Indonesia" },
    { name: "Salak Pondoh", taste: "sweet-sour", color: "brown", weight: 90, season: "summer", country: "Indonesia" },
    { name: "Surinam Cherry", taste: "sweet-tart", color: "red/black", weight: 5, season: "spring", country: "Brazil" }
];

//define route
app.get("/one", function (request, response) {
    response.render('one'); //it will execute pug file and nodejs returns html page 
});

app.get("/two", function (request, response) {
    response.render('two'); //it will execute pug file and nodejs returns html page 
});

app.get("/three", function (request, response) {
    response.render('three'); //it will execute pug file and nodejs returns html page 
});

app.get("/variable", function (request, response) {
    response.render("variables", {
        name: "Ram kumar",
        gender: "Male",
        age: 30,
        weight: 65.25,
        mobile: "1234567890"
    });
});
app.get('/loop1', function (request, response) {
    response.render('four', {
        data: countries
    });
});

app.get('/loop1', function (request, response) {
    response.render('four', {
        data: countries
    });
});

app.get('/loop2', function (request, response) {
    response.render('five', {
        data: fruits
    });
});
app.get('/loop3', function (request, response) {
    response.render('six', {
        data: basket
    });
});

app.get('/aboutus', function (request, response) {
    response.render('aboutus');
});

app.get('/bookhall', function (request, response) {
    response.render('bookhall');
});

app.get('/home', function (request, response) {
    response.render('home');
});

app.get('/testimonials', function (request, response) {
    //fetch all rows from testimonials table of frontend49 database and pass it into pug file
    let sql = "SELECT * FROM testimonials order by id desc";
    connection.con.query(sql, function (error, result) 
    {
        if (error != null) {
            response.render('error');
        }
        else {
            response.render('testimonials', {
                data: result
            });
        }
    });
});

app.get('/menu', function (request, response) {
    response.render('menu');
});

app.listen(5000);
console.log('ready...');
