"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const recoil_1 = require("recoil");
const selector_1 = require("../utils/selector");
function TodoListStats() {
    const { totalNum, totalCompleteNum, totalUnCompleteNum } = (0, recoil_1.useRecoilValue)(selector_1.todoListStatsState);
    return (<ul>
            <li>Todoの登録数:{totalNum}</li>
            <li>完了したTodoの数:{totalCompleteNum}</li>
            <li>未完了のTodoの数:{totalUnCompleteNum}</li>
        </ul>);
}
exports.default = TodoListStats;
