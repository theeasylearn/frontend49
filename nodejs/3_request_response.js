var http = require('http');
var server = http.createServer(function (request, response) {
    const url = request.url; //read only 
    let output = ''; //
    console.log(url);
    if (url === '/') {
        output = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Home - My Company</title></head><body><h1>Welcome to Our Company</h1><p>Welcome to our official website! We are a leading provider of innovative solutions that empower businesses and individuals worldwide. With years of expertise and a passionate team, we deliver high-quality products and services tailored to your needs. Our mission is to simplify technology, enhance productivity, and create lasting value for our customers. Explore our products, discover our professional services, and learn more about who we are. Thank you for visiting us today. We look forward to serving you and building a successful partnership together. Your success is our priority!</p></body></html>';
    }
    else if (url === '/aboutus') {
        output = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>About Us - My Company</title></head><body><h1>About Us</h1><p>We are a forward-thinking company established in 2015 with a vision to transform industries through innovation and excellence. Our dedicated team consists of skilled professionals who bring creativity and technical expertise to every project. We believe in integrity, customer satisfaction, and continuous improvement. Over the years, we have served hundreds of clients across various sectors, earning their trust through reliable solutions and outstanding support. Our core values drive everything we do, ensuring sustainable growth and positive impact. Get to know the people behind our success and the principles that guide us daily.</p></body></html>';
    }
    else if (url === '/product') {
        output = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Products - My Company</title></head><body><h1>Our Products</h1><p>Discover our cutting-edge product lineup designed to meet diverse needs and exceed expectations. From powerful software applications to advanced hardware solutions, each product is crafted with precision and the latest technology. We offer user-friendly interfaces, robust performance, and regular updates to keep you ahead. Our flagship products include cloud management tools, security systems, productivity suites, and custom enterprise solutions. Every item undergoes rigorous testing to ensure reliability and efficiency. Browse our catalog and find the perfect tools to boost your operations and achieve your goals with confidence.</p></body></html>';
    }
    else if (url === '/service') {
        output = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Services - My Company</title></head><body><h1>Our Services</h1><p>We provide comprehensive professional services to help your business thrive in a competitive landscape. Our offerings include consulting, system integration, custom development, 24/7 technical support, training programs, and cloud migration. Our certified experts work closely with you to understand requirements and deliver tailored solutions on time and within budget. We focus on scalability, security, and long-term success. Whether you need one-time implementation or ongoing managed services, we are your trusted partner committed to excellence and measurable results. Let us handle the complexity while you focus on growth.</p></body></html>';

    }
    else if (url === '/contactus') {
        output = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Contact Us - My Company</title></head><body><h1>Contact Us</h1><p>We would love to hear from you! Reach out with questions, feedback, or partnership inquiries. Our team is available Monday to Friday, 9 AM to 6 PM. Email: info@mycompany.com | Phone: +1 (555) 123-4567 | Address: 123 Business Avenue, Suite 500, City, State 12345. You can also fill out the contact form on this page, and we will respond within 24 hours. Stay connected through our social media channels for the latest updates and announcements. Your satisfaction matters to us!</p></body></html>';
    }
    else {
        output = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>404 - Page Not Found</title><style>body{font-family:Arial,sans-serif;text-align:center;padding:50px;background:#f8f9fa;color:#333}h1{font-size:100px;margin:0;color:#dc3545}h2{font-size:36px;margin:20px 0}p{font-size:18px;margin:20px 0}a{color:#007bff;text-decoration:none;font-weight:bold}a:hover{text-decoration:underline}</style></head><body><h1>404</h1><h2>Oops! Page Not Found</h2><p>Sorry, the page you are looking for doesnt exist or has been moved.</p > <p><a href="index.html">Go Back to Home</a></p></body ></html >';
    }
    response.writeHead(200, { 'content-type': 'text/html' });
    response.write(output);
    response.end();
});
server.listen(5000);
console.log('ready to accept request');