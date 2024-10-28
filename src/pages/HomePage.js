
import Component from '../core/Component.js';

export default class Home extends Component {
    template() {
        return `
            <h1>니 페이지임</h1>
            <a href="#/lobby">lobby</a>
            <a href="#/select">Select</a>
            <a href="#/gamelog">gamelog</a>
        `;
    }
}
