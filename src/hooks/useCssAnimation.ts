import React from 'react'

type TimingFunction = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear' | 'step-start' | 'step-end' | 'steps' | 'cubic-bezier';

export const useCssAnimation = (ref: any | any[], animatedProperty: string, timingFunction: TimingFunction, duration: number, delay = 0): () => void => {
  const setAnimation = (reference: React.RefObject<any>): void => {
    if (reference) {
      const { current: elem } = reference;

      const animationEndHandler = (e: any) => {
        elem.style.transition = '';

        elem.removeEventListener('transitionend', animationEndHandler);
      };

      elem.style.transition = `${animatedProperty} ${duration}ms ${timingFunction} ${delay}ms`;

      elem.addEventListener('transitionend', animationEndHandler);
    }
  };

  return (): void => {
    if (ref) {
      if (ref.length) {
        ref.forEach(setAnimation);
      } else {
        setAnimation(ref);
      }
    }
  }
};
