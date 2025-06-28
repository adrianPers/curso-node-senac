

function soma(...nums){

    let res = 0
    nums.map(el => res += el)
    return res

}

module.exports = {soma}
