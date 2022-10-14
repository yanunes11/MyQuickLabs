import React from "react";
import { act, create } from "react-test-renderer";
import TodoForm from "../Components/TodoForm";

jest.mock('../Components/utils/DateCreated', () => {
    return function MockDateCreated() {
        return (
            <span testid="dateCreated">
                Date Created Component
            </span>
        );
    }
});

// DATE CREATED FIELD
describe('Todo form suite', () => {
    describe('DateCreated function and render tests', () => {
        test('it should render a DateCreated component date', () => {
            const testRenderer = create(
                <TodoForm />
            );
            const testInstance = testRenderer.root;
            const dateCreated = testInstance.find(
                el => el.type === 'span' && el.props.testid === 'dateCreated'
            );
            expect(dateCreated).toBeTruthy;
            expect(dateCreated.children).toContain('Date Created Component');
        });
    });
});

// ONCHANGE EVENTS
describe('onChange test event', () => {

    // DESCRIPTION FIELD
    test('it should render the new value in the input when todoDescription onChange is activated', () => {
        const testValue = 'Test';
        const testRenderer = create(<TodoForm/>);
        const testInstance = testRenderer.root;
        const descInput = testInstance.findByProps({name: "todoDescription"});
        expect(descInput.props.value).toBe('');
        act(() => {
            descInput.props.onChange({target: {value: testValue}})
        });
        expect(descInput.props.value).toBe(testValue);
    });

    // COMPLETED FIELD
    test('it should change render the new value in the checkbox when the todoCompleted onChange is activated', () => {
        const testValue = true;
        const testRenderer = create(<TodoForm/>);
        const testInstance = testRenderer.root;
        const compInput = testInstance.findByProps({name: "todoCompleted"});
        expect(compInput.props.checked).toEqual(false);
        act(() => {
            compInput.props.onChange({target: {checked: testValue}});
        });
        expect(compInput.props.checked).toBe(testValue);
    });

    // SUBMIT BUTTON
    test('it should disable property changes from true to false when description is populated', () => {
        const testValue = 'Test';
        const testRenderer = create(<TodoForm />);
        const testInstance = testRenderer.root;
        const descInput = testInstance.findByProps({name: "todoDescription"});
        const submitBtn = testInstance.findByProps({type: "submit"});
        expect(submitBtn.props.disabled).toBe(true);
        act(() => {
            descInput.props.onChange({target: {value: testValue}});
        });
        expect(submitBtn.props.disabled).toBe(false);
        expect(submitBtn.props.className).toContain("btn-primary");
    });
});

