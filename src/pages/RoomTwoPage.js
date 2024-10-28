
import Component from '../core/Component.js';

export default class RoomTwo extends Component {
    template() {
        return `
            <h1>1 대 1 방임</h1>
            <a href="#/game">게임시작</a>
            <a href="#/lobby">나가기</a>
        `;
    }
}
