import DashboardIcon from '@/components/icons/DashboardIcon.vue';
import UserIcon from '@/components/icons/UserIcon.vue';
import ClipboardIcon from '@/components/icons/ClipboardIcon.vue';
import NoteIcon from '@/components/icons/NoteIcon.vue';
import CirclesIcon from '@/components/icons/CirclesIcon.vue';
import MapIcon from '@/components/icons/MapIcon.vue';
import BellIcon from '@/components/icons/BellIcon.vue';
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
