import {OPENING_STATUS} from "../config";

export const getKey = () => {
    return Math.random() + Math.random()
};

const getSerializedString = (str, obj, p) => {
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
};

export const serialize = function (obj, validKeys) {
    const str = [];
    for (let p in obj) {
        if (obj.hasOwnProperty(p) && obj[p]) {
            if (validKeys) {
                if (validKeys.includes(p)) {
                    getSerializedString(str, obj, p);
                }
            } else {
                getSerializedString(str, obj, p);
            }
        }

    }
    return str.join("&");
};

export const spaceCamel = (string) => {
    return string.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
        return str.toUpperCase();
    });
}

export const findOpeningStatusBySlug = (value) => {
    return OPENING_STATUS.find(obj => {
        return obj.slug === value
    })
}
