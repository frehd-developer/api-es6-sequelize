import { User } from '../models';

const userController = {
    index: (req, res) => {
        User.all()
        .then(users => res.json({
            error: false,
            data: users
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));        
    },
    show: (req, res) => {
        User.findById(req.params.id)
            .then(user => res.json({
                error: false,
                data: user
            }))
            .catch(error => res.json({
                error: true,
                data: [],
                error: error
            }));
    },
    store: (req, res) => {
        User.create({firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email})
            .then((user, created) => res.json({
                error: false,
                data: user
            }))
            .catch(error => res.json({
                error: true,
                data: [],
                error: error
            }));
    },
    update: (req, res) => {
        User.update(
            {firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email},
            {where: {id: req.params.id}}
        )
            .then(user => res.json({
                error: false,
                data: user
            }))
            .catch(error => res.json({
                error: true,
                data: [],
                error: error
            }));
    },
    destroy: (req, res) => {
        User.destroy({where: {id: req.params.id}})
            .then(user => res.json({
                error: false,
                data: [],
                message: `User removed`
            }))
            .catch(error => res.json({
                error: true,
                data: [],
                error: error
            }));
    }
};

export default userController;
