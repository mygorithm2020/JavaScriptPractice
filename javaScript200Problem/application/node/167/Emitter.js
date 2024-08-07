// event Emitter 이해하기 1

class Emitter {
    constructor() {
        this.events = {};
    }

    on(type, listener) {
        this.events[type] = this.events[type] || [];
        this.events[type].push(listener);
    }

    emit(type) {
        if (this.events[type]) {
            this.events[type].forEach(element => {
                element();                
            });
        }
    }
}

module.exports = Emitter;