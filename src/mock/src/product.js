/**
 * 作者：yeshengqiang
 * 时间：2018-06-22
 * 描述：product.js
 */

import { mockApi, findDetail } from '../config.js';
import * as soundBoard from '../data/soundBoard.json';
import * as soundAbsorption from '../data/soundAbsorption.json';
// import * as industry from '../data/industry.json';
// import * as enterprise from '../data/enterprise.json';
// 分页
const findPage = (opt, arr) => {
    let result = {
        currentNo: opt.pageNo,
        dataList: [],
        total: arr.length
    };
    const start = (opt.pageNo - 1) * opt.pageSize;
    const end = start + opt.pageSize;
    result.dataList = arr.slice(start, end);
    return result;
};

mockApi.onGet('/api/product/soundBoard/list').reply(args => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve([200, {
               code: 0,
               data: findPage(args.params, soundBoard),
               message: 'ok'
           }]);
       }, 1000);
    });
});

mockApi.onGet('/api/product/soundBoard/detail').reply(args => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve([200, {
               code: 0,
               data: findDetail(args.params.id, soundBoard),
               message: 'ok'
           }]);
       }, 1000);
    });
});

mockApi.onGet('/api/product/soundAbsorption/list').reply(args => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve([200, {
               code: 0,
               data: findPage(args.params, soundAbsorption),
               message: 'ok'
           }]);
       }, 1000);
    });
});

mockApi.onGet('/api/product/soundAbsorption/detail').reply(args => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve([200, {
               code: 0,
               data: findDetail(args.params.id, soundAbsorption),
               message: 'ok'
           }]);
       }, 1000);
    });
});