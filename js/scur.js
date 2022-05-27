export const Scur = {
    s: '745d328ed27746ca8803c4ba1571dd73',
    ob(data) {
        return this._r(btoa(this._r(data + this.s)));
    },
    deob(data) {
        return this._r(atob(this._r(data))).replace(this.s, '');
    },
    deobElements(selector = '.scur') {
        let nodeList = document.querySelectorAll(selector);
        if (nodeList instanceof NodeList) {
            nodeList.forEach(node => {
                if (node instanceof HTMLAnchorElement) {
                    if ('hash' in node.dataset && node.dataset['hash'] !== undefined) {
                        node.setAttribute('href', Scur.deob(node.dataset['hash']));
                        delete node.dataset['hash'];
                        if (node.classList.length > 1) {
                            node.classList.remove(selector.substring(1));
                        }
                        else {
                            node.removeAttribute('class');
                        }
                    }
                }
            });
        }
    },
    _r(data) {
        return data.split('').reverse().join('');
    },
};
