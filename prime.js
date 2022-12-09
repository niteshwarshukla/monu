let num = 10;
var isPrimeNumber = true;
for (let i=2; i<num; i++){
if(num%i==0){
 isPrimeNumber = false;
 break;}
}

if (isPrimeNumber == true){
console.log(num,"Prime number");
} 
else {
 console.log(num,"is not a Prime number ");
} 