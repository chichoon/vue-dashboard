interface ClickableHTMLElement extends HTMLElement {
  handleClickOutside: (event: MouseEvent) => void;
}

export const vClickOutside = {
  mounted(el: ClickableHTMLElement, binding: { value: () => void }) {
    el.handleClickOutside = (event: MouseEvent) => {
      if (el && !el.contains(event.target as HTMLElement)) binding.value();
    };

    document.addEventListener('click', el.handleClickOutside);
  },
  unmounted(el: ClickableHTMLElement) {
    document.removeEventListener('click', el.handleClickOutside);
  }
};
