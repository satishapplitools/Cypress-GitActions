describe('Test Support Content', () => {
  it('Test each content page', () => {
    cy.task('getPages').then(pages => {
      pages.forEach(function (page) {
        cy.eyesOpen({
          appName: 'Support Content',
          testName: 'Page ' + page
        })
        cy.visit(page, { headers: { 'User-Agent': 'content-tester' } })
        cy.eyesCheckWindow(page)
        cy.eyesClose()
      })
    })
  })
})
