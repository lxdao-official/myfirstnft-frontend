export const Page = {
  variants: {
    initial: ({ isInitialRender, direction }) =>
      isInitialRender
        ? {
            opacity: 1,
            top: '0vh',
          }
        : {
            opacity: 0,
            top: direction === 'down' ? '100vh' : '-100vh',
          },
    animate: {
      opacity: 1,
      top: '0vh',
    },
    exit: ({ direction }) => ({
      opacity: 0,
      top: direction === 'down' ? '-100vh' : '100vh',
    }),
  },
  transition: {
    duration: 0.7,
  },
};

export function createParticle(x, y) {
  // A list of all possible colors
  const COLORS = ['#FFFEA6', '#CBCDFB', '#FBBD78'];
  // Defines the particle number
  const PARTICLES_NUMBER = 20;
  const element = document.createElement('div');
  element.style.width = '20px';
  element.style.height = '20px';
  element.style.borderRadius = '50%';
  // The elements are in absolute position
  element.style.position = 'absolute';
  element.style.top = `${y}px`;
  element.style.left = `${x}px`;
  // We want our cursor to be centered in the square
  element.style.transform = 'translate(-50%, -50%)';
  // Get a color randomly
  element.style.backgroundColor =
    COLORS[Math.floor(Math.random() * COLORS.length)];

  const animation = element.animate(
    [
      {
        // Math.random() - 0.5 returns integer between -0.5 and 0.5
        transform: `translate(${(Math.random() - 0.5) * 500}px, ${
          (Math.random() - 0.5) * 500
        }px) rotate(${Math.random() * 520}deg)`,
        // We want to reduce the opacity until 0
        opacity: 0,
      },
    ],
    1500
  );

  // Remove the particle at the end of animation
  animation.finished.then(() => element.remove());

  document.body.appendChild(element);
}
