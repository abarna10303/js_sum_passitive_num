var num=parseInt(prompt("How many times"));
var sum=0;
for(i=0;i<num;i++)
{
    var num1=parseInt(prompt("Enter the Number"));
   
   if(num1>0)
   {
        sum=sum+num1;
   }
}
document.write("The sum of possitive Number is : "+sum);

