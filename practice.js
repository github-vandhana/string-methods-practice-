var employeeList="vandana,deepa,pavithra";
var employeeBonuslist="varshini,swetha";
console.log("employeeList");
let list=employeeList.length;
console.log(list);
 var part=employeeList.slice(8,9);//(start ,end)end not included ,space also calculated as 1
console.log(part);
console.log(employeeList.charAt(2));
console.log(employeeList.charCodeAt(1));
console.log(employeeList.substring(8,0));//less than 0 values is treated as 0
console.log((employeeList.substr(4,5)));//second parameter is length
console.log((employeeList.replace("deepa","devi")));
console.log((employeeList.indexOf("deepa")));
console.log((employeeList.lastIndexOf("vandana")));
console.log((employeeList.concat("danusya")));
console.log((employeeList.toUpperCase()));
console.log((employeeList.toLowerCase()));
console.log((employeeBonuslist.trim()));
let text = "5";
console.log(text.padStart(4,"0"));
console.log(text.padEnd(4,"0"));
console.log((employeeList.split('')));//converts array
console.log((employeeList.match('/van/an/')));
console.log((employeeList.includes('vandana')));
console.log((employeeList.startsWith('vandana')));
console.log((employeeList.endsWith('pavithra')));

















