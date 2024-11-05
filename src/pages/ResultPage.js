
import Component from '../core/Component.js';

export default class Result extends Component {
    template() {
        return `
            <header class="d-flex px-5" style="height: 12vh; border-bottom: 2px solid #0EB4FC;">
                <button class="my-auto border-0 fs-5 text-white fw-bold rounded-pill" style="width: 9rem; height: 3rem; background-color: rgba(14, 180, 252, 0.6);">42 PONG</button>
                <button class="my-auto ms-auto border-0 fs-5 text-white fw-bold rounded-pill" style="width: 9rem; height: 3rem; background-color: rgba(14, 180, 252, 0.6);">Exit</button>
            </header>
            <div class="p-5" style="width: 100%; height: 88vh;">
                <div class="d-flex flex-column rounded-5 p-3" style="width: 100%; height: 100%; background-color: rgba(14, 180, 252, 0.25);">
                    <img class="m-auto" style="width: 16rem; height: 8rem;" src="src/imgs/crown.png"/>
                    <div class="m-auto rounded-5 d-flex align-items-center justify-content-center" style="width: 25rem; height: 25rem; background-color: rgba(14, 180, 252, 0.6);">
                        <div class="m-auto rounded-circle" style="width: 12rem; height: 12rem; background-color: white"></div>
                    </div>
                    <div class="m-auto fs-1 d-flex align-items-center justify-content-center" style="">heolee is winner</div>
                </div>
            </div>
        `;
    }
}

