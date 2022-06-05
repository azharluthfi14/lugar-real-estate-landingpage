export function srConfig(delay = 200, viewFactor = 0.25) {
  return {
    origin: "bottom",
    distance: "50px",
    duration: 200,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: "ease-in",
    mobile: true,
    reset: false,
    useDelays: "always",
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  };
}
