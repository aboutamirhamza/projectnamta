for(let i = 1; i<=100; i++){
    document.write('<div class= "box">')
    for(let j = 1; j<=10; j++){
        let result = i*j
        document.write(i + ' x ' + j + ' = ' + result + '<br>')
        
    }
    document.write("</div>")
}