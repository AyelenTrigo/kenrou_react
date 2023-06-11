import React from 'react';
import { render, screen } from '@testing-library/react';
// import App from './App';
import Prueba from './Prueba';

test('renders learn react link', () => {
  render(<Prueba />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
