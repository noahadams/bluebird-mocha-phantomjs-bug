require.config({
    baseUrl: '.',
    paths: {
        'mocha': 'node_modules/mocha/mocha',
        'chai': 'node_modules/chai/chai',
        'bluebird': 'node_modules/bluebird/js/browser/bluebird'
    },
    shim: {
        'mocha': {
            init: function() {
                return this.mocha;
            }
        }
    }
});

require([
    'require',
    'chai',
    'mocha'
], function(require, chai, mocha) {

    mocha.setup('bdd');

    var tests = [
        'promisify-test.js'
    ];

    require(tests, function() {
        assert = chai.assert;
        expect = chai.expect;

        if (window.mochaPhantomJS) {
            return window.mochaPhantomJS.run();
        }
        mocha.run();
    });
});
