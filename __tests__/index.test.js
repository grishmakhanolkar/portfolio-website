import { render } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';

const mockBlogs = [
  {
    title: 'Firebase for Login and Logout— Part 1',
    link: 'https://medium.com/p/c99d0022a467',
    categories: [
      'firebaseauthentication',
      'firestore',
      'google-oauth',
      'authentication',
      'firebase',
    ],
  },
  {
    title: 'React Router v6',
    link: 'https://medium.com/p/5736a7718335',
    categories: ['react', 'react-router-v6'],
  },
  {
    title: 'Navigating to Nested React Components',
    link: 'https://medium.com/p/d4f68331537',
    categories: [
      'javascript',
      'react',
      'programming',
      'material-design',
      'portfolio',
    ],
  },
];

const mockGotBlogs = true;

it('loads and displays home 1', async () => {
  expect(
    render(<Home blogs={mockBlogs} gotBlogs={mockGotBlogs} />)
  ).toMatchSnapshot();
});
it('loads and displays home 2', async () => {
  expect(
    render(<Home blogs={mockBlogs} gotBlogs={!mockGotBlogs} />)
  ).toMatchSnapshot();
});
