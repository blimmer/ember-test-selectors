/*jshint node:true*/
var StringTestSelectorsTransform = require('./strip-test-selectors');

module.exports = {
  name: 'test-selectors',

  setupPreprocessorRegistry: function(type, registry) {
    if (registry.app.env !== 'development' && registry.app.env !== 'test') {
      registry.add('htmlbars-ast-plugin', {
        name: 'strip-test-selectors',
        plugin: StringTestSelectorsTransform
      });
    }
  }
};
