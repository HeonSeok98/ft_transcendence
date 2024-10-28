
import Component from '../core/Component.js';

export default class Lobby extends Component {
    template() {
        return `
            <h1>로비 입니다</h1>
            <a href="#/select">Select</a>
        `;
    }
}
