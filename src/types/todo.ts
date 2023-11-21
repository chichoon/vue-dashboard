import { type Component, type InjectionKey, type Ref } from 'vue';

export interface TodoType {
  title: string;
  isDone: boolean;
}

export interface TodoInjection {
  selected: Ref<number>;
  changeSelected: (index: number) => void;
}

export interface TodoCategory {
  icon: Component;
  title: string;
}
