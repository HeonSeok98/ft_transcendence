
import Component from '../core/Component.js';

export default class Lobby extends Component {
    template() {
        return `
            <header class="d-flex px-5" style="height: 12vh; border-bottom: 2px solid #0EB4FC;">
                <button class="m-4 border-0 fs-5 text-white fw-bold rounded-pill" style="width: 9rem; height: 3rem; background-color: rgba(14, 180, 252, 0.6);">42 PONG</button>
                <button class="m-4 ms-auto border-0 fs-5 text-white fw-bold rounded-pill" style="width: 9rem; height: 3rem; background-color: rgba(14, 180, 252, 0.6);">Make room</button>
            </header>
            <div class="p-5" style="width: 100%; height: 88vh;">
                <div class="p-5 rounded-5" style="width: 100%; height: 100%; background-color: rgba(14, 180, 252, 0.25);">
                    <ul class="row row-cols-3 list-unstyled">
                        <li class="col m-auto rounded-5" style="width: 16rem; height: 12rem; background-color: rgba(14, 180, 252, 0.5);">
                        </li>
                    </ul>
                </div>
            </div>
        `;
    }
}
