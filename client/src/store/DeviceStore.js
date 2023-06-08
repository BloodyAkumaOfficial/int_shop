import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [];
        this._brands = [];
        this._devises = [];
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