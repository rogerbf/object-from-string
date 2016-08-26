const test = require('tape')
const createObject = require('./index.js')

test('is a function', assert => {
  assert.equal(typeof createObject, 'function')
  assert.end()
})

test('calling with delimiter returns a function', assert => {
  assert.equal(typeof createObject(':'), 'function')
  assert.end()
})

test('createObject(\':\')(\'marvin : android\')', assert => {
  assert.looseEqual(createObject(':')('marvin : android'), { marvin : 'android' })
  assert.end()
})

test('createObject(\',\')(\'captain: jean-luc picard\')', assert => {
  assert.looseEqual(createObject(',')('captain: jean-luc picard'), {})
  assert.end()
})

test('throws with no argument or type other than string', assert => {
  assert.throws(() => createObject(), TypeError)
  assert.throws(() => createObject(Number()), TypeError)
  assert.throws(() => createObject(Array()), TypeError)
  assert.throws(() => createObject(Object()), TypeError)
  assert.throws(() => createObject(':')(Number()), TypeError)
  assert.throws(() => createObject(':')(Array()), TypeError)
  assert.throws(() => createObject(':')(Object()), TypeError)
  assert.end()
})
