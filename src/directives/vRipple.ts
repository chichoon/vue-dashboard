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
    };

    el.onanimationend = function (event: AnimationEvent) {
      console.log(event);
      // event가 animataion name으로 target이 가능하다
      // onclick 안에 이벤트 핸들러를 중첩시키는 것은 좋지 않다
      // 메모리 이슈
    };
  }
};
