
import Component from '../core/Component.js';

export default class HomePage extends Component {
    template() {
        return `
            <header class="d-flex px-5" style="height: 12vh; border-bottom: 2px solid #0EB4FC;">
                <button class="my-auto border-0 fs-5 text-white fw-bold rounded-pill custom-button" style="width: 9rem; height: 3rem;">42 PONG</button>
                <button class="my-auto ms-auto border-0 fs-5 text-white fw-bold rounded-pill custom-button" style="width: 9rem; height: 3rem;" id="logout-button">Log out</button>
            </header>
            <div class="p-5" style="width: 100%; height: 88vh;">
                <div class="d-flex rounded-5 p-3" style="width: 100%; height: 100%; background-color: rgba(14, 180, 252, 0.25);">
                    <div class="d-flex flex-column" style="width: 50%; height: 100%;">
                        <button class="m-auto border-0 fs-1 text-white fw-bold rounded-pill custom-button" style="width: 18rem; height: 6rem;" id="gamelog-button">gamelog</button>
                        <button class="m-auto border-0 fs-1 text-white fw-bold rounded-pill custom-button" style="width: 18rem; height: 6rem;" id="lobby-button">lobby</button>
                        <button class="m-auto border-0 fs-1 text-white fw-bold rounded-pill custom-button" style="width: 18rem; height: 6rem;" id="select-button">Select</button>
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

    setEvent() {

        // "Log out" 버튼 클릭 시
        this.addEvent('click', '#logout-button', () => {
            window.location.hash = '/login'; // 로그인 페이지로 이동
        });

        // "gamelog" 버튼 클릭 시
        this.addEvent('click', '#gamelog-button', () => {
            window.location.hash = '/gamelog'; // gamelog 페이지로 이동
        });

        // "lobby" 버튼 클릭 시
        this.addEvent('click', '#lobby-button', () => {
            window.location.hash = '/lobby'; // lobby 페이지로 이동
        });

        // "Select" 버튼 클릭 시
        this.addEvent('click', '#select-button', () => {
            window.location.hash = '/select'; // select 페이지로 이동
        });
    }
}
