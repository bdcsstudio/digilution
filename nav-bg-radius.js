const targets = document.querySelectorAll('[gsap-menu-bg-radius="target"]');
const trigger = document.querySelector('[gsap-menu-bg-radius="trigger"]');
let isOpen = false;

// Stel de beginwaarde van de border-radius eigenschap in op 100%
targets.forEach((target) => {
  gsap.set(target, {
    borderTopLeftRadius: "100%",
    borderTopRightRadius: "100%"
  });
});

trigger.addEventListener("click", function () {
  isOpen = !isOpen;
  targets.forEach((target) => {
    gsap.to(target, {
      duration: 1,
      borderTopLeftRadius: isOpen ? "0%" : "100%",
      borderTopRightRadius: isOpen ? "0%" : "100%",
      ease: "power4.inOut",
      delay: isOpen ? 0.2 : isOpen ? 0 : 0.3 // Voeg een vertraging van 0,6 seconden toe als het menu opent
    });
  });
});
