function mincost(arr)
{ 
//write your code here
// return the min cost
	let totalcost=0
	arr.sort((a,b)=>a-b)
	arr.forEach(e=> totalcost=totalcost+(totalcost+e)
	return totalcost  
}

module.exports=mincost;
