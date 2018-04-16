export default {
    get: function (key) {
        if (!key) throw 'Local Storage excepts a key to be fetched.';

        let response;
        let item = localStorage.getItem(key);

        try {
            response = JSON.parse(item);
        } catch (e) {
            response = item;
        }

        return response;
    },

    set: function (key, value) {
        if (typeof value === 'object') {
            localStorage.setItem(key, JSON.stringify(value));
        } else {
            localStorage.setItem(key, value);
        }
    },

    clear: function () {
        localStorage.clear();
    }
}
