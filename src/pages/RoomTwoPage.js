
import Component from '../core/Component.js';

export default class RoomTwo extends Component {
    template() {
        return `
            <header class="d-flex px-5" style="height: 12vh; border-bottom: 2px solid #0EB4FC;">
                <button class="my-auto border-0 fs-5 text-white fw-bold rounded-pill" style="width: 9rem; height: 3rem; background-color: rgba(14, 180, 252, 0.6);">42 PONG</button>
                <button class="my-auto ms-auto border-0 fs-5 text-white fw-bold rounded-pill" style="width: 9rem; height: 3rem; background-color: rgba(14, 180, 252, 0.6);">Exit</button>
            </header>
            <div class="p-5" style="width: 100%; height: 88vh;">
                <div class="rounded-5" style="width: 100%; height: 100%; background-color: rgba(14, 180, 252, 0.25);">
                    <div class="d-flex justify-content-evenly" style="width: 100%; height: 65%;">
                        <div class="d-flex flex-column m-auto rounded-5" style="width: 25rem; height: 28rem; background-color: rgba(14, 180, 252, 0.6);">
                            <div class="mt-5 mx-auto rounded-circle" style="width: 10rem; height: 10rem; background-color: white"></div>
                            <div class="m-auto text-center fs-1 text-white fw-bold">heolee</div>
                            <div class="m-auto text-center fs-1 text-white fw-bold">1승 0패</div>
                        </div>
                        <div class="d-flex flex-column m-auto rounded-5" style="width: 25rem; height: 28rem; background-color: rgba(14, 180, 252, 0.6);">
                            <div class="mt-5 mx-auto rounded-circle" style="width: 10rem; height: 10rem; background-color: white"></div>
                            <div class="m-auto text-center fs-1 text-white fw-bold">haejeong</div>
                            <div class="m-auto text-center fs-1 text-white fw-bold">1승 1패</div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-evenly" style="width: 100%; height: 35%;">
                        <div class="d-flex flex-column m-auto" style="width: 50vw; height: 20vh; background-color: rgba(14, 180, 252, 0.25);">
                            <div class="d-flex align-items-center" style="height: 20%;"></div>
                            <div class="d-flex align-items-center" style="height: 20%;"></div>
                            <div class="d-flex align-items-center" style="height: 20%;">heolee : 어우 개 힘드네</div>
                            <div class="d-flex align-items-center" style="height: 20%; border-bottom: 2px solid #0EB4FC;">heolee : 어우 개 어렵네</div>
                            <form class="d-flex justify-content-evenly align-items-center" style="height: 20%;">
                                <input class="border-0" style="width: 80%;"></input>
                                <input class="border-0 text-white" style="background-color: rgba(14, 180, 252, 0.6);" type="submit" value="Enter">
                            </form>
                        </div>
                        <button class="m-auto border-0 fs-1 text-white fw-bold rounded-pill" style="width: 15rem; height: 6rem; background-color: rgba(14, 180, 252, 0.6);">Start</button>
                    </div>
                </div>
            </div>
        `;
    }
}
