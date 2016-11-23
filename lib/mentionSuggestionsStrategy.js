'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _findWithRegex = require('find-with-regex');

var _findWithRegex2 = _interopRequireDefault(_findWithRegex);

var _lodash = require('lodash.escaperegexp');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (trigger) {
  return function (contentBlock, callback) {
    // common chinese symbols: \u4e00-\u9eff - http://stackoverflow.com/a/1366113/837709
    // hiragana (japanese): \u3040-\u309F - https://gist.github.com/ryanmcgrath/982242#file-japaneseregex-js
    // katakana (japanese): \u30A0-\u30FF - https://gist.github.com/ryanmcgrath/982242#file-japaneseregex-js
    (0, _findWithRegex2.default)(new RegExp('(\\s|^|.)' + (0, _lodash2.default)(trigger) + '[\\w一-黿぀-ゟ゠-ヿ]*', 'g'), contentBlock, callback);
  };
};