// Counter.test.js

import Counter from '../Counter';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Counter', () => {
  it('render correctly', () => {
    renderCounter();
    expect(screen.getByText('Counter Test')).toBeInTheDocument();
  });

  it('increment count when the increment button is Clicked', () => {
    renderCounter();
    const button = screen.getByText('plus');
    fireEvent.click(button);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('decrement count when decrement button is clicked', () => {
    renderCounter();
    const button = screen.getByText('minus');
    fireEvent.click(button);
    expect(screen.getByText('-1')).toBeInTheDocument();
  });
});

function renderCounter() {
  return render(<Counter />);
}
