import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { IpForm } from './IpForm';

vi.mock('../IpRow', () => ({
  IpRow: ({ order }: { order: number }) => <div data-testid="ip-row">{order}</div>,
}));

describe('IpForm', () => {
  it('renders without crashing', () => {
    render(<IpForm rows={[]} />);
  });

  it('renders correct number of IpRow components', () => {
    render(<IpForm rows={[1, 2, 3]} />);
    const rows = screen.getAllByTestId('ip-row');
    expect(rows.length).toBe(3);
  });

  it('assigns correct order numbers to IpRow components', () => {
    render(<IpForm rows={[10, 20, 30]} />);
    const rows = screen.getAllByTestId('ip-row');

    expect(rows[0]).toHaveTextContent('1');
    expect(rows[1]).toHaveTextContent('2');
    expect(rows[2]).toHaveTextContent('3');
  });

  it('renders nothing when rows is empty', () => {
    const { container } = render(<IpForm rows={[]} />);
    expect(container).toBeEmptyDOMElement();
  });
});
