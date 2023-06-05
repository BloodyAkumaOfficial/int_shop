import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'phones'},
            {id: 2, name: 'laptops'},
        ]
        this._brands = [
            {id: 1, name: 'Apple'},
            {id: 2, name: 'Xiaomi'},
        ]
        this._devises = [
            {id:1, name: '12 pro', price: 1200, rating: 5, img: 'https://apiua.icoola.ua/aimeos/1.d/files/a/e/aedacf71_apple-iphone-12-pro-256gb-graphite-icoola-1.jpg'},
            {id:1, name: '12 pro', price: 1200, rating: 5, img: 'https://apiua.icoola.ua/aimeos/1.d/files/a/e/aedacf71_apple-iphone-12-pro-256gb-graphite-icoola-1.jpg'},
            {id:1, name: '12 pro', price: 1200, rating: 5, img: 'https://apiua.icoola.ua/aimeos/1.d/files/a/e/aedacf71_apple-iphone-12-pro-256gb-graphite-icoola-1.jpg'},
            {id:1, name: '12 pro', price: 1200, rating: 5, img: 'https://apiua.icoola.ua/aimeos/1.d/files/a/e/aedacf71_apple-iphone-12-pro-256gb-graphite-icoola-1.jpg'},
            {id:1, name: '12 pro', price: 1200, rating: 5, img: 'https://apiua.icoola.ua/aimeos/1.d/files/a/e/aedacf71_apple-iphone-12-pro-256gb-graphite-icoola-1.jpg'},
        ]
        makeAutoObservable(this);
    }

    setTypes (types) {
        this._types = types;
    }

    setBrands (brands) {
        this._brands = brands;
    }
    setDevices (devices) {
        this._devises = devices;
    }

    get types () {
        return this._types;
    }

    get brands () {
        return this._brands;
    }
    get devises () {
        return this._devises;
    }
}