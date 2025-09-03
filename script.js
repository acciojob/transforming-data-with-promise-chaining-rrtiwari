document.getElementById("btn").addEventListener("click",(e)=>{
	e.preventDefault();
   let input=document.getElementById("ip").value;
   let output=document.getElementById("output");
   show(input).
	   then((result)=>{
		  output.textContent=`Result: ${result}`;
	      return mult(result);
   }).then((result)=>{
		   output.textContent=`Result: ${result}`;
		   return sub(result);
   }).then((result)=>{
		   output.textContent=`Result: ${result}`;
		   return divide(result);
    }).then((result)=>{
		   output.textContent=`Result: ${result}`;
		   return final(result);
   }).then((result)=>{
		   output.textContent=`Final Result:${result}`;    
   })
})
function show(result){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(result);
		},2000);
	});
}
function mult(result){
	return  new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(result*2);
		},1000)
	})
}
function sub(result){
	return  new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(result-3);
		},1000)
	})
}
function divide(result){
	return  new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(result/2);
		},1000)
	})
}
function final(result){
	return  new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(result+10);
		},1000)
	})
}

