const User = require('../user')

describe('The User Model', async () => {
  it('should create a user', async () => {
    const user = new User({
      firstName: 'Tester',
      lastName: 'McTester',
      email: 'testermctester@example.com',
      token: 'tester-token-here',
    })
    const result = await user.save()
    expect(result).not.toBeNull()
  })
  it('should create a user and then update', async () => {
    const user = new User({
      firstName: 'Tester2',
      lastName: 'McTester',
      email: 'testermctester@example.com',
      token: 'tester-token-here',
    })
    const result = await user.save()
    expect(result).not.toBeNull()
    user.set('firstName', 'Deuce')
    const result2 = await user.save(null, { method: 'update' })
    expect(result2).not.toBeNull()
  })
})
