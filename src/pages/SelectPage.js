
import Component from '../core/Component.js';

export default class SelectPage extends Component {
    template() {
        return `
            <header class="d-flex px-5" style="height: 12vh; border-bottom: 2px solid #0EB4FC;">
                <button class="my-auto border-0 fs-5 text-white fw-bold rounded-pill custom-button" style="width: 9rem; height: 3rem;;" id="logo-button">42 PONG</button>
                <button class="my-auto ms-auto border-0 fs-5 text-white fw-bold rounded-pill custom-button" style="width: 9rem; height: 3rem;;" id="exit-button">Exit</button>
            </header>
            <div class="d-flex p-5" style="width: 100%; height: 88vh;">
                <div class="d-flex" style="width: 50%; height: 100%;" id="room4-button">
                    <div class="d-flex flex-column m-auto rounded-5 p-3 custom-button" style="width: 25rem; height: 30rem;">
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
                <div class="d-flex" style="width: 50%; height: 100%;" id="room2-button">
                    <div class="d-flex flex-column m-auto rounded-5 p-3 custom-button" style="width: 25rem; height: 30rem;">
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

    setEvent() {

        this.addEvent('click', '#logo-button', () => {
            window.location.hash = '/home';
        });

        this.addEvent('click', '#exit-button', () => {
            window.location.hash = '/lobby';
        });

        this.addEvent('click', '#room2-button', () => {
            window.location.hash = '/room2';
        });

        this.addEvent('click', '#room4-button', () => {
            window.location.hash = '/room4';
        });

    }
}
