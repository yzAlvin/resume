import { a as patchEsm, b as bootstrapLazy } from './core-ad12fe05.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["az-resume_2", [[1, "az-resume", { "showDownloadLink": [4, "show-download-link"] }], [1, "svg-icon", { "name": [1], "small": [4] }]]]], options);
    });
};
export { defineCustomElements };
