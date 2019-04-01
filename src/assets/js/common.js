class Common {
  static debounce (func, duration) {
    /**
     * @param {Function} func 需要截流的函数
     * @param {Number} duration 截流间隔
     */
    let timer = null
    return (...args) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        func.apply(this, args)
      }, duration)
    }
  }
}
export default Common