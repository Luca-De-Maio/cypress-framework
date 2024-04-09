Cypress.Commands.addQuery('getByDataQA', (id) => {
    const getFn = cy.now('get', `[data-qa="${id}"]`);
    return () => {
      return getFn();
    };
  });