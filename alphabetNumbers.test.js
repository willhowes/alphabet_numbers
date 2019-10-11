const alphabetNumbers = require('./alphabetNumbers')

describe('alphabetNumbers', () => {
  it('returns 1 for "a"', () => {
    expect(alphabetNumbers('a')).toEqual('1')
  })
})
