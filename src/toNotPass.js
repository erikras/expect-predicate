import { assert } from 'expect'

export default function toNotPass(predicate, message) {
  assert(
    !predicate(this.actual),
    (message || 'Expected %s to NOT pass predicate $s'),
    this.actual,
    predicate.toString()
  )
}
