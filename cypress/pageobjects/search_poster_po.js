const posterBtn = 'Posters'
const searchPosterBox = '[id=q]'
const 

export const searchPoster = {
	launchPosterPage () {
		cy.get(posterBtn).click()
	}
	searchBoxAction (args) {
		cy.get(searchPosterBox)
			.click()
			.clear()
			.type(args)
	}

	searchPoster () {
		cy.fixture('testdata').then((data) => {
      			this.searchBoxAction(data.searchkeyword)
      			cy.wait(2000)
		}
    	}		

  	verifyPosterDisplayed () {
  		cy.fixture('testdata').then((data) => {
  			cy.get(data.searchresult).should('exist')
    		}	
    	}
}
