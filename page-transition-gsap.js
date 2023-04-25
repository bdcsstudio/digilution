$(document).on('page-transition', function() {
  // GSAP Animation
  gsap.fromTo('[page-transition-bg-radius="target"]', {
    borderTopLeftRadius: '100%',
    borderTopRightRadius: '100%',
  }, {
    duration: 1,
    borderTopLeftRadius: '0%',
    borderTopRightRadius: '0%',
    ease: 'power4.inOut',
    delay: 0.2
  });
});
