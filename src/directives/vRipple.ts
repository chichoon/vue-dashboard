export const vRipple = {
  mounted(el: HTMLElement, binding: { value: string }) {
    const color = '#' + (binding.value || 'FFFFFF');
    el.style.position = 'relative';
    el.style.overflow = 'hidden';
    el.onclick = function (event: MouseEvent) {
      const circle = document.createElement('div');
      const offset = el.getBoundingClientRect();
      const x = event.pageX - offset.left - document.body.scrollLeft;
      const y = event.pageY - offset.top - document.body.scrollTop;
      circle.setAttribute(
        'style',
        `background-color: ${color}; width: 5px; height: 5px; opacity: 0; border-radius: 100em; position: absolute; top: ${y}px; left: ${x}px; animation: ripple 0.4s 1 ease-in-out;`
      );
      el.append(circle);
      event.stopPropagation();
      circle.addEventListener('animationend', function () {
        el.removeChild(circle);
      });
    };
  }
};
