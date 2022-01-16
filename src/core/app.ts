import Page from "./templates/page";
import MainPage from "../pages/main";
import SettingsPage from "../pages/settings";
import Header from "./components/header";
import ErrorPage from '../pages/error';
import { PageId } from "./enums";

class App {

  private container = document.body;
  private defaultPageId = 'current-page';
  private header = new Header('header', 'header');

  private renderPage(idPage: string) {

    const currentPageHTML = document.querySelector(`#${this.defaultPageId}`);

    if (currentPageHTML) {
      currentPageHTML.remove();
    }

    let page: Page | null = null;

    if (idPage === PageId.MaingPage) {
      page = new MainPage(idPage);
    } else if (idPage === PageId.SettingsPage) {
      page = new SettingsPage(idPage);
    } else {
      page = new ErrorPage(idPage, '404');
    }

    if (page) {
      const pageHTML = page.render();
      pageHTML.id = this.defaultPageId;
      this.container.append(pageHTML);
    }
  }

  private enableRouteChange() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      this.renderPage(hash);
    });
  }

  run() {
    this.container.append(this.header.render());
    this.renderPage(PageId.MaingPage);
    this.enableRouteChange();
  }
}

export default App;