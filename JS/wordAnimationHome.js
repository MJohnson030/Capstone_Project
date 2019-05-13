function wordAnimation() {
    var string = "MEDICAL ASSISTING";
    var str = string.split("");
    var el = document.getElementById('str');
    (function animate() {
    str.length > 0 ? el.innerHTML += str.shift( ) : clearTimeout(running); 
    var running = setTimeout(animate, 90);
    })();
     
}

setTimeout(wordAnimation, 1500);