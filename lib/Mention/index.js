'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

var _immutable = require('immutable');

var _unionClassNames = require('union-class-names');

var _unionClassNames2 = _interopRequireDefault(_unionClassNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MentionLink = function MentionLink(_ref) {
  var mention = _ref.mention;
  var mentionPrefix = _ref.mentionPrefix;
  var children = _ref.children;
  var className = _ref.className;
  return _react2.default.createElement(
    'a',
    {
      href: mention.get('link'),
      className: className,
      spellCheck: false
    },
    mentionPrefix,
    children
  );
};

var MentionText = function MentionText(_ref2) {
  var mentionPrefix = _ref2.mentionPrefix;
  var children = _ref2.children;
  var className = _ref2.className;
  return _react2.default.createElement(
    'span',
    {
      className: className,
      spellCheck: false
    },
    mentionPrefix,
    children
  );
};

var Mention = function Mention(props) {
  var entityKey = props.entityKey;
  var _props$theme = props.theme;
  var theme = _props$theme === undefined ? {} : _props$theme;
  var mentionComponent = props.mentionComponent;
  var mentionPrefix = props.mentionPrefix;
  var children = props.children;
  var decoratedText = props.decoratedText;
  var className = props.className;


  var combinedClassName = (0, _unionClassNames2.default)(theme.mention, className);
  var mention = (0, _immutable.fromJS)(_draftJs.Entity.get(entityKey).getData().mention);

  var Component = mentionComponent || (mention.has('link') ? MentionLink : MentionText);

  return _react2.default.createElement(
    Component,
    {
      entityKey: entityKey,
      mention: mention,
      theme: theme,
      className: combinedClassName,
      mentionPrefix: mentionPrefix,
      decoratedText: decoratedText
    },
    children
  );
};

exports.default = Mention;