let daimond="";
n=5;
for( let row=1;row<=5;row++){
    for(let sp=3; sp>=n-row;sp--){
        daimond+=" ";
    }
    for(let col=9;col>=2*row-1;col--){
        if(col==9||(2*row-1==col)){
            daimond+="*";
        }
        else{
            daimond+=" ";
        }
    }
            daimond+="\n";

}
for( let row=2;row<=5;row++){
    for(let sp=1; sp<=n-row;sp++){
        daimond+=" ";
    }
    for(let col=1;col<=2*row-1;col++){
        if(col==1||(2*row-1==col)){
            daimond+="*";
        }
        else{
            daimond+=" ";
        }
    }
            daimond+="\n";

}
console.log(daimond);
