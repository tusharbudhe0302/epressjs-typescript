import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import bodyparser from 'body-parser';
import logger from 'morgan';
import appconfig from './config'
import PersonRoutes from './routes/person';

class Application {
    public app: express.Application = express();
    constructor() {
        this.setUpProjectSettings();
        this.consfigureInitServices();
        this.configureNonSecuredServices();
        this.configureMiddleware();
        this.configureSecuredServices();
    }
    // Setup Project
    setUpProjectSettings(): void {
        let appPort = appconfig.PORT;
        this.app.set('PORT', appPort);
    }
    // configure basic feature to work express application.
    consfigureInitServices(): void {
        this.app.use(logger('dev'));
        this.app.use(cors());
        this.app.use(bodyparser.json());
        this.app.use(bodyparser.urlencoded({ extended: false }));
    }
    // hi, this service should work in all cases without Autherization header and JWT token.
    configureNonSecuredServices(): void {
        this.app.get('/hi', (req, res, next) => {
            res.status(200).send({ message: 'Hello' });
        })
    }
    // Milleware to validate JWT and Verify Autherization Header. 
    configureMiddleware(): void {
        this.app.use((req: Request, res: Response, next: NextFunction) => {
            next();
        })
    }
    //If JWT and Verification Autherization Header Paased from middleware. It will show defautl response. 
    configureSecuredServices(): void {
        this.app.get('/hello', (req, res, next) => {
            res.status(200).send({ message: 'Hi' });
        })
    }
    // configure Project Routes
    configuireProjectRoutes(): void {
        let routes = express.Router();
        // this.app.use('/api/person', this.personRoutes)
    }
}
let app = new Application();
export default app;