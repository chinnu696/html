 n=23;
fc=0;
for(f=2;f<23;f++)
{
	if(n%f==0)
	{
		f=fc+1;
	}
}
if(fc==0)
{
	console.log(n+"is prime");
}
else{
	console.log(n+"is  not prime");
}

