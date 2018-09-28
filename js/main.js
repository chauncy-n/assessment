
var text = document.getElementsByTagName("P")[0].textContent;

var addBtn = document.getElementById('add');

var subBtn = document.getElementById('subtract');

addBtn.addEventListener('click', function(){
    var input = document.getElementById('text').value;
    console.log(input);
    text = parseFloat(input) + parseFloat(text);
    document.getElementById("total").textContent = text;
    console.log(text);
});

subBtn.addEventListener('click', function(){
    var input = document.getElementById('text').value;
    text = parseFloat(text) - parseFloat(input);
    if (text < 0){
        document.getElementById('total').style.color = "red";
    } 
    document.getElementById("total").textContent = text;    
});
