/**
 * Throttle function para optimizar scroll listeners
 * @param {Function} func - Función a throttle
 * @param {number} delay - Delay en milisegundos
 * @returns {Function} Función throttled
 */
export const throttle = (func, delay) => {
  let timeoutId;
  let lastExecTime = 0;
  
  return function (...args) {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      func.apply(this, args);
      lastExecTime = currentTime;
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
};

/**
 * RequestAnimationFrame throttle para mejor rendimiento
 * @param {Function} func - Función a throttle
 * @returns {Function} Función throttled con RAF
 */
export const rafThrottle = (func) => {
  let rafId;
  
  return function (...args) {
    if (rafId) {
      return;
    }
    
    rafId = requestAnimationFrame(() => {
      func.apply(this, args);
      rafId = null;
    });
  };
}; 