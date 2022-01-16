import Page from '../core/templates/page';

class MainPage extends Page {

    override TextObject = {
        MainTitle: 'Main page'
    };

    constructor(id: string) {
       super(id);
    }

    override render() {
        const title = this.createHeaderTitle(this.TextObject.MainTitle);
        this.container.append(title);
        return this.container;
    }
}

export default MainPage;