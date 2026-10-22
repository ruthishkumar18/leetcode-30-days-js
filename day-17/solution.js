class TimeLimitedCache {
    constructor() {
        this.cache = new Map();
    }

    set(key, value, duration) {
        const existsAndNotExpired = this.cache.has(key) && this.cache.get(key).expiry > Date.now();

        const expiry = Date.now() + duration;
        this.cache.set(key, { value, expiry });

        return existsAndNotExpired;
    }

    get(key) {
        if (!this.cache.has(key)) return -1;

        const { value, expiry } = this.cache.get(key);
        if (Date.now() > expiry) {
            this.cache.delete(key);
            return -1;
        }

        return value;
    }

    count() {
        let active = 0;
        const now = Date.now();

        for (const [key, { expiry }] of this.cache) {
            if (expiry > now) active++;
            else this.cache.delete(key);
        }

        return active;
    }
}
