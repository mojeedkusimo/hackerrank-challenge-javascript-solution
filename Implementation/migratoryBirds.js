function migratoryBirds(arr) {
    // Write your code here
        let container = {};
    // let sortedArray = arr.sort((a,b) => { return a - b});

    for (let i=0; i < arr.length; i++) {

        // console.log(arr[i]);
        if (container[arr[i]] == undefined) {
            container[arr[i]] = 1;
        } else {
            container[arr[i]] += 1;
        }
    }
    let propertyArr = Object.values(container);
    let max = Math.max(...propertyArr);

    for (let x in container) {
        if (container[x] == max) {
            // console.log(`num->${x}: count->${container[x]}`);
            // console.log(x);
            return x;
        }
    }

}
