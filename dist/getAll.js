"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAllFunctions(prototype, props) {
    if (!props) {
        props = Reflect.ownKeys(prototype);
    }
    return props.filter(e => typeof prototype[e] === 'function');
}
exports.getAllFunctions = getAllFunctions;
function getAllProperties(prototype, props) {
    if (!props) {
        props = Reflect.ownKeys(prototype);
    }
    return props.filter(e => typeof prototype[e] !== 'function');
}
exports.getAllProperties = getAllProperties;
//# sourceMappingURL=getAll.js.map