export const sum = (first, second) => {
    return first + second;
}

export const sumALl = (numbers) => {
    let total = 0;
    for (let number of numbers) {
        total += number;

    }
    return total;
}