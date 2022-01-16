import Page from '../core/templates/page';

class SettingsPage extends Page {

   override TextObject = {
        MainTitle: 'Settings page'
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

export default SettingsPage;