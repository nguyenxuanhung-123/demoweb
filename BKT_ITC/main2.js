//bài 1
var  learning ='ITC xin chao, hoc JS co ban cung ITC nhe, JS JS va JS';
console.log('Chuỗi có tổng các kí tự là:'+learning.length);
console.log('vị trí của chữ ITC cuối cùng trong chuỗi trên:'+learning.lastIndexOf('ITC'));
console.log('Dùng split để tách các từ:'+learning.split(" "));
console.log('Thay thế tất cả từ JS thành Javascipt: '+learning.replace(/JS/g,'Javascipt'));
console.log('Kiểm tra xem có chữ JS trong chuỗi không: '+learning.includes('JS'));
//bài 2

//bài 3
var array=[2,5,12,4,99,8];
array.sort(function(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});
console.log('sắp xếp theo chiều tăng dần của mảng:'+array);
array.sort(function(a, b) {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
});
console.log('sắp xếp theo chiều giảm dần của mảng:'+array);
//bai6
//6.1
const d = new Date("2023-10-1");
console.log(d.getDate()+'-'+d.getMonth()+'-'+d.getFullYear());
//6.2
function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
var gift = [
    'Bạn đen lắm',
    '10 coin',
    '20 coin',
    '30 coin',
    'Giải khuyến khích',
    'Giải nhì',
    'Giải nhất',
    'Giải đặc biệt (^.^)'
];

console.log(shuffle(gift));




 


