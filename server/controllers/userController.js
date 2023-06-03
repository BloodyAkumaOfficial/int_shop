const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const {User, Basket} = require('../models/models');
const jwt = require('jsonwebtoken');

const generateJWT = (id, email, role) => {
    return  jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {
            expiresIn: '12h'
        }
    )
}
class UserController {
    async registration (req, res, next) {
        const {email, password, role} = req.body;
        if (!email || !password) {
            return next(ApiError.bedRequest('Email or password is incorrect'));
        }
        const candidate = await User.findOne({where: {email}});
        if (candidate) {
            return next(ApiError.bedRequest('User with this email is already created'));
        }
        const hasPass = await bcrypt.hash(password, 5);
        const user = User.create({email, role, password: hasPass});
        const basket = await Basket.create({userId: user.id});
        const token = generateJWT(user.id, user.email, user.role)
        return res.json({token})
    }
    async login (req, res, next) {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}});
        if (!user) {
            return next(ApiError.internal('User with this email was not found'));
        }
        let comparePass = bcrypt.compareSync(password, user.password);
        if (!comparePass) {
            return next(ApiError.internal('Password is incorrect'));
        }
        const token = generateJWT(user.id, user.email, user.role);
        return res.json({token});
    }
    async check (req, res, next) {
        const token = generateJWT(req.user.id, req.user.email, req.user.role);
        return res.json(token);
    }
}

module.exports = new UserController();