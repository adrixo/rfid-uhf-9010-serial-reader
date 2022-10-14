
function checkSum(frame, beginIndex, endIndex, verbose=false) {
    let checkSum = 0x00;

    for(let i = beginIndex; i < beginIndex + endIndex; i++ ){
        checkSum += frame[i];
    }
    checkSum = checkSum % 0x100;
    checkSum = 0xFF-checkSum;
    checkSum = checkSum + 1;

    return checkSum;
}