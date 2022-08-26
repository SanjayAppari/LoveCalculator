function checkrel(){
    let n1=document.getElementById("name1").value;
    let n2=document.getElementById("name2").value;
    n1=n1.toLowerCase();
    n2=n2.toLowerCase();
    let m1={};
    let m2={};
    for(let i=0;i<n1.length;i++)
    {
        if(n1[i]!=' '){
        if(m1[n1[i]]==undefined)
        {
            m1[n1[i]]=1;
        }
        else{
            m1[n1[i]]+=1;
        }
    }
    }
    for(let i=0;i<n2.length;i++)
    {
       if(n2[i]!=' '){
        if(m2[n2[i]]==undefined)
        {
            m2[n2[i]]=1;
        }
        else{
            m2[n2[i]]+=1;
        }
     }
    }
    let c=0;
    for(let i=0;i<n1.length;i++)
    {
            if(m2[n1[i]]!=undefined && m1[n1[i]]!=undefined){
            if(m1[n1[i]]==m2[n1[i]])
            {
                m1[n1[i]]=undefined;
                m2[n1[i]]=undefined;
            }
            else if(m1[n1[i]]==1){
                m2[n1[i]]-=1;
                m1[n1[i]]=undefined;
            }
            else if(m2[n1[i]]==1)
            {
                m1[n1[i]]-=1;
                m2[n1[i]]=undefined;
            }
            else
            {
                if(m1[n1[i]]>m2[n1[i]])
                {
                    m1[n1[i]]-=m2[n1[i]];
                    m2[n1[i]]=undefined;
                }
                else{
                    m2[n1[i]]-=m1[n1[i]];
                    m1[n1[i]]=undefined;
                }
            }
          }
    }
   
    for(let i=0;i<n1.length;i++)
    {
        if(m1[n1[i]]==undefined) continue;
        else{
            c+=m1[n1[i]];
            m1[n1[i]]=undefined;
        }
    }
    for(let i=0;i<n2.length;i++)
    {
        if(m2[n2[i]]!=undefined)
        {
            c+=m2[n2[i]];
            m2[n2[i]]=undefined;
        }
    }
    var s="flames";
    var n=6;
    while(n!=1)
    {
        var k=c%n;
        if(k==0)
        var s1=s.substring(0,n-1);
        else{
        var s1=s.substring(k,n)+s.substring(0,k-1);
        }
        s=s1;
        n--;
    }
    n1=n1.toUpperCase();
    n2=n2.toUpperCase();
    if(s=="e")
    {
        document.getElementById("img-id").src="images/e.jpg";
        var p=n1+" and "+n2+" are ENEMIES";
        document.getElementById("p1").innerHTML=p;
    }
    else if(s=="f")
    {
        document.getElementById("img-id").src="images/f.jpg";
        var p=n1+" and "+n2+" are FRIENDS";
        document.getElementById("p1").innerHTML=p;
    }
    else if(s=="l")
    {
        document.getElementById("img-id").src="images/l.jpg";
        var p=n1+" and "+n2+" are LOVERS";
        document.getElementById("p1").innerHTML=p;
    }
    else if(s=="a")
    {
        document.getElementById("img-id").src="images/a.jpg";
        var p="There Is Just ATTRACTION BETWEEN "+n1+" and "+n2;
        document.getElementById("p1").innerHTML=p;
    }
    else if(s=="m")
    {
        document.getElementById("img-id").src="images/m.jpg";
        var p=n1+" and "+n2+" are Going To MARRY EACHOTHER";
        document.getElementById("p1").innerHTML=p;
    }
    else if(s=="s")
    {
        document.getElementById("img-id").src="images/s.jpg";
        var p=n1+" and "+n2+" are SIBLINGS";
        document.getElementById("p1").innerHTML=p;
    }
}
