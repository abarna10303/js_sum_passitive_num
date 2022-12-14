var num=parseInt(prompt("how many times loop"));
for(i=0;i<num;i++)
{
    var num1=parseInt(prompt("Enter the Number1"));
    var num2=parseInt(prompt("Enter the Number2"));
    var num3=parseInt(prompt("Enter the Number3"));
    var sum=0;
   if(num1>0 && num2>0 && num3>0)
   {
        sum=num1+num2+num3;
        document.write("The sum of possitive Number is : "+sum);
        document.write("<br>");
   }
   else
   {
        document.write("This is a Nagative Numbers");
   }
}
