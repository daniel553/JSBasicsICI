document.getElementById('hellobutton').onclick = function() { 
    let dog = new Animal();
    dog.legs = 4;
    dog.name = 'Duck'
    document.getElementById('myElement').innerText = 'The dog name is: ' + dog.name + ' has: ' + dog.legs + ' legs'; 
}