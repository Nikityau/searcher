export const debounce = (cb, delay) => {
    let key = null;

    return (...args: any[]) => {
        if(key) {
            clearTimeout(key)
        }

        key = setTimeout(() => {
            cb(...args)
        }, delay)
    }
}