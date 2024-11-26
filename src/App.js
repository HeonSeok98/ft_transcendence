
import Router from './Router.js';
import Component from './core/Component.js';
import createPages from './pages/index.js'

export default class App extends Component {
    template() {
        return `
        <main>
        </main>
        `;
    }
            // <a href="#/home">home</a>
            // <div class="container-fluid p-5 bg-primary text-white text-center">
            //     <h1> 흐에 </h1>
            // </div>
            // <a href="#/">login</a>
            // <a href="#/home">home</a>
            // <a href="#/lobby">lobby</a>
            // <a href="#/select">Select</a>
            // <a href="#/room2">1 대 1 room</a>
            // <a href="#/room4">토너먼트 room</a>
            // <a href="#/game">게임중 페이지</a>
            // <a href="#/result">결과 페이지</a>
            // <a href="#/gamelog">gamelog</a>


    mounted() {
        const $main = this.$target.querySelector('main');
        const pages = createPages($main);
    
        const router = new Router($main);
        router.addRoute('#/', pages.login);
        router.addRoute('#/home', pages.home);
        router.addRoute('#/lobby', pages.lobby);
        router.addRoute('#/select', pages.select);
        router.addRoute('#/room2', pages.room2);
        router.addRoute('#/room4', pages.room4);
        router.addRoute('#/game', pages.game);
        router.addRoute('#/result', pages.result);
        router.addRoute('#/gamelog', pages.gamelog);
        router.addRoute('#/counter', pages.counter);
        router.start();
    }
}
