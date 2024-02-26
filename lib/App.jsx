"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.css");
const TodoList_1 = __importDefault(require("./components/TodoList"));
const recoil_1 = require("recoil");
function App() {
    return (<div style={{ margin: '2rem' }}>
      <recoil_1.RecoilRoot>
        <TodoList_1.default />
      </recoil_1.RecoilRoot>
    </div>);
}
exports.default = App;
