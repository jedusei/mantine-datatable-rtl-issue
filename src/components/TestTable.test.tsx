import { describe, it } from 'vitest';
import { render, screen, waitFor } from '@test-utils';
import { TestTable } from './TestTable';
import { airports } from '@/mocks/airports';

describe('Mantine datatable test', () => {
  it('should render table', async () => {
    render(<TestTable />);
    expect(screen.getAllByRole('row').length).toBeGreaterThanOrEqual(airports.length);
    screen.logTestingPlaygroundURL();
    await waitFor(() => expect(screen.getByText('CFV')).toBeInTheDocument());
  });
});
