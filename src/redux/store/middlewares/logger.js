export const logger = (store) => (next) => (action) => {
    console.group();
    console.log('Action', action)
    console.log('prev State', store.getState())
    const result = next(action);
    console.log('new State', store.getState());
    console.groupEnd()
    return result;
}
