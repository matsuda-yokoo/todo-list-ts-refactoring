"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filteredTodoListState = exports.todoListStatsState = void 0;
const recoil_1 = require("recoil");
const atom_1 = require("./atom");
exports.todoListStatsState = (0, recoil_1.selector)({
    key: 'todoListStatsState',
    get: ({ get }) => {
        const todoList = get(atom_1.todoListState);
        const totalNum = todoList.length;
        const totalCompleteNum = todoList.filter((item) => item.isComplete).length;
        const totalUnCompleteNum = totalNum - totalCompleteNum;
        return {
            totalNum,
            totalCompleteNum,
            totalUnCompleteNum,
        };
    },
});
exports.filteredTodoListState = (0, recoil_1.selector)({
    key: 'filteredTodoListState',
    get: ({ get }) => {
        const filter = get(atom_1.todoListFilterState);
        const list = get(atom_1.todoListState);
        switch (filter) {
            case '完了':
                return list.filter((item) => item.isComplete);
            case '未完了':
                return list.filter((item) => !item.isComplete);
            default:
                return list;
        }
    }
});
