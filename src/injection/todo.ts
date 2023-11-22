import type { InjectionKey } from 'vue';

import type { TodoInjectionType } from '@/types/todo';

export const TodoInjectionKey: InjectionKey<TodoInjectionType> = Symbol('todo-value');
