// arrayUtils.js
// Funzioni di utilità per array comuni e ottimizzate

const ArrayUtils = {
  /**
   * Restituisce un array con elementi unici, mantenendo l’ordine originale.
   * @param {Array} arr 
   * @returns {Array}
   */
  unique(arr) {
    return [...new Set(arr)];
  },

  /**
   * Applica una funzione a ogni elemento dell’array e restituisce un nuovo array filtrato
   * mantenendo solo gli elementi per cui la funzione ritorna true.
   * @param {Array} arr 
   * @param {Function} predicate 
   * @returns {Array}
   */
  filterMap(arr, predicate) {
    return arr.reduce((acc, el) => {
      if (predicate(el)) acc.push(el);
      return acc;
    }, []);
  },

  /**
   * Divide un array in chunks di dimensione data.
   * @param {Array} arr 
   * @param {number} size 
   * @returns {Array<Array>}
   */
  chunk(arr, size) {
    if (size <= 0) throw new Error('Chunk size must be positive');
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  },

  /**
   * Controlla se due array sono uguali (elementi e ordine).
   * @param {Array} arr1 
   * @param {Array} arr2 
   * @returns {boolean}
   */
  equals(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
};

// Esempio d’uso:
// console.log(ArrayUtils.unique([1,2,2,3])); // [1,2,3]
// console.log(ArrayUtils.chunk([1,2,3,4,5], 2)); // [[1,2],[3,4],[5]]

export default ArrayUtils;
