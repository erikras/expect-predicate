import expect from 'expect'
import expectPredicate from '../index'

describe('toPass', () => {
  before(() => {
    expect.extend(expectPredicate)
  })

  it('throws when the actual value does not pass the predicate', () => {
    expect(() => {
      expect(42).toPass(n => n < 40)
    }).toThrow(/Expected 42 to pass/)
  })

  it('throws with custom message when the actual value does not pass the predicate', () => {
    expect(() => {
      expect(42).toPass(n => n < 40, 'Should be under forty')
    }).toThrow('Should be under forty')
  })
  
  it('does not throws when the actual value passes the predicate', () => {
    expect(() => {
      expect(42).toPass(n => n > 40)
    }).toNotThrow()
  })
})
