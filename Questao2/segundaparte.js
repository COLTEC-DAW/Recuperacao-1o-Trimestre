
 var x = prompt("Digite o número de linhas: ");
 var y = prompt("Digite o número de colunas: ");

 var vetor = new Array(x); 
        for(b=0; b<y; b++) {
          vetor[b]= new Array(x);
       }



 Somar(vetor, x, y);
 multiplicar(vetor, x, y);
 comparar(vetor, x, y);
 dividir(vetor, x, y);
 diferentona(vetor, x, y);

 function Somar(vetor, x, y) {
     for(i=0; i<x; i++) {
        for(j=0; j<y; j++) {
           vetor[i][j] = i+j;
        }

     }  
     for(i=0; i<x; i++) {
        for(j=0; j<y; j++) {
           console.log(vetor[i][j]);
        }

     } 

 } 
 function multiplicar(vetor, x, y) {
     for(i=0; i<x; i++) {
        for(j=0; j<y; j++) {
           vetor[i][j] = i*j;
        }

     }  
     for(i=0; i<x; i++) {
        for(j=0; j<y; j++) {
           console.log(vetor[i][j]);
        }

     } 

 } 
 function comparar(vetor, x, y) {
     for(i=0; i<x; i++) {
        for(j=0; j<y; j++) {
            if(i==j) {
           vetor[i][j] = 1;
            } else {
           vetor[i][j] = 0;
            }
        }

     }  
     for(i=0; i<x; i++) {
        for(j=0; j<y; j++) {
           console.log(vetor[i][j]);
        }

     } 

 } 
  function dividir(vetor, x, y) {
     for(i=0; i<x; i++) {
        for(j=0; j<y; j++) {
           vetor[i][j] = (Math.pow(i,2))/(j+1) ;
        }

     }  
     for(i=0; i<x; i++) {
        for(j=0; j<y; j++) {
           console.log(vetor[i][j]);
        }

     } 

 } 
 function diferentona(vetor, x, y) {
     for(i=0; i<x; i++) {
        for(j=0; j<y; j++) {
            if(i>j) {
             vetor[i][j] = 1; 
            }
            if(i<j) {
                vetor[i][j] = 5; 
            }
            if (i==j) {
                vetor[i][j] = 0; 
            }
        }

     }  
     for(i=0; i<x; i++) {
        for(j=0; j<y; j++) {
           console.log(vetor[i][j]);
        }

     } 

 } 