export function getAllFunctions(prototype, props) {
    if (!props) {
        props = Reflect.ownKeys(prototype);
    }
    return props.filter(function (e) { return typeof prototype[e] === 'function'; });
}
export function getAllProperties(prototype, props) {
    if (!props) {
        props = Reflect.ownKeys(prototype);
    }
    return props.filter(function (e) { return typeof prototype[e] !== 'function'; });
}
//# sourceMappingURL=getAll.js.map