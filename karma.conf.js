module.exports = function(config) {
    config.set({
        browsers: ['Firefox', 'Safari'],
        files: ['test/*.js'],
        frameworks: ['browserify', 'mocha'],
        plugins: [
            'karma-browserify',
            'karma-mocha',
            'karma-mocha-reporter',
            'karma-firefox-launcher',
            'karma-safari-launcher',
            'karma-detect-browsers'
        ],
        preprocessors: {
            'test/*.js': ['browserify']
        },
        reporters: ['mocha'],
        singleRun: true,

        browserify: {
            debug: true,
            transform: ['babelify']
        },

        detectBrowsers: {
            enabled: true,
            usePhantomJS: false
        },

        client: {
            mocha: {
                grep: '@nodeonly',
                invert: true
            }
        }
    });
};
