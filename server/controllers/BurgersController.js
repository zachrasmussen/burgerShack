import { burgersService } from '../services/BurgersServices.js';

export class BurgersController extends BaseController {
    constructor() {
        super('/api/burgers')

        this.router
            .get('', this.getBurger)
            .post('', this.createBurger)
            .get('/:burgerId', this.getBurgerId)
            .put('/:burgerId', this.editBurger)
            .delete('/:burgerId', this.deleteBurger)
    }

    async getBurgers(req, res, next) {
        try {
            let burgers = await burgersService.getBurgers()
            res.send(burgers)
        } catch (error) {
            next(error)
        }
    }

    async getBurgerId(req, res, next) {
        try {


        }
    }