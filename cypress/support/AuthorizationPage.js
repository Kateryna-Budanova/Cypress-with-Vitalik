import { base_url } from "./variables";
const login_path = '/login?step=1';


// "export class" - define a class that could be further used in other files.
export class AuthorizationPage {
  // This is the constructor of the AuthorizationPage class. The constructor is executed each time a new instance of
  // the class is created.
  constructor() {
    // Set variables.
    this.baseUrl = base_url + login_path;
    this.titleSelector = '#app > div > main > div > div > div.auth-layout__right-col > div > form > div > h5';
    this.textSelector = '#app > div > main > div > div > div.auth-layout__right-col > div > form > div > div > div.row.flex-grow-0.pt-0 > div > p';
  }

  // Create method with "visitAuthorizationPage" name.
  visitAuthorizationPage() {
    // cy.visit - the command to open URL.
    cy.visit(this.baseUrl);
    // Looking for an element.
  }
}