import type { TableHeadersType } from '@/types/table';

export const TABLE_DATA: (string | number)[][] = [
  [1, 'Dakota Rice', 36738, 'Niger', 'Oud-Turnhout'],
  [2, 'Minerva Hooper', 23738, 'Curaçao', 'Sinaai-Waas'],
  [3, 'Sage Rodriguez', 56142, 'Netherlands', 'Baileux'],
  [4, 'Philip Chaney', 38735, 'Korea', 'Gloucester'],
  [5, 'Doris Greene', 63542, 'Malawi', 'Feldkirchen in Kärnten'],
  [6, 'Mason Porter', 78615, 'Chile', 'Gloucester']
];

export const TABLE_HEADERS: TableHeadersType[] = [
  { caption: 'id', field: 'id', type: 'number', width: 40 },
  { caption: 'Name', field: 'name', type: 'string', width: 150 },
  { caption: 'Salary', field: 'salary', type: 'number', width: 100 },
  { caption: 'Country', field: 'country', type: 'string', width: 150 },
  { caption: 'City', field: 'city', type: 'string', width: 300 }
];

export const TABLE_OPTIONS = {
  adjust: true,
  // columnWidth: 200,
  useCheckbox: {
    use: true,
    mode: 'multi'
  }
};
