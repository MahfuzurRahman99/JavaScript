function add(x, y) {
    result = x + y;
    return result;
}
function sub(x, y) {
    result = x - y;
    return result;
}
function div(x, y) {
    result = x / y;
    return result;
}
function mul(x, y) {
    result = x + y;
    return result;
}

document.write(add(5,6) + '<br/>');
document.write(sub(5,6) + '<br/>');
document.write(div(5,6) + '<br/>');
document.write(mul(5,6) + '<br/>');

(sum = (x, y) => {
    result = x + y;
    console.log(result);
})(10, 11);
sum(65, 44);
