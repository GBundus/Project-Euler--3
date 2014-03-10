	function listPrimeFactors(number){
		outList=[];
		for (x=2;x<Math.sqrt(number)+1;x++){
			if ( (number%x)==0  ){
				outList.push(x);
			}
			
		}
		return outList;
		

	}
	isPrime.listPrimes=[];
	function isPrime(x){
		if (isPrime.listPrimes[x]!= null){
			output= isPrime.listPrimes[x];
			}
		else{
			isPrime.listPrimes[x]=true;
			for (i=2;i<Math.sqrt(x)+1;i++){ 
				if (x%i===0){
					isPrime.listPrimes[x]=false;
				}
			}
			output=isPrime.listPrimes[x];
		}
		return output;
		}
		
	function largestPrimeFactor(x){			
		x=listPrimeFactors(x);
		
		document.getElementById('outbox').innerHTML= x[x.length-1];
		return x;
		
		}