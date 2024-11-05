
import Component from '../core/Component.js';

export default class Home extends Component {
    template() {
        return `
            <header class="d-flex px-5" style="height: 12vh; border-bottom: 2px solid #0EB4FC;">
                <button class="my-auto border-0 fs-5 text-white fw-bold rounded-pill" style="width: 9rem; height: 3rem; background-color: rgba(14, 180, 252, 0.6);">42 PONG</button>
                <button class="my-auto ms-auto border-0 fs-5 text-white fw-bold rounded-pill" style="width: 9rem; height: 3rem; background-color: rgba(14, 180, 252, 0.6);">Log out</button>
            </header>
            <div class="p-5" style="width: 100%; height: 88vh;">
                <div class="d-flex rounded-5 p-3" style="width: 100%; height: 100%; background-color: rgba(14, 180, 252, 0.25);">
                    <div class="d-flex flex-column" style="width: 50%; height: 100%;">
                        <button class="m-auto border-0 fs-1 text-white fw-bold rounded-pill" style="width: 18rem; height: 6rem; background-color: rgba(14, 180, 252, 0.6);">gamelog</button>
                        <button class="m-auto border-0 fs-1 text-white fw-bold rounded-pill" style="width: 18rem; height: 6rem; background-color: rgba(14, 180, 252, 0.6);">lobby</button>
                        <button class="m-auto border-0 fs-1 text-white fw-bold rounded-pill" style="width: 18rem; height: 6rem; background-color: rgba(14, 180, 252, 0.6);">Select</button>
                    </div>
                    <div class="d-flex" style="width: 50%; height: 100%;">
                        <div class="d-flex flex-column m-auto rounded-5" style="width: 30rem; height: 40rem; background-color: rgba(14, 180, 252, 0.6);">
                            <div class="m-auto rounded-circle" style="width: 15rem; height: 15rem; background-color: white"></div>
                            <div class="m-auto text-center fs-1 text-white fw-bold">heolee</div>
                            <div class="m-auto text-center fs-1 text-white fw-bold">1승 0패</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}
