import { render } from '@testing-library/react';
import Blogs from './Blogs';
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
];

it('loads and displays about', async () => {
  expect(render(<Blogs blogs={mockBlogs} />)).toMatchSnapshot();
});
