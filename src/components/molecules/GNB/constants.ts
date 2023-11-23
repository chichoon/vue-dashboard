import {
  DashboardIcon,
  UserIcon,
  ClipboardIcon,
  NoteIcon,
  CirclesIcon,
  MapIcon,
  BellIcon,
  AlertIcon,
  ArrowIcon,
  BugIcon,
  CalendarIcon,
  CancelIcon,
  CheckIcon,
  ClockIcon,
  CodeIcon,
  CogIcon,
  CopyIcon,
  HamburgerIcon,
  HeartIcon,
  InfoIcon,
  LabelIcon,
  PencilIcon,
  StoreIcon,
  TimePastIcon,
  TriangleIcon,
  TwitterIcon,
  UploadIcon,
  VueIcon,
  CloudIcon
} from '@/components/icons';
import type { IconType } from '@/types/common';
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

export const ICON_LIST: Record<IconType, Component> = {
  alert: AlertIcon,
  arrow: ArrowIcon,
  bell: BellIcon,
  bug: BugIcon,
  calendar: CalendarIcon,
  cancel: CancelIcon,
  check: CheckIcon,
  circles: CirclesIcon,
  clipboard: ClipboardIcon,
  clock: ClockIcon,
  cloud: CloudIcon,
  code: CodeIcon,
  cog: CogIcon,
  copy: CopyIcon,
  dashboard: DashboardIcon,
  hamburger: HamburgerIcon,
  heart: HeartIcon,
  info: InfoIcon,
  label: LabelIcon,
  map: MapIcon,
  note: NoteIcon,
  pencil: PencilIcon,
  store: StoreIcon,
  timepast: TimePastIcon,
  triangle: TriangleIcon,
  twitter: TwitterIcon,
  upload: UploadIcon,
  user: UserIcon,
  vue: VueIcon
};
