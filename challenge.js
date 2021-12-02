function maximumToys(prices, k) {
    // Write your code here
    const pricesSorted = prices.sort();
    // console.log('pricesSorted ', pricesSorted);

    let budget = k;
    let noToys = 0;

    pricesSorted.forEach(toyPrice => {
        if (toyPrice <= budget) {
            noToys++;
            budget = budget - toyPrice;
        }
    });

    // console.log('noToys ', noToys);
    return noToys;

}