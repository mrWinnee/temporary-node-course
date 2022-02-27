const _ = require('lodash');

let items = [1, 5, [2, [3, [4]]]];
let newItems = _.flattenDeep(items);

console.log(newItems);