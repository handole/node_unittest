export function arrwhil() {
    const fArr = new Array("one", 1, true);
    let counter = 0
    while(counter < fArr.length) {
        console.info(fArr[counter]);
        counter++
    };
}

arrwhil();