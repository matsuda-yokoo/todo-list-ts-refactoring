/// <reference types="react" />
type Todo = {
    id: number;
    title: string;
    isComplete: boolean;
};
type Item = {
    item: Todo;
};
declare const TodoItem: React.FC<Item>;
export default TodoItem;
