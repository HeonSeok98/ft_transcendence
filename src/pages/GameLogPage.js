
import Component from '../core/Component.js';

export default class GameLog extends Component {
    template() {
        return `
            <header class="d-flex px-5" style="height: 6rem; border-bottom: 2px solid #0EB4FC;">
                <button class="m-4 border-0 fs-5 text-white fw-bold rounded-pill" style="width: 9rem; height: 3rem; background-color: rgba(14, 180, 252, 0.7);">42 PONG</button>
                <button class="m-4 ms-auto border-0 fs-5 text-white fw-bold rounded-pill" style="width: 9rem; height: 3rem; background-color: rgba(14, 180, 252, 0.7);">Log out</button>
            </header>
            <ul class="d-flex flex-column align-items-center p-5 list-unstyled" style="height: 100%;">
                <li class="d-flex m-4 p-4 border-0 fs-3 text-white fw-bold rounded-pill justify-content-between jalign-items-center" style="width: 80%; height: 7rem; background-color: rgba(14, 180, 252, 0.7);">
                    <div class="my-2">heolee VS haejeong</div>
                    <div class="my-2">Winner : heolee</div>
                    <div class="my-2">11 : 8</div>
                </li>
                <li class="d-flex m-4 p-4 border-0 fs-3 text-white fw-bold rounded-pill justify-content-between jalign-items-center" style="width: 80%; height: 7rem; background-color: rgba(14, 180, 252, 0.7);">
                    <div class="my-2">sangyhan VS haejeong</div>
                    <div class="my-2">Winner : haejeong</div>
                    <div class="my-2">8 : 11</div>
                </li>
                <li class="d-flex m-4 p-4 border-0 fs-3 text-white fw-bold rounded-pill justify-content-between jalign-items-center" style="width: 80%; height: 7rem; background-color: rgba(14, 180, 252, 0.7);">
                    <div class="my-2">sham VS haejeong</div>
                    <div class="my-2">Winner : sham</div>
                    <div class="my-2">11 : 7</div>
                </li>
                <li></li>
            </ul>
        `;
    }
}
