let daimond="";
n=4;
for( let row=1;row<=4;row++){
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
for( let row=n-1;row>=1;row--){
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
