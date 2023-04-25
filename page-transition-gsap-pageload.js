$(document).ready(function() {
  // GSAP Animation
  gsap.fromTo('[page-transition-bg-radius="target"]', {
    borderTopLeftRadius: '0%',
    borderTopRightRadius: '0%',
  }, {
    duration: 1,
    borderTopLeftRadius: '100%',
    borderTopRightRadius: '100%',
    ease: 'power4.inOut',
    delay: 1.5
  });
});
