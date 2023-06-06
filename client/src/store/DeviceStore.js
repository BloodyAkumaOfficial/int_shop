import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'phones'},
            {id: 2, name: 'laptops'},
            {id: 3, name: 'headphones'},
            {id: 4, name: 'TV`s'}
        ]
        this._brands = [
            {id: 1, name: 'Apple'},
            {id: 2, name: 'Xiaomi'},
            {id: 3, name: 'Lenovo'},
            {id: 4, name: 'Samsung'},
            {id: 5, name: 'Oppo'},
            {id: 6, name: 'Asus'},
        ]
        this._devises = [
            {id: 1, name: '12 pro', price: 1200, rating: 5, img: 'https://apiua.icoola.ua/aimeos/1.d/files/a/e/aedacf71_apple-iphone-12-pro-256gb-graphite-icoola-1.jpg'},
            {id: 2, name: '12 pro', price: 1200, rating: 5, img: 'https://apiua.icoola.ua/aimeos/1.d/files/a/e/aedacf71_apple-iphone-12-pro-256gb-graphite-icoola-1.jpg'},
            {id: 3, name: '12 pro', price: 1200, rating: 5, img: 'https://apiua.icoola.ua/aimeos/1.d/files/a/e/aedacf71_apple-iphone-12-pro-256gb-graphite-icoola-1.jpg'},
            {id: 4, name: '12 pro', price: 1200, rating: 5, img: 'https://apiua.icoola.ua/aimeos/1.d/files/a/e/aedacf71_apple-iphone-12-pro-256gb-graphite-icoola-1.jpg'},
            {id: 5, name: '12 pro', price: 1200, rating: 5, img: 'https://apiua.icoola.ua/aimeos/1.d/files/a/e/aedacf71_apple-iphone-12-pro-256gb-graphite-icoola-1.jpg'},
        ]
        this._selectedType = {};
        this._selectedBrand = {};
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
    setSelectedType (type) {
        this._selectedType = type;
    }
    setSelectedBrand (brand) {
        this._selectedBrand = brand;
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
    get selectedType () {
        return  this._selectedType;
    }
    get selectedBrand () {
        return  this._selectedBrand;
    }
}