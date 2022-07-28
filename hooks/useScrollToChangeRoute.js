import debounce from 'lodash.debounce';
import { useRouter } from 'next/router';
import React from 'react';
import { routes } from '../common/routes';

const threshold = 32;

export default function useScrollToChangeRoute() {
  const router = useRouter();
  const [isInitialRender, setIsInitialRender] = React.useState(true);
  const [direction, setDirection] = React.useState('down');
  const isTransitioningRef = React.useRef(false);

  const scrollDown = React.useMemo(
    () =>
      debounce(
        (routeIndex) => {
          isTransitioningRef.current = true;
          setDirection('down');
          router.push(routes[routeIndex + 1]);
          setIsInitialRender(false);
          isTransitioningRef.current = false;
        },
        300,
        { leading: true, trailing: false }
      ),
    []
  );
  const scrollUp = React.useMemo(
    () =>
      debounce(
        (routeIndex) => {
          isTransitioningRef.current = true;
          setDirection('up');
          router.push(routes[routeIndex - 1]);
          setIsInitialRender(false);
          isTransitioningRef.current = false;
        },
        300,
        { leading: true, trailing: false }
      ),
    []
  );

  React.useEffect(() => {
    const onWheel = (e) => {
      if (isTransitioningRef.current) {
        return;
      }
      const { deltaY } = e;

      const routeIndex = routes.indexOf(router.pathname);

      if (routeIndex === -1) return;

      if (deltaY > threshold) {
        if (routeIndex === routes.length - 1) {
          return;
        }
        scrollDown(routeIndex);
      }
      if (deltaY < -threshold) {
        if (routeIndex === 0) {
          return;
        }
        scrollUp(routeIndex);
      }
    };

    document.addEventListener('wheel', onWheel);

    return () => {
      document.removeEventListener('wheel', onWheel);
    };
  }, [router.pathname]);

  return { direction, isInitialRender };
}
