Cypress.Commands.add('query', (how) => {
    cy.request( how, '/user', {
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