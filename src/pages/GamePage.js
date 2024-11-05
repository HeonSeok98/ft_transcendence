
import Component from '../core/Component.js';

export default class Game extends Component {
    template() {
        return `
            <header class="d-flex px-5" style="height: 12vh; border-bottom: 2px solid #0EB4FC;">
                <button class="my-auto border-0 fs-5 text-white fw-bold rounded-pill" style="width: 9rem; height: 3rem; background-color: rgba(14, 180, 252, 0.6);">42 PONG</button>
                <button class="my-auto ms-auto border-0 fs-5 text-white fw-bold rounded-pill" style="width: 9rem; height: 3rem; background-color: rgba(14, 180, 252, 0.6);">Exit</button>
            </header>
            <div class="px-5 pb-5" style="width: 100%; height: 88vh;">
                <div class="fs-2 fw-normal d-flex align-items-center justify-content-center" style="width: 100%; height: 10%;">heolee님과 haejeong님이 경기중 입니다</div>
                <div class="fs-1" style="width: 100%; height: 90%; border: 3px solid black;">대충 3d 화면</div>
            </div>
        `;
    }
}
