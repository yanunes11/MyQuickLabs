import React from "react";
import { mockComponent } from "react-dom/test-utils";
import { create } from "react-test-renderer";
import AllTodos from "../Components/AllTodos";
import Todo from "../Components/Todo";
import TodoModel from "../Components/utils/Todo.model";

jest.mock("../Components/utils/Todo.model", () => {
    return class TodoModel {
        constructor() {
            this.todoDescription = 'Test Todo',
            this.todoCreated = '2019-05-04T15:30:00.000z';
            this.todoCompleted = true
        }
    }
});

test('it should render 2 tds with className completed if props.todo.todoCompleted is true', () => {
    const testTodo = new TodoModel();
    const testRenderer = create(
        <Todo todo={testTodo}/>
    );
    const testInstance = testRenderer.root;
    const cells = testInstance.findAllByType('td');
    for (let i = 0; i < (cells.length - 1); i++) {
        expect(cells[i].props.className).toBe('completed');
    }
});

test('it should render 2 tds with className completed if props.todo.todoCompleted is falsy', () => {
    const testTodo = new TodoModel();
    testTodo.todoCompleted = false;
    const testRenderer = create(
        <Todo todo={testTodo}/>
    );
    const testInstance = testRenderer.root;
    const cells = testInstance.findAllByType('td');
    for (let i = 0; i < (cells.length - 1); i++) {
        expect(cells[i].props.className).toBeFalsy();
    }
});

test('it should render `N/A` in the last td of the row if props.todo.todoCompleted is true', () => {
    const testTodo = new TodoModel();
    const testRenderer = create(
        <Todo todo={testTodo}/>
    );
    const testInstance = testRenderer.root;
    const cells = testInstance.findAllByType('td');
    expect(cells[cells.length - 1].children).toContain('N/A');
});

test('it should render edit in the last td of the row if props.todo.TodoCompleted is falsy', () => {
    const testTodo = new TodoModel();
    testTodo.todoCompleted = false;
    const testRenderer = create(
        <Todo todo={testTodo}/>
    );
    const testInstance = testRenderer.root;
    const links = testInstance.findAllByType('a');
    for (let i = 0; i < (links.length - 1); i++) {
        expect(links[i].children).toContain('Edit');
    }
});