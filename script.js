



for (let i = 1; i <= 100; i++){
    if ((i % 3) == 0 && (i % 5) == 0){
        console.log('FizzBuzz')
        let pippo = document.createElement("div")
        pippo.append("FizzBuzz")
        document.getElementById('container').append(pippo)
        pippo.classList.add('fizz-buzz', 'col-lg', 'w-25')
    }else if ((i % 3) == 0){
        console.log('Fizz')
        let pluto = document.createElement("div")
        pluto.append("Fizz")
        document.getElementById('container').append(pluto)
        pluto.classList.add('fizz' , 'col-lg')
    } else if ((i % 5) == 0) {
        console.log('Buzz')
        let giupiter = document.createElement("div")
        giupiter.append("Buzz")
        document.getElementById('container').append(giupiter)
        giupiter.classList.add('buzz', 'col-lg')
    } else {
        console.log(i)
        let uran = document.createElement("div")
        uran.append(i)
        document.getElementById('container').append(uran)
        uran.classList.add('norm', 'col-lg')
    }
}
    