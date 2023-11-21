import {
  DashboardIcon,
  UserIcon,
  ClipboardIcon,
  NoteIcon,
  CirclesIcon,
  MapIcon,
  BellIcon
} from '@/components/icons';
import type { Component } from 'vue';

interface NavElement {
  icon: Component;
  to: string;
  text: string;
}

export const NAV_LIST: NavElement[] = [
  { icon: DashboardIcon, text: 'Dashboard', to: '/dashboard' },
  { icon: UserIcon, text: 'User Profile', to: '/user' },
  { icon: ClipboardIcon, text: 'Table List', to: '/table' },
  { icon: NoteIcon, text: 'Typography', to: '/typography' },
  { icon: CirclesIcon, text: 'Icons', to: '/icons' },
  { icon: MapIcon, text: 'Maps', to: '/maps' },
  { icon: BellIcon, text: 'Notifications', to: '/notifications' }
];
