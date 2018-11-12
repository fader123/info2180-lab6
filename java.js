window.onload = function(){
   
        let search_value = document.getElementById("search");
        let result = document.getElementById("result");
             let buttonA =  document.getElementById("buta");
        let buttonB =  document.getElementById("butb");
        buttonA.addEventListener("click", function(){
       let xml = new XMLHttpRequest();
       xml.onreadystatechange = function(){
           if(xml.readyState === 4 && xml.status === 200){
               result.innerHTML ="<h3>Result</h3>"+xml.responseText;
           }
       };
     
         xml.open("GET","request.php?q="+search_value.value,true);
       xml.send();
    });
    buttonB.addEventListener("click", function(){
       let xml = new XMLHttpRequest();
       xml.onreadystatechange = function(){
           if(xml.readyState === 4 && xml.status === 200){
               let output = "<ol>";
               let text = xml.responseXML;
               let terms = text.getElementsByTagName("definition");
               for(let counter = 0; counter<terms.length;counter++){
                   output+="<li><h3>"+terms[counter].getAttribute("name")+"</h3><p>"+terms[counter].childNodes[0].nodeValue+"</p><p> -"+terms[counter].getAttribute("author")+"</p></li>";
               }
               output+="</ol>";
               result.innerHTML ="<h2>Result</h2>"+output;
           }
       };
       xml.open("GET","request.php?q=&all=true",true);
       xml.send();
    });

}; 