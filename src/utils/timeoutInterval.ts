import type { Ref } from 'vue';

export function timeoutInterval(timeoutID: Ref<number>, callback: () => void) {
  timeoutID.value = setTimeout(() => {
    callback();
    timeoutInterval(timeoutID, callback);
  }, 1000);
}
