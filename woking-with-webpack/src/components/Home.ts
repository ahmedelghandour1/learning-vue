const template = /*html*/
`
     <div id="home-comp">
        <h1>Counter</h1>
        <hr>
        <app-counter></app-counter>
     </div>
`;

import {AppCounter} from './';
export default {
    name: 'Home', 
    template,
    components: {
        AppCounter
    }
}