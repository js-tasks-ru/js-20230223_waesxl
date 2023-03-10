export function sortStrings(arr, param = 'asc') {
    const [newArr, location] = [[...arr], ['ru-RU-u-kf-upper', 'en-US-u-kf-upper']]
    if(param === 'asc') {
        newArr.sort((a, b) => a.localeCompare(b, location));
    }
    if(param === 'desc') {
        newArr.sort((a, b) => b.localeCompare(a, location));
    }
    return newArr;
}