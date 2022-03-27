const targetedUrl = 'https://marmelab.com/react-admin-demo/'
const username = '[name*="username"]'
const password = '[name*="password"]'
const signinBtn = 'Sign in'

export const loginMarmelab = {
	launchLoginPage () {
		cy.visit(targetedUrl)
	}
	enterUsername (args) {
		cy.get(username)
			.click()
			.clear()
			.type(args)
	}
	enterPassword (args) {
		cy.get(password)
			.click()
			.clear()
			.type(args)
	}
	submitForm () {
		cy.contains(signinBtn).click()
	}

	signIn () {
		cy.fixture('testdata').then((data) => {
    			this.enterUsername(data.username)
    			this.enterPassword(data.password)
    			this.submitForm()
    			cy.wait(1000)
    		})
  	}

  	verifyLoginSuccess () {
		cy.fixture('testdata').then((data) => {
      			cy.contains(data.account).should('exist')
    		})
    	}
}
