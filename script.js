function mincost(arr)
{ 
//write your code here
// return the min cost
	let totalcost=0
	arr.sort((a,b)=>a-b)
	arr.reduce((total,num)=>{
		totalcost+=(total+num)
		return (total+num)
	},0)
	return totalcost  
}

module.exports=mincost;
