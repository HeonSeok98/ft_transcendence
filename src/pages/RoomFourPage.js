
import Component from '../core/Component.js';
import Chatting from '../components/Chatting.js';
import UserCard from '../components/UserCard.js';

export default class RoomFourPage extends Component {
    template() {

        const user1 = {
            name: 'heolee',
            win: 1,
            lose: 0,
        };

        const user2 = {
            name: 'haejeong',
            win: 0,
            lose: 1,
        };

        const user3 = {
            name: 'sangyhan',
            win: 2,
            lose: 1,
        };

        const user4 = {
            name: 'sham',
            win: 1,
            lose: 2,
        };

        return `
            <div class="p-5" style="width: 100%; height: 88vh;">
                <div class="rounded-5" style="width: 100%; height: 100%; background-color: rgba(14, 180, 252, 0.25);">
                    <div class="d-flex justify-content-evenly" style="width: 100%; height: 65%;">
                        <div data-component="usercard" class="m-auto" style="width: 250px; height: 400px;">
                        </div>
                        <div data-component="usercard" class="m-auto" style="width: 250px; height: 400px;">
                        </div>
                        <div data-component="usercard" class="m-auto" style="width: 250px; height: 400px;">
                        </div>
                        <div data-component="usercard" class="m-auto" style="width: 250px; height: 400px;">
                        </div>
                    </div>
                    <div class="d-flex justify-content-evenly" style="width: 100%; height: 35%;">
                        <div data-component="chatting" class="d-flex flex-column m-auto" style="width: 50vw; height: 20vh; background-color: rgba(14, 180, 252, 0.25);"></div>
                        <div class="d-flex flex-column">
                            <button class="m-auto border-0 fs-1 text-white fw-bold rounded-pill custom-button" style="width: 15rem; height: 6rem;" id="exit-button">Exit</button>
                            <button class="m-auto border-0 fs-1 text-white fw-bold rounded-pill custom-button" style="width: 15rem; height: 6rem;" id="start-button">Start</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    mounted() {
        const $usercards = this.$target.querySelectorAll('[data-component="usercard"]');
        $usercards.forEach(($usercard) => {
            new UserCard($usercard);
        });

        const $chatting = this.$target.querySelector(
            '[data-component="chatting"]'
        );
        new Chatting($chatting);
    }

    setEvent() {

        this.addEvent('click', '#exit-button', () => {
            window.location.hash = '/lobby';
        });

        this.addEvent('click', '#start-button', () => {
            window.location.hash = '/game';
        });

    }
}
