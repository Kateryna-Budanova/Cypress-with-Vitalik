describe('Login page', () => {
  it('Check that Login page is opened', () => {
    cy.visit('https://business.stage.dzing.com/login?step=1');
    cy.get('#app > div > main > div > div > div.auth-layout__right-col > div > form > div > h5')
      .should('exist') // Проверяем, что элемент существует
      .and('be.visible') // Проверяем, что элемент видимый
      .contains('Authorization'); // Замените 'Заголовок H5' на текст, который есть на вашем элементе
  });
});