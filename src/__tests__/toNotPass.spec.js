import expect from 'expect'
import expectPredicate from '../index'

describe('toNotPass', () => {
  before(() => {
    expect.extend(expectPredicate)
  })

  it('throws when the actual value passes the predicate', () => {
    expect(() => {
      expect(42).toNotPass(n => n > 40)
    }).toThrow(/Expected 42 to NOT pass/)
  })
  
  it('throws with custom message when the actual value passes the predicate', () => {
    expect(() => {
      expect(42).toNotPass(n => n > 40, 'Should not be over forty')
    }).toThrow('Should not be over forty')
  })
  
  it('does not throws when the actual value does not pass the predicate', () => {
    expect(() => {
      expect(42).toNotPass(n => n < 40)
    }).toNotThrow()
  })
})
