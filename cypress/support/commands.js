Cypress.Commands.add('query', (query, url, id, username, firstName, lastName, email, password, phone, userStatus) => {
    cy.request( query, url, {
          id,
          username,
          firstName,
          lastName,
          email,
          password,
          phone,
          userStatus
    })
})