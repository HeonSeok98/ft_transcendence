
import Component from '../core/Component.js';

export default class RoomFour extends Component {
    template() {
        return `
            <h1>토너먼트 방임</h1>
            <a href="#/game">게임시작</a>
            <a href="#/lobby">나가기</a>
        `;
    }
}
