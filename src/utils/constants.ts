import type { TableData } from '@/types/table';
import { BugIcon, CloudIcon, CodeIcon } from '@/components/icons';
import type { TodoCategory, TodoType } from '@/types/todo';

export const TODO_LIST: Record<string, TodoType[]> = {
  bugs: [
    {
      title: 'Sign contract for "What are conference organizers afraid of?"',
      isDone: false
    },
    {
      title: 'Lines From Great Russian Literature? Or E-mails From My Boss?',
      isDone: false
    },
    {
      title:
        'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
      isDone: false
    }
  ],
  website: [
    {
      title: 'Sign contract for "What are conference organizers afraid of?"',
      isDone: false
    },
    {
      title: 'Lines From Great Russian Literature? Or E-mails From My Boss?',
      isDone: false
    },
    {
      title:
        'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
      isDone: false
    }
  ],
  server: [
    {
      title: 'Sign contract for "What are conference organizers afraid of?"',
      isDone: false
    },
    {
      title: 'Lines From Great Russian Literature? Or E-mails From My Boss?',
      isDone: false
    },
    {
      title:
        'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
      isDone: false
    }
  ]
};

export const TODO_CATEGORIES: TodoCategory[] = [
  { icon: BugIcon, title: 'Bugs' },
  { icon: CodeIcon, title: 'Website' },
  { icon: CloudIcon, title: 'Server' }
];

export const TABLE_DATA: TableData[] = [
  { id: 1, name: 'Dakota Rice', salary: 36738, country: 'Niger', city: 'Oud-Turnhout' },
  { id: 2, name: 'Minerva Hooper', salary: 23738, country: 'Curaçao', city: 'Sinaai-Waas' },
  { id: 3, name: 'Sage Rodriguez', salary: 56142, country: 'Netherlands', city: 'Baileux' },
  { id: 4, name: 'Philip Chaney', salary: 38735, country: 'Korea, South', city: 'Gloucester' },
  { id: 5, name: 'Doris Greene', salary: 63542, country: 'Malawi', city: 'Feldkirchen in Kärnten' },
  { id: 6, name: 'Mason Porter', salary: 78615, country: 'Chile', city: 'Gloucester' }
];

export const TABLE_HEADERS = ['id', 'name', 'salary', 'country', 'city'];
