// src/__tests__/CreateProduct.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import CreateProduct from '../components/CreateProduct'; 

describe('CreateProduct Component', () => {
  test('should accept input for Product Name', () => {
    render(
      <MemoryRouter>
        <CreateProduct />
      </MemoryRouter>
    );

    const input = screen.getByLabelText(/Product Name:/i);
    fireEvent.change(input, { target: { value: 'Test Product' } });
    expect(input.value).toBe('Test Product');
  });

  test('should save and display selected form options', () => {
    render(
      <MemoryRouter>
        <CreateProduct />
      </MemoryRouter>
    );

  });
});
