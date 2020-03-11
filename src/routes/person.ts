
class PersonRoutes {
    public routes: any;
    constructor(expressRouter: any) {
        this.routes = expressRouter;
    }
    setUpPersonRoute() {
        this.routes.get('/person/:id', (req: any, res: any) => {
            res.status(200).send({ id: `Your requested person id ${req.params.id}` });
        });
        this.routes.get('/persons', (req: any, res: any) => {
            res.status(200).send({ title: 'Person List' });
        });
    }
}
export default PersonRoutes;