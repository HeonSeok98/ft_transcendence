
import Component from '../core/Component.js';

export default class Select extends Component {
    template() {
        return `
            <header class="d-flex px-5" style="height: 12vh; border-bottom: 2px solid #0EB4FC;">
                <button class="my-auto border-0 fs-5 text-white fw-bold rounded-pill" style="width: 9rem; height: 3rem; background-color: rgba(14, 180, 252, 0.6);">42 PONG</button>
                <button class="my-auto ms-auto border-0 fs-5 text-white fw-bold rounded-pill" style="width: 9rem; height: 3rem; background-color: rgba(14, 180, 252, 0.6);">Exit</button>
            </header>
            <div class="d-flex p-5" style="width: 100%; height: 88vh;">
                <div class="d-flex" style="width: 50%; height: 100%;">
                    <div class="d-flex flex-column m-auto rounded-5 p-3" style="width: 25rem; height: 30rem; background-color: rgba(14, 180, 252, 0.6);">
                    <div class="d-flex" style="height: 35%;">
                        <img class="m-auto" style="width: 8rem; height: 8rem;" src="src/imgs/Vector.svg"/>
                        <img class="m-auto" style="width: 8rem; height: 8rem;" src="src/imgs/Vector.svg"/>
                    </div>
                    <div class="d-flex" style="height: 35%;">
                        <img class="m-auto" style="width: 8rem; height: 8rem;" src="src/imgs/Vector.svg"/>
                        <img class="m-auto" style="width: 8rem; height: 8rem;" src="src/imgs/Vector.svg"/>
                    </div>
                    <div class="m-auto text-white fw-bold fs-1">Tournament</div>
                    </div>
                </div>
                <div class="d-flex" style="width: 50%; height: 100%;">
                    <div class="d-flex flex-column m-auto rounded-5 p-3" style="width: 25rem; height: 30rem; background-color: rgba(14, 180, 252, 0.6);">
                    <div class="d-flex" style="height: 70%;">
                        <img class="m-auto" style="width: 8rem; height: 8rem;" src="src/imgs/Vector.svg"/>
                        <img class="m-auto" style="width: 8rem; height: 8rem;" src="src/imgs/Vector.svg"/>
                    </div>
                    <div class="m-auto text-white fw-bold fs-1">1 VS 1</div>
                    </div>
                </div>
            </div>
        `;
    }
}
