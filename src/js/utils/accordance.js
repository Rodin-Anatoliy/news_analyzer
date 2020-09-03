export function accordance(arrey, input, item1, item2) {
    if (item2 !== undefined) {
        return arrey.reduce((sum, current) => {
            if (current[item1].toLowerCase().split(' ').indexOf(input.toLowerCase()) !== -1 || current[item2].toLowerCase().split(' ').indexOf(input.toLowerCase()) !== -1) {
                return sum + 1
            } else {return sum};
        }, 0)
    } else {
        return arrey.reduce((sum, current) => {
            if (current[item1].toLowerCase().split(' ').indexOf(input.toLowerCase()) !== -1) {
                return sum + 1
            } else {return sum};
        }, 0)
    }
}