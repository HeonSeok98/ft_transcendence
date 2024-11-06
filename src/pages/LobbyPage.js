
import Component from '../core/Component.js';

export default class Lobby extends Component {
    template() {
        return `
            <header class="d-flex px-5" style="height: 12vh; border-bottom: 2px solid #0EB4FC;">
                <button class="m-4 border-0 fs-5 text-white fw-bold rounded-pill" style="width: 9rem; height: 3rem; background-color: rgba(14, 180, 252, 0.6);">42 PONG</button>
                <button class="m-4 ms-auto border-0 fs-5 text-white fw-bold rounded-pill" style="width: 9rem; height: 3rem; background-color: rgba(14, 180, 252, 0.6);">Make room</button>
            </header>
            <div class="parent" style="">
                <div class="parent" style="height: 100%; background-color: rgba(14, 180, 252, 0.25);">
                    <ul class="container">
                        <li class="col m-auto rounded-5 d-flex flex-column p-3" style="width: 16rem; height: 12rem; background-color: rgba(14, 180, 252, 0.5);">
                            <div class="my-auto fs-5 text-white">2/4</div>
                            <div class="m-auto rounded-circle" style="width: 5rem; height: 5rem; background-color: white"></div>
                            <div class="m-auto fs-4 text-white">heolee's room</div>
                        </li>
                        <li class="col m-auto rounded-5 d-flex flex-column p-3" style="width: 16rem; height: 12rem; background-color: rgba(14, 180, 252, 0.5);">
                            <div class="my-auto fs-5 text-white">2/2</div>
                            <div class="m-auto rounded-circle" style="width: 5rem; height: 5rem; background-color: white"></div>
                            <div class="m-auto fs-4 text-white">haejeong's room</div>
                        </li>
                        <li class="col m-auto rounded-5 d-flex flex-column p-3" style="width: 16rem; height: 12rem; background-color: rgba(14, 180, 252, 0.5);">
                            <div class="my-auto fs-5 text-white">1/2</div>
                            <div class="m-auto rounded-circle" style="width: 5rem; height: 5rem; background-color: white"></div>
                            <div class="m-auto fs-4 text-white">sangyhan's room</div>
                        </li>
                        <li class="col m-auto rounded-5 d-flex flex-column p-3" style="width: 16rem; height: 12rem; background-color: rgba(14, 180, 252, 0.5);">
                            <div class="my-auto fs-5 text-white">1/4</div>
                            <div class="m-auto rounded-circle" style="width: 5rem; height: 5rem; background-color: white"></div>
                            <div class="m-auto fs-4 text-white">sham's room</div>
                        </li>
                        <li class="col m-auto rounded-5 d-flex flex-column p-3" style="width: 16rem; height: 12rem; background-color: rgba(14, 180, 252, 0.5);">
                            <div class="my-auto fs-5 text-white">1/4</div>
                            <div class="m-auto rounded-circle" style="width: 5rem; height: 5rem; background-color: white"></div>
                            <div class="m-auto fs-4 text-white">klha's room</div>
                        </li>
                        <li class="col m-auto rounded-5 d-flex flex-column p-3" style="width: 16rem; height: 12rem; background-color: rgba(14, 180, 252, 0.5);">
                            <div class="my-auto fs-5 text-white">3/4</div>
                            <div class="m-auto rounded-circle" style="width: 5rem; height: 5rem; background-color: white"></div>
                            <div class="m-auto fs-4 text-white">dna's room</div>
                        </li>
                    </ul>
                </div>
            </div>
        `;
    }
}
