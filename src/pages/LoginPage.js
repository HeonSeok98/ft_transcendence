
import Component from '../core/Component.js';

export default class Login extends Component {
    template() {
        return `
            <div style="width: 100vw; height: 100vh; position: relative;">
                <img class="" style="width: 100%; height: 100%; object-fit: cover;" src="src/imgs/pingpong.png"/>
                <button class="py-4 px-5 fs-1 border-0 text-white fw-bold rounded-pill" style="position: absolute; top: 85%; left: 50%; transform: translate(-50%, -50%); background-color: skyblue">Login with 42</button>
            </div>
        `;
    }
}
