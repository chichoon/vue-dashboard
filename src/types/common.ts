export type ClassType = string | Record<string, boolean> | (string | Record<string, boolean>)[];
export type ColorType = 'info' | 'success' | 'warning' | 'danger' | 'primary';
export type GNBImageType = 1 | 2 | 3 | 4;
export type FontSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type IconType =
  | 'alert'
  | 'arrow'
  | 'bell'
  | 'bug'
  | 'calendar'
  | 'cancel'
  | 'check'
  | 'circles'
  | 'clipboard'
  | 'clock'
  | 'cloud'
  | 'code'
  | 'cog'
  | 'copy'
  | 'dashboard'
  | 'hamburger'
  | 'heart'
  | 'info'
  | 'label'
  | 'map'
  | 'note'
  | 'pencil'
  | 'store'
  | 'timepast'
  | 'triangle'
  | 'twitter'
  | 'upload'
  | 'user'
  | 'vue';

export interface SettingsType {
  color: ColorType;
  image: GNBImageType;
}
