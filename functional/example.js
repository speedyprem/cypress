describe('WP Login test', () => {
    it('successfully loads', () => {
      cy.visit('http://test:8888/liveblog/wp-admin/') 

      cy.get('#user_login').type('superadmin')
      cy.get('#user_pass').type('superadmin')

      cy.get('#wp-submit').click()

      //Add new article
      cy.get('#menu-posts').click()
      cy.get('.page-title-action').click()

    })
  })