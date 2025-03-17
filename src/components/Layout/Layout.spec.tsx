import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, vi, expect } from 'vitest';
import { Layout } from '../Layout/Layout';

vi.mock('../Button/Button', () => ({
  Button: ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => (
    <button onClick={onClick}>{children}</button>
  ),
}));

const mockOnAddRow = vi.fn();

describe('Layout Component', () => {
  it('renders title and subtitle correctly', () => {
    render(
      <Layout title="Test Title" subTitle="Test Subtitle" onAddRow={mockOnAddRow}>
        <div>Child Component</div>
      </Layout>
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
    expect(screen.getByText('Child Component')).toBeInTheDocument();
  });

  it('renders button with correct text', () => {
    render(
      <Layout title="Title" subTitle="Subtitle" onAddRow={mockOnAddRow} buttonText="Click Me">
        <div>Child Component</div>
      </Layout>
    );

    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('calls onAddRow when button is clicked', () => {
    const mockOnAddRow = vi.fn();

    render(
      <Layout title="Title" subTitle="Subtitle" onAddRow={mockOnAddRow} buttonText="Add Row">
        <div>Child Component</div>
      </Layout>
    );

    const button = screen.getByText('Add Row');
    fireEvent.click(button);

    expect(mockOnAddRow).toHaveBeenCalledTimes(1);
  });
});
