
const echarts = require('echarts/lib/echarts');


// require("echarts/lib/chart/map")
// require('echarts/lib/component/geo')
require('echarts/lib/chart/bar');
require('echarts/lib/chart/line');
require('echarts/lib/component/grid');
require('./china.js')
// (function () {
//   for (let key in echarts) {
//     if (echarts == null || !echarts.hasOwnProperty(key) || key === 'default' || key === '__esModule') return
//     exports[key] = echarts[key]
//   }
// })()

// let _export = require("echarts/lib/export")

// (function () {
//   for (let key in _export) {
//     if (_export == null || !_export.hasOwnProperty(key) || key === 'default' || key === '__esModule') return
//     exports[key] = _export[key]
//   }
// })()

export default echarts