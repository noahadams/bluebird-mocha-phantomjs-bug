define(['bluebird'], function(Promise){
	describe('promisify', function() {
		var t = function(callback) {
			callback(null, true);
		};

		it('should make a function return a promise', function(done) {
			var tAsync = Promise.promisify(t);
			var tPromise = tAsync();
			assert.ok(Promise.is(tPromise), 'it\'s a promise')
			tPromise.then(function(result) {
				assert.ok(result, 'it fulfills as expected');
				done();
			});
		});
	});
});
