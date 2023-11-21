import BugIcon from '@/components/icons/BugIcon.vue';
import CloudIcon from '@/components/icons/CloudIcon.vue';
import CodeIcon from '@/components/icons/CodeIcon.vue';
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
