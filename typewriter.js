const sentence = "hello there from lighthouse labs";

for(let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
        if( i === sentence.length - 1) {
            return  process.stdout.write('\n')
        }
        process.stdout.write(sentence[i])
    }, 100* i)
    
    };
  
  

 