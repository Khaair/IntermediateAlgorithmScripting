function steamrollArray(ourArray) {
    var emptyFlatArray = [];
    ourArray.forEach(element => {
        if (Array.isArray(element)) {
            emptyFlatArray = emptyFlatArray.concat(steamrollArray(element));
        } else {
            emptyFlatArray.push(element);
        }
    });

    console.log(emptyFlatArray);
    return emptyFlatArray;

}

steamrollArray([[1, [2],[3, [[4]]]]
]);function steamrollArray(ourArray) {
    var emptyFlatArray = [];
    ourArray.forEach(element => {
        if (Array.isArray(element)) {
            emptyFlatArray = emptyFlatArray.concat(steamrollArray(element));
        } else {
            emptyFlatArray.push(element);
        }
    });

    console.log(emptyFlatArray);
    return emptyFlatArray;

}

steamrollArray([[1, [2],[3, [[4]]]]
]);