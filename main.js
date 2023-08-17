var greeting= 'Welcome to Nodemy, Nodemy is stand for Nodejs Academy';
console.log(typeof greeting);
console.log(greeting);
console.log(greeting.length);
console.log('Vị trí nodemy la:'+ greeting.indexOf('nodemy'));
console.log('Vị trí Nodemy là: '+greeting.indexOf('Nodemy'));
console.log('kiem tra xem có bắt đầu với welcom hay ko: '+greeting.startsWith('Welcome'));
console.log('dùng .substring lay chu Academy: '+greeting.substring(46,53));
console.log('Dùng split tach cac tu:'+ greeting.split(" "));
console.log('Dùng trim để xóa dấu cách ngoài rìa:'+greeting.trim(" "));
console.log('Dùng include kiểm tra Nodemy có trong câu trên ko:'+ greeting.includes('Nodemy'));
console.log('dùng replace thay thế Nodemy-> NODEMY:'+ greeting.replace(/Nodemy/g,'NODEMY'));
console.log('Dùng toUppercase để in hoa chữ cái: '+greeting.toUpperCase());
//let index=4;
console.log('dùng charat lấy kí tự ở vt số 4: '+greeting.charAt(4));






