import React, { useRef, useEffect } from 'react'

export const useDidUpdate = (callback: Function, deps: any[]): void => {
  const hasMount = useRef(false);

  useEffect(() => {
    if (hasMount.current) {
      callback();
    } else {
      hasMount.current = true
    }
  }, deps);
};
