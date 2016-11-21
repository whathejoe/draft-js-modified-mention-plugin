/* @flow */

import findWithRegex from 'find-with-regex';
import escapeRegExp from 'lodash.escaperegexp';

export default (trigger: String, regExp: String) => (contentBlock: Object, callback: Function) => {
  findWithRegex(new RegExp(`${escapeRegExp(trigger)}${regExp}`, 'g'), contentBlock, callback);
};
