import { assert } from 'expect'

export default function toPass(predicate, message) {
  assert(
    predicate(this.actual),
    (message || 'Expected %s to pass predicate $s'),
    this.actual,
    predicate.toString()
  )
}
