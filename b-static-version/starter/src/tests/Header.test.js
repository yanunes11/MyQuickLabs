import React from 'react'; // 3
import { create } from 'react-test-renderer'; // 3
import Header from '../Components/Header'; // 4
test('Header matches snapshot', () => { // 5
 const header = create(<Header />); // 5.1
 expect(header.toJSON()).toMatchSnapshot(); // 5.2
});
