if (process.env.NODE_ENV === 'production') {
    module.exports = {
        mongodbURL: 'mongodb://admin:admin123@ds113873.mlab.com:13873/vue-restful-api-prod',
        secretOrKey:'secret',
    }
} else {
    module.exports = {
        mongodbURL: 'mongodb://127.0.0.1:27017/vue-restful-api-dev',
        secretOrKey:'secret',
    }
}