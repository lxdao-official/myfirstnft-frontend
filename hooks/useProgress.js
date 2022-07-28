import React from 'react';

const LocalStorageProgressKey = 'MyFirstNFT/progress';

/**
 * type ProgressCompleted = Record<string, boolean>;
 * type ProgressSteps = Array<{ id: string; title: string; description: string }>;
 *
 * interface ProgressContextType {
 *  steps: ProgressSteps;
 *  setSteps: (val: ProgressSteps) => void;
 *  completed: ProgressCompleted;
 *  completedPercentile: number;
 *  completeStep: () => void;
 *  redoStep: () => void;
 *  stepperExpanded: boolean;
 *  setStepperExpanded: (val: boolean) => void;
 *  activeStep: number;
 *  setActiveStep: (val: number) => void;
 * }
 */

export const ProgressContext = React.createContext();

export default function useProgress() {
  const progressLoaded = React.useRef(false);
  const [stepperExpanded, setStepperExpanded] = React.useState(false);
  const [completed, setCompleted] = React.useState({});
  const [steps, setSteps] = React.useState([]);
  const [activeStep, setActiveStep] = React.useState(-1);

  const completedPercentile = React.useMemo(() => {
    return Math.round(
      (Object.keys(completed).filter((key) => completed[key] === true).length /
        steps.length) *
        100
    );
  }, [completed, steps]);

  // Load saved progress
  React.useEffect(() => {
    try {
      const saved =
        JSON.parse(window.localStorage.getItem(LocalStorageProgressKey)) || {};

      setCompleted(saved);
    } catch {}
    progressLoaded.current = true;
  }, []);

  // Save progress on change
  React.useEffect(() => {
    if (!progressLoaded.current) return;
    window.localStorage.setItem(
      LocalStorageProgressKey,
      JSON.stringify(completed)
    );
  }, [completed]);

  const completeStep = (id, relocation = false) => {
    setCompleted((prev) => ({
      ...prev,
      [id]: true,
    }));

    if (relocation) {
      const ele = document.getElementById(`section/${id}`);
      const fixedHeader = document.getElementById('fixed-header');
      const fixedHeaderRect = fixedHeader.getBoundingClientRect();
      window.scrollTo(0, ele.offsetTop - fixedHeaderRect.height);
    }
  };

  const redoStep = (id) => {
    setCompleted((prev) => ({
      ...prev,
      [id]: false,
    }));
  };

  return {
    steps,
    setSteps,
    completed,
    completedPercentile,
    completeStep,
    redoStep,
    stepperExpanded,
    setStepperExpanded,
    activeStep,
    setActiveStep,
  };
}
