import { describe, it } from 'vitest';
import { render, screen, waitFor } from '@test-utils';
import { TestTable } from './TestTable';
import { airports } from '@/mocks/airports';
import { debug } from 'vitest-preview';

describe('Mantine datatable test', () => {
  it('should render table', async () => {
    render(<TestTable />);
    expect(screen.getAllByRole('row').length).toBeGreaterThanOrEqual(airports.length);
    debug()
    await waitFor(() => expect(screen.getByText('CFV')).toBeInTheDocument());
  });
});
