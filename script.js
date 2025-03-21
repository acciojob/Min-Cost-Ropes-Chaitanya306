function mincost(arr)
{ 
//write your code here
// return the min cost
	let totalcost=0
	arr.sort((a,b)=>a-b)
	if(arr.length<=1) return 0
	else if(arr.length==2) return arr[0]+arr[1]
	else{
		totalcost=arr[0]+arr[1]
		for(let i=2;i<arr.length;i++){
			totalcost=totalcost+(totalcost+arr[i])
		}
		return totalcost
	}
	  
}

module.exports=mincost;
