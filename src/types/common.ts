export type ClassType = string | Record<string, boolean> | (string | Record<string, boolean>)[];
export type ColorType = 'info' | 'success' | 'warning' | 'danger' | 'primary';
export type GNBImageType = 1 | 2 | 3 | 4;

export interface SettingsType {
  color: ColorType;
  image: GNBImageType;
}
