import Component from "../templates/component";
import { PageId } from "../enums";
import { IButton } from "../interfaces"

const Buttons: Array<IButton> = [
    {
        id: PageId.MaingPage,
        text: 'Main Page'
    },
    {
        id: PageId.SettingsPage,
        text: 'Settings Page'
    }
];

class Header extends Component {

    constructor(tagName: string, className: string) {
        super(tagName, className);
    }

    private renderPageNavigation() {
        const pageButtons = document.createElement('div');
        Buttons.forEach((button) => {
            const buttonHTML = document.createElement('a');
            buttonHTML.href = `#${button.id}`;
            buttonHTML.innerText = button.text;
            pageButtons.append(buttonHTML);
        });

        this.container.append(pageButtons);
    }

    override render() {
        this.renderPageNavigation();
        return this.container;
    }
}

export default Header;