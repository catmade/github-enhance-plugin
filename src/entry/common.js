export const config = {
    headerStickyTag: "config.sticky.header",
    repoHeaderStickyTag: "config.sticky.repo-header",

    get: async function (key) {
        return (await getLocalStorageValue(key))[key];
    },
    set: function (key, value) {
        let obj = {}
        obj[key] = value
        chrome.storage.sync.set(obj);
    }
}

async function getLocalStorageValue(key) {
    return new Promise((resolve, reject) => {
        try {
            chrome.storage.sync.get(key, function (value) {
                resolve(value);
            })
        } catch (ex) {
            reject(ex);
        }
    });
}