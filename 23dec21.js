//Assignment1: -> Check from the objects.js file g_class. Give the list of students which have greater than or equal to 85 marks.


var g_class={
	
	// 'name' : "Vishal"
	//  'marks' : 85 

  'students' : [

	{
	'name' : "yash" ,
	'marks' : 90,

	} , 

	{
	'name' : "Vijay" ,
	'marks' : 80 ,
	} ,

	{
	'name' : "Akash" ,
	'marks' : 88 ,
	} ,

	{
	'name' : "Prajwal" ,
	'marks' : 55 ,
	} ,

	{
	'name' : "Ram" ,
	'marks' : 100 ,
	},
	

	],


	};


//console.log(g_class); 
//console.log(g_class.students);
//console.log(g_class.students[1].marks);



// Starts for loop here 


	console.log("Marks greater than 85 :");


	for(var a=0; a< g_class.students.length; a++)
	{
	
	
	if(g_class.students[a].marks >=85)
		{
		
	console.log(g_class.students[a].name, g_class.students[a].marks);
		
		}
	}


//Assignment2: -> Write a program to print all even numbers less than or equal to n (n is an input which we take using prompt).
/*var n=(20);
for(i=1; i<=n; i+1)
{
if(i%2 ==0)
{
console.log(i);
}
}*/




//Assignment3: -> Write a program to take an input from the user (num) and check whether it is a prime number or not.
/*var n=prompt('enter number');
{
for(i=2;i<=n;i+1)
{
if(n%i == 0)
{
break;
}
}
if(i==n)
console.log('prime');
else
console.log('not prime');
}*/