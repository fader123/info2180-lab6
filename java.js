window.onload = function(){
   
        let search_value = document.getElementById("search");
        let result = document.getElementById("result");
        let button =  document.getElementById("buta");
        button.addEventListener("click", function(){
       let xml = new XMLHttpRequest();
       xml.onreadystatechange = function(){
           if(xml.readyState === 4 && xml.status === 200){
               result.innerHTML ="<h3>Result</h3>"+xml.responseText;
           }
       };
     
         xml.open("GET","request.php?q="+search_value.value,true);
       xml.send();
    });
}; 