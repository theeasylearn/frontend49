// api.js
require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
var users = require('./users_v2.js');
var categories = require('./category_v2.js');
var app = express();
//define middleware (required to access input via post/put/delete method)
app.use(express.urlencoded({ 'extended': true }));
app.use(bodyParser.json());
const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-change-me-immediately';

// Reusable JWT verification middleware
function verifyToken(request, response, next) {
    const authHeader = request.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

    if (!token) {
        return response.status(401).json([{ error: 'no' }, { success: 'no' }, { message: 'Token is required' }]);
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err != null) {
            return response.status(403).json([{ error: 'no' }, { success: 'no' }, { message: 'Invalid or expired token' }]);
        }
        request.user = decoded; // attach user info (e.g. { id: 5 })
        next();
    });
}
//define routes 
const USERS_ROUTE = "/users";
const CATEGORY_ROUTE = "/category";

app.post(USERS_ROUTE + "/register", (req, res) => users.register(req, res));
app.post(USERS_ROUTE + "/login", (req, res) => users.login(req, res, JWT_SECRET));
app.post(USERS_ROUTE + "/change_password", verifyToken, (req, res) => users.change_password(req, res));
app.post(USERS_ROUTE + "/recover_password", (req, res) => users.forgot_password(req, res));

// Routes - Categories
app.get(CATEGORY_ROUTE + '/:start?', (req, res) => categories.select(req, res));

// Protected category routes (only authenticated users)
app.post(CATEGORY_ROUTE, verifyToken, (req, res) => categories.insert(req, res));
app.put(CATEGORY_ROUTE, verifyToken, (req, res) => categories.update(req, res));
app.delete(CATEGORY_ROUTE, verifyToken, (req, res) => categories.delete(req, res));

const PORTNO = 5000;
app.listen(PORTNO);
console.log('ready to accept request');