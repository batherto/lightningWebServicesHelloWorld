import { LightningElement, track } from 'lwc';

export default class SimpleApp extends LightningElement {
    @track
    state = {
        title: 'Welcome to Lightning Web Components Playground!',
    };
    state2 = {
        title: 'Im the secondary title!',
    }
    get options() {
        return [
            {
                label: 'supports',
                value: 'supports',
            },
            {
                label: 'has ability to show',
                value: 'shows',
            },
            {
                label: 'Amazing things!',
                value: 'amazing',
            },
        ];
    }
}