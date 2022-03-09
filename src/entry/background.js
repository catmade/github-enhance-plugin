export const config = {
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

chrome.storage.onChanged.addListener(function (changes, namespace) {
    for (let [key, {oldValue, newValue}] of Object.entries(changes)) {
        console.log(
            `Storage key "${key}" in namespace "${namespace}" changed.`,
            `Old value was "${oldValue}", new value is "${newValue}".`
        );
    }
});