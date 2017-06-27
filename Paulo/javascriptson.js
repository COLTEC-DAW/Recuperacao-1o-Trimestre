var matriz = [1, 1, 1, 1];
for(i=0;i<3;i++){
	matriz[i]=matriz;
}

function faz(matriz,imaisjota){
	for(i=0;i<matriz.length-1;i++){
		for(j=0;j<matriz.length-1;j++){
			matriz[i][j]=imaisjota(i,j);
		}
	}
}

faz(matriz,
	function(i,j){
		return i+j;
	}
);

faz(matriz,
	function(i,j){
		return i*j;
	}
);

faz(matriz,
	function(i,j){
		return (i^2/(j+1));
	}
);

faz(matriz,
	function(i,j){
		return (i > j ? 1 : (i < j ? 5 : 0));
	}
);

faz(matriz,
	function(i,j){
		return i == j ? 1 : 0;
	}
);