export const Scur = {
    ob(data) {
        return this._r(btoa(this._r(data)));
    },
    deob(data) {
        return this._r(atob(this._r(data)));
    },
    _r(data) {
        return data.split('').reverse().join('');
    },
};
