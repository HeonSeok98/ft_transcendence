
import Component from '../core/Component.js';

export default class Home extends Component {
    template() {
        return `
            <header class="d-flex px-5" style="height: 6rem; border-bottom: 2px solid #0EB4FC;">
                <button class="m-4 border-0 fs-5 text-white fw-bold rounded-pill" style="width: 9rem; height: 3rem; background-color: rgba(14, 180, 252, 0.7);">42 PONG</button>
                <button class="m-4 ms-auto border-0 fs-5 text-white fw-bold rounded-pill" style="width: 9rem; height: 3rem; background-color: rgba(14, 180, 252, 0.7);">Log out</button>
            </header>
            <div class="d-flex p-5" style="width: 100%">
                <div class="d-flex flex-column" style="width: 50%">
                    <button class="mx-auto my-5 border-0 fs-1 text-white fw-bold rounded-pill" style="width: 18rem; height: 6rem; background-color: rgba(14, 180, 252, 0.7);">gamelog</button>
                    <button class="mx-auto my-5 border-0 fs-1 text-white fw-bold rounded-pill" style="width: 18rem; height: 6rem; background-color: rgba(14, 180, 252, 0.7);">lobby</button>
                    <button class="mx-auto my-5 border-0 fs-1 text-white fw-bold rounded-pill" style="width: 18rem; height: 6rem; background-color: rgba(14, 180, 252, 0.7);">Select</button>
                </div>
                <div class="m-auto rounded-5" style="width: 26rem; height: 32rem; background-color: rgba(14, 180, 252, 0.7);">
                    <div class="mx-auto my-5 rounded-circle" style="width: 12rem; height: 12rem; background-color: white"></div>
                    <div class="mx-auto my-3 text-center fs-1 text-white fw-bold">heolee</div>
                    <div class="mx-auto my-3 text-center fs-1 text-white fw-bold">1승 0패</div>
                </div>
            </div>
        `;
    }
}
