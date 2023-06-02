const uuid = require('uuid');
const path = require('path');
const {Device} = require('../models/models');
const ApiError = require('../error/ApiError');
class DeviceController {
    async create (req, res, next) {
        try {
            const {name, price, brandId, typeId, info} = req.body;
            const {img} = req.files;
            let filename = uuid.v4() + '.jpeg';
            img.mv(path.resolve(__dirname, '..', 'static', filename));

            const device = await Device.create({name, price, brandId, typeId, img: filename});
            return res.json(device);
        } catch (e) {
            return next(ApiError.bedRequest(e.message))
        }
    }
    async getAll (req, res) {

    }
    async getOne (req, res) {

    }
}

module.exports = new DeviceController();