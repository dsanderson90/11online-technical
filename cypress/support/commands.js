// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("login", () => {
cy.request({
	method: 'POST',
	url: 'http://cypresstestground.local/wp-login.php',
	body: {
		user: {
			username: Cypress.env("wp_admin"),
			password: Cypress.env("wp_pass")
		}
	}
})
	.then((resp) => {
		console.log(resp)
	// window.localStorage.setItem('jwt', resp.body.user.token)

	})
})

//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
