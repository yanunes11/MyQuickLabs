import React from 'react';
import ComponentWithProps from './ComponentWithProps';
const MyComponent = () => {
    return (
    <>
        <h1>Hello World</h1>
        <ComponentWithProps />
        <ComponentWithProps
        content="Content passed from props" // SP1.1
        number={10} // SP1.2
        />
    </> // CWP8
 );
};

export default MyComponent

