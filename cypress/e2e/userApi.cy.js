describe('user test api', () => {
  it('add user', () => {
    cy.query('POST').then((response) => {
      expect(response.status).be.eq(200)
      expect(response.body).be.eql({
        id: 1,
        username: "vssmirnova",
        firstName: "Viktoria",
        lastName: "Smirnova",
        email: "vs96@mail.ru",
        password: "pass",
        phone: "+79115645897",
        userStatus: 1
      })
    })
  })
  
  it('update user', () => {
    cy.query('POST').then((response) => {
      expect(response.status).be.eq(200);
      cy.request('PUT', '/user/{smirnovavs}').then((response) => {
        expect(response.status).be.eq(200)
        expect(response.body).be.eql({
          id: 1,
          username: "smirnovavs",
          firstName: "Viktoria",
          lastName: "Smirnova",
          email: "vs96@mail.ru",
          password: "pass",
          phone: "+79115645897",
          userStatus: 1
        })
      })
    })
  })
  
  it('delete user', () => {
    cy.query('POST')
    cy.request('DELETE', '/user/{vssmirnova}').then((response) => {
      expect(response.status).be.eq(200)
    })
  })
})
