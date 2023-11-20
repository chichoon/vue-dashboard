export function createLinearGradient(color: string) {
  return `linear-gradient(60deg, var(--notification-${color}), var(--notification-${color}-dark))`;
}
