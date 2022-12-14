import { render } from '@testing-library/react';
import About from '../components/about/About';
import '@testing-library/jest-dom';

it('loads and displays about', async () => {
  expect(render(<About />)).toMatchSnapshot();
});
