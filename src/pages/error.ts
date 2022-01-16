import Page from "../core/templates/page";
import { IError } from "../core/interfaces";

class ErrorPage extends Page {

    override TextObject: IError = {
        '404': 'Error! Page was not found.'
    };
    private errorType: string = '500';

    constructor(id: string, errorType: string) {
        super(id);
        this.errorType = errorType;
    }

    override render() {

        const error = this.TextObject[this.errorType];
        if (error) {
            const title = this.createHeaderTitle(error);
            this.container.append(title);
            return this.container;
        }

        const title = this.createHeaderTitle('500 error');
        this.container.append(title);
        return this.container;
    }
}

export default ErrorPage;