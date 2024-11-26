
import Component from '../core/Component.js';

export default class LobbyPage extends Component {
    template() {

        const rooms = [
            { capacity: '2/4', roomName: "heolee's room" },
            { capacity: '2/2', roomName: "haejeong's room" },
            { capacity: '1/2', roomName: "sangyhan's room" },
            { capacity: '1/4', roomName: "sham's room" },
            { capacity: '1/4', roomName: "klha's room" },
            { capacity: '3/4', roomName: "dna's room" }
        ];

        const roomItems = rooms.map(room => `
            <li class="col m-auto rounded-5 d-flex flex-column p-3" 
                style="width: 16rem; height: 12rem; background-color: rgba(14, 180, 252, 0.5);">
                <div class="my-auto fs-5 text-white">${room.capacity}</div>
                <div class="m-auto rounded-circle" style="width: 5rem; height: 5rem; background-color: white"></div>
                <div class="m-auto fs-4 text-white">${room.roomName}</div>
            </li>
        `).join('');

        return `
            <header class="d-flex px-5" style="height: 12vh; border-bottom: 2px solid #0EB4FC;">
                <button class="m-4 border-0 fs-5 text-white fw-bold rounded-pill custom-button" style="width: 9rem; height: 3rem;" id="logo-button">42 PONG</button>
                <button class="m-4 ms-auto border-0 fs-5 text-white fw-bold rounded-pill custom-button" style="width: 9rem; height: 3rem;" id="makeroom-button">Make room</button>
            </header>
            <div class="parent" style="">
                <div class="parent" style="height: 100%; background-color: rgba(14, 180, 252, 0.25);">
                    <ul class="container">
                        ${roomItems}
                    </ul>
                </div>
            </div>
        `;
    }

    setEvent() {

        this.addEvent('click', '#logo-button', () => {
            window.location.hash = '/home';
        });

        this.addEvent('click', '#makeroom-button', () => {
            window.location.hash = '/select';
        });

        this.addEvent('click', '#room2-button', () => {
            window.location.hash = '/room2';
        });

        this.addEvent('click', '#room4-button', () => {
            window.location.hash = '/room4';
        });

    }
}
