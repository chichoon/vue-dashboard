import type { InjectionKey } from 'vue';

import type { TodoInjection } from '@/types/todo';

export const TodoInjectionKey: InjectionKey<TodoInjection> = Symbol('todo-value');
