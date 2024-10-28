
import Component from '../core/Component.js';

export default class Select extends Component {
    template() {
        return `
            <h1>방 고르셈</h1>
            <a href="#/room2">1 대 1 room</a>
            <a href="#/room4">토너먼트 room</a>
        `;
    }
}
