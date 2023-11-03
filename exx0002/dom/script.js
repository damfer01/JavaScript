var a = window.document.getElementById("area");
  a.addEventListener('click', clicar);
  a.addEventListener('mouseenter', entra);
  a.addEventListener('mouseout',saiu);

    function clicar(){

        a.innerText = "clicou!";
        a.style.background = "green";
    };
   function entra() {,
    
       a.innerText = "entrou!";
       a.style.background = "blue";
    };
   function saiu(){
       a.innerText = "saiu!";
       a.style.background = "red";
    
};