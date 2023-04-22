let myNum;
do {
    myNum = prompt("Enter a number Between 5 and 20 Please.");
}   while (myNum < 5 || myNum > 20);
for (let i = 1; i <= myNum; i++) {
    document.write(i + "<br>");
   
}