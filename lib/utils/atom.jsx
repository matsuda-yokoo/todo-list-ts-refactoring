"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoListFilterState = exports.todoListState = void 0;
const recoil_1 = require("recoil");
exports.todoListState = (0, recoil_1.atom)({
    key: "todoListState",
    default: [],
});
exports.todoListFilterState = (0, recoil_1.atom)({
    key: "todoListFilterState",
    default: "すべて"
});
