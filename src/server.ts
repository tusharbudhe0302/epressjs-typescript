import App from './app';

class Server {

    constructor() {
        this.configureListeningServer();
    }
    configureListeningServer() {
        const applicationPort = App.app.get('PORT');
        App.app.listen(applicationPort, () => {
            console.log(`Express Application Is Running On PORT : ${applicationPort}`);
        })
    }
}
new Server();