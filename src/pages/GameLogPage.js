
import Component from '../core/Component.js';

export default class GameLog extends Component {
    template() {
        return `
            <header class="d-flex px-5" style="height: 12vh; border-bottom: 2px solid #0EB4FC;">
                <button class="my-auto border-0 fs-5 text-white fw-bold rounded-pill" style="width: 9rem; height: 3rem; background-color: rgba(14, 180, 252, 0.6);">42 PONG</button>
                <button class="my-auto ms-auto border-0 fs-5 text-white fw-bold rounded-pill" style="width: 9rem; height: 3rem; background-color: rgba(14, 180, 252, 0.6);">Log out</button>
            </header>
            <ul class="d-flex flex-column align-items-center p-5 list-unstyled" style="width: 100%; height: 88vh;">
                <li class="d-flex m-4 p-4 border-0 fs-3 text-white fw-bold rounded-pill justify-content-between jalign-items-center" style="width: 80%; height: 7rem; background-color: rgba(14, 180, 252, 0.6);">
                    <div class="my-auto">heolee VS haejeong</div>
                    <div class="my-auto">Winner : heolee</div>
                    <div class="my-auto">11 : 8</div>
                </li>
                <li class="d-flex m-4 p-4 border-0 fs-3 text-white fw-bold rounded-pill justify-content-between jalign-items-center" style="width: 80%; height: 7rem; background-color: rgba(14, 180, 252, 0.6);">
                    <div class="my-auto">sangyhan VS haejeong</div>
                    <div class="my-auto">Winner : haejeong</div>
                    <div class="my-auto">8 : 11</div>
                </li>
                <li class="d-flex m-4 p-4 border-0 fs-3 text-white fw-bold rounded-pill justify-content-between jalign-items-center" style="width: 80%; height: 7rem; background-color: rgba(14, 180, 252, 0.6);">
                    <div class="my-auto">sham VS haejeong</div>
                    <div class="my-auto">Winner : sham</div>
                    <div class="my-auto">11 : 7</div>
                </li>
                <li></li>
            </ul>
        `;
    }
}
