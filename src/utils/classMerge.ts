import type { ClassType } from '@/types/common';

export function classMerge(
  ...args: (ClassType | undefined)[]
): (string | Record<string, boolean>)[] {
  return args.reduce<(string | Record<string, boolean>)[]>((acc, cur) => {
    if (Array.isArray(cur)) {
      acc.push(...cur);
    } else if (typeof cur === 'object') {
      acc.push(cur);
    } else if (typeof cur === 'string') {
      acc.push(cur);
    }
    return acc;
  }, []);
}
