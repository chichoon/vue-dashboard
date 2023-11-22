import { type Component, type Ref } from 'vue';

export interface TodoType {
  title: string;
  isDone: boolean;
}

export interface TodoInjectionType {
  selected: Ref<number>;
  changeSelected: (index: number) => void;
}

export interface TodoCategoryType {
  icon: Component;
  title: string;
}
