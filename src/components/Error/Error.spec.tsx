import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Error } from './Error';

describe('Error component', () => {
  it('should render error-message', () => {
    render(<Error message="TEXT"></Error>);
    expect(screen.getByText('TEXT')).toBeInTheDocument();
  });
})