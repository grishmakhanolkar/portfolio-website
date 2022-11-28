
// import {render} from '@testing-library/react'
// import '@testing-library/jest-dom'
// // import React from 'react';
// import About from './About'

// test('expect to render about component', () =>{
//     const {container} = render(<About/>);
//     expect(container).toMatchSnapshot()
// })

import { render } from '@testing-library/react'
import About from './About'
import '@testing-library/jest-dom'


it('loads and displays about', async () => {
  // ARRANGE

  expect(render(<About />)).toMatchSnapshot()
  // ACT
  //   await userEvent.click(screen.getByText('Load Greeting'))
  //   await screen.findByRole('heading')

  // ASSERT
  // expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  // expect(screen.getByRole('button')).toBeDisabled()
})