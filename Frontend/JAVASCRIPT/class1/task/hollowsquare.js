 let hollow="";
 for(let i=1;i<=5;i++)
        {
            for (let j=1;j<=i;j++)
            {
                if (i>=2 && j>=2 && i<=4 && j<=4)
                {
                hollow+=" ";
                }
                else 
                {
               hollow+="*";             
                }
            }
          hollow+="\n"
        }
        console.log(hollow)
        
        