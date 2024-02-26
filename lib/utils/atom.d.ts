type Todo = {
    id: number;
    title: string;
    isComplete: boolean;
};
export declare const todoListState: import("recoil").RecoilState<Todo[]>;
export declare const todoListFilterState: import("recoil").RecoilState<string>;
export {};
