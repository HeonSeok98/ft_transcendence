
import Component from '../core/Component.js';

export default class Lobby extends Component {
    template() {
        return `
            <header class="d-flex px-5" style="height: 6rem; border-bottom: 2px solid #0EB4FC;">
                <button class="m-4 border-0 fs-5 text-white fw-bold rounded-pill" style="width: 9rem; height: 3rem; background-color: rgba(14, 180, 252, 0.7);">42 PONG</button>
                <button class="m-4 ms-auto border-0 fs-5 text-white fw-bold rounded-pill" style="width: 9rem; height: 3rem; background-color: rgba(14, 180, 252, 0.7);">Make room</button>
            </header>
            <div></div>
            <div class="mx-auto my-4 p-4 rounded-5" style="width: 90%; height: 80vh; background-color: rgba(14, 180, 252, 0.3);">
                <ul class="row row-cols-3 list-unstyled">
                    <li class="col" style="height: 10rem;">
                        <div class="m-4 rounded-5" style="height: 8rem; background-color: rgba(14, 180, 252, 0.7);"></div>
                    </li>
                    <li class="col" style="height: 10rem;">
                        <div class="m-4 rounded-5" style="height: 8rem; background-color: rgba(14, 180, 252, 0.7);"></div>
                    </li>
                    <li class="col" style="height: 10rem;">
                        <div class="m-4 rounded-5" style="height: 8rem; background-color: rgba(14, 180, 252, 0.7);"></div>
                    </li>
                    <li class="col" style="height: 10rem;">
                        <div class="m-4 rounded-5" style="height: 8rem; background-color: rgba(14, 180, 252, 0.7);"></div>
                    </li>
                </ul>
            </div>
        `;
    }
}
