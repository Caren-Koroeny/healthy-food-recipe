import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Loading from '../components/Loading';

describe('Loading Component', () => {
  it('Renders Loading', () => {
    const { container } = render(<Loading />);
    expect(screen.getByText('loading...')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Renders only loading', () => {
    const { container } = render(<Loading />);
    expect(screen.queryByText('Welcome')).not.toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
