import type { DirectiveBinding } from 'vue';

interface ClickableHTMLElement extends HTMLElement {
  handleClickOutside: (event: MouseEvent) => void;
}

export const vClickOutside = {
  mounted(el: ClickableHTMLElement, binding: DirectiveBinding) {
    el.handleClickOutside = (event: MouseEvent) => {
      if (!(el === event.target || el.contains(event.target as HTMLElement)))
        binding.value(event, el);
    };

    document.addEventListener('click', el.handleClickOutside);
  },

  unmounted(el: ClickableHTMLElement) {
    document.removeEventListener('click', el.handleClickOutside);
  }
};
