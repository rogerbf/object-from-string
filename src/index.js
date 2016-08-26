module.exports = delimiter => {
  if (typeof delimiter !== 'string') throw new TypeError('expecting a string')
  return str => {
    if (typeof str !== 'string') throw new TypeError('expecting a string')
    if (str.indexOf(delimiter) === -1) return {}
    const key = str.slice(0, str.indexOf(delimiter)).trim()
    const value = str.slice(str.indexOf(delimiter) + 1).trim()
    return { [key]: (value.length !== 0 ? value : {}) }
  }
}
