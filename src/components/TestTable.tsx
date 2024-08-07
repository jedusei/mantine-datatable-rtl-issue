import { DataTable } from 'mantine-datatable';
import { airports } from '@/mocks/airports';

import '@mantine/core/styles.layer.css';
import 'mantine-datatable/styles.css';
import 'mantine-datatable/styles.layer.css';

export function TestTable() {
  return (
    <DataTable
      idAccessor="icao"
      columns={[
        { title: 'Name', accessor: 'name' },
        { title: '3 letter code', accessor: 'icao' },
        { title: 'Elevation', accessor: 'elv' },
      ]}
      records={airports}
    />
  );
}
