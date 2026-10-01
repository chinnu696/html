n=24;
fs=0;
for(f=1;f<=n/2;f++)
{
	if(n%f==0)
	{
	   fs=fs+f;
	}
}
if(fs==n)
{
	
console.log(n+"is perfect number");
}	
else{
	console.log(n+"is not perfect number");
}
