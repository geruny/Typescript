import { PageId } from "../core/enums";

export interface IButton {
    id: PageId,
    text: string
}

export interface ITest {
    id: PageId,
    text: string
}

export interface IError {
    [errorNumber: string]: string
}