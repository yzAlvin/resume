import { a as patchEsm, b as bootstrapLazy } from './core-ad12fe05.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["az-resume_2",[[1,"az-resume",{"showDownloadLink":[4,"show-download-link"]}],[1,"svg-icon",{"name":[1],"small":[4]}]]]], options);
  });
};

export { defineCustomElements };
