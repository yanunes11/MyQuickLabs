import React from 'react'; // 3
import { create } from 'react-test-renderer'; // 3
import Footer from '../Components/Footer'; // 4
test('Footer matches snapshot', () => { // 5
 const footer = create(<Footer />); // 5.1
 expect(footer.toJSON()).toMatchSnapshot(); // 5.2
});
