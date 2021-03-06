var should = require('should');
var compare = require('./util/compare');

describe('xsl:call-temaplte', function() {

    it('simple', function(done) {
        compare('call-template', function(err, src, res) {
            should.not.exist(err);
            src.should.equal(res);
            done();
        });
    });
    it('with-param', function(done) {
        compare('call-template-with-params', function(err, src, res) {
            should.not.exist(err);
            src.should.equal(res);
            done();
        });
    });
});

