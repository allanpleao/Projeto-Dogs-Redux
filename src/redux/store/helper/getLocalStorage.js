export const getLocalStorage = (name, value) => {
    try {
        return window.localStorage.getItem(name)
    } catch{
        return value;
    }
}