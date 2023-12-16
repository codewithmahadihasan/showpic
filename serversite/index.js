const express = require('express')
const app = express()
const port = 10000
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const UserRoute = require('./Modules/Users/User/UserModule.js')
const JWT = require('./Modules/Users/UserRoute.js')
const Image = require('./Modules/Image/ImageModule.js')


// middle ware 
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


// API version 1 routes
app.get('/api/v1/', (req, res) => {
    res.send('Welcome to showPic Api');
});

app.use('/api/v1/user', UserRoute)
app.use('/api/v1/image', Image)
app.use('/api/v1/jwt', JWT)





// Error Handling Middleware
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: 'Not Found the API',
        errorMessages: [
            {
                path: req.originalUrl,
                message: 'API Not Found',
            },
        ],
    });
    next();
});


app.use((err, req, res, next) => {
    if (err instanceof Error) {
        const message = err.message;
        const errorMessages = message
            ? [
                {
                    path: '',
                    message,
                },
            ]
            : [];

        console.error('Global Error Handler: ', err);

        res.status(500).json({
            status: false,
            message: 'An error occurred',
            errors: errorMessages,
        });
    } else {
        next(err);
    }
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})