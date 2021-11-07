'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-29b5319b.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["az-resume_2.cjs",[[1,"az-resume",{"showDownloadLink":[4,"show-download-link"]}],[1,"svg-icon",{"name":[1],"small":[4]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
