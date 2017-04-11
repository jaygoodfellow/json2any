/* jshint node: true, deve: true, browserify: true */
'use strict';

var json2any = function (options) {
  var self = this;
  if (!options.source) throw 'Source data is required';
  if (!options.format) throw 'Format is required';

  this.converter = {
      csv: function (callback) {
        console.log('csv test')
      },
      tsv: function (id, callback) {
        console.log('tsv test')
      }
  }
  return this.converter
}

module.exports = json2any;
