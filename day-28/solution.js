class EventEmitter {
    constructor() {
        this.events = {};
    }

    subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        this.events[eventName].push(callback);
        const index = this.events[eventName].length - 1;

        return {
            unsubscribe: () => {
                this.events[eventName][index] = null;
            }
        };
    }

    emit(eventName, args = []) {
        if (!this.events[eventName]) return [];

        const result = [];
        for (const cb of this.events[eventName]) {
            if (cb !== null) {
                result.push(cb(...args));
            }
        }
        return result;
    }
}
