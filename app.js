let board = document.querySelector('#board')
let lineId = 1;
let verticalLineId = 1;
let blue = 0; 
let red = 0;
let redPoints = 0; 
let bluePoints = 0;
for(let i = 1; i <= 100; i++){
    let row;
    lineId <= 9 ? row = 1 : lineId <= 18 ? row = 2 : lineId <= 27 ? row = 3 : lineId <= 36 ? row = 4 : lineId <= 45 ? row = 5 : lineId <= 54 ? row = 6 : lineId <= 63 ? row = 7 : lineId <= 72 ? row = 8 : lineId <= 81 ? row = 9 : row = 10;  
    let square = document.createElement('div');
    square.classList.add('square');
    square.classList.add('grid')
    let dot = document.createElement('div');
    let line = document.createElement('div');
    let verticalLine = document.createElement('div');
    line.addEventListener('click', clickFunction)
    verticalLine.addEventListener('click', clickFunction)
    verticalLine.classList.add('vertical-line')
    dot.classList.add('dot')
    line.classList.add('line')
    if(i > 90){
        let horizantilSquare = document.createElement('div');
        horizantilSquare.classList.add('horizantil-square')
        if(i % 10 === 0){
            let smallSquare = document.createElement('div')
            smallSquare.style.width = '5px';
            smallSquare.style.height = '5px';
            smallSquare.append(dot)
            board.append(smallSquare)
        }else{
            horizantilSquare.append(dot);
            horizantilSquare.append(line);
            line.setAttribute('id', 'h' + lineId)
            line.setAttribute('data-row', row)
            lineId++;
            board.append(horizantilSquare);
        }
    }else{
        if(i % 10 === 0){
            let verticalSquare = document.createElement('div');
            verticalSquare.classList.add('vertical-square')
            verticalSquare.append(dot)
            verticalSquare.append(verticalLine);
            verticalLine.setAttribute('id','v' + verticalLineId)
            verticalLineId++;
            board.append(verticalSquare)
        }else{
            square.append(dot);
            square.append(line)
            square.append(verticalLine)
            line.setAttribute('id', 'h' + lineId);
            line.setAttribute('data-row', row)
            verticalLine.setAttribute('id', 'v' + verticalLineId)
            lineId++;
            verticalLineId++;
            board.append(square);
        }
    }
}

function clickFunction(e){
    let clicked = e.target;
    if(clicked.classList.contains('red') || clicked.classList.contains('blue')){
        return;
    }
    rules(clicked);
    if(red <= blue){
        clicked.classList.add('red')
        red++;
    }else if(red > blue){
        clicked.classList.add('blue')
        blue++;
    }
    
}
function rules(arg){
    let arr = arg.id.split('')
    arr.shift();
    let num = parseInt(arr.join(''))
    if(arg.classList.contains('line')){
        if(arg.getAttribute('data-row') === '1'){
            let one = document.querySelector(`[id='h${num + 9}']`)
            let two = document.querySelector(`[id='v${num}']`)
            let three = document.querySelector(`[id='v${num + 1}']`)
            if(one.classList.contains('red') || one.classList.contains('blue')){
                if(two.classList.contains('red') || two.classList.contains('blue')){
                    if(three.classList.contains('red') || three.classList.contains('blue')){
                        if(red <= blue){
                            arg.parentNode.classList.add('light-red')
                            redPoints++;
                        }else if(red > blue){
                            arg.parentNode.classList.add('light-blue')
                            bluePoints++;
                        }
                    }
                }                
            }
        }else if(arg.getAttribute('data-row') === '2'){
            let one = document.querySelector(`[id='h${num + 9}']`)
            let two = document.querySelector(`[id='v${num + 1}']`)
            let three = document.querySelector(`[id='v${num + 2}']`)
            let four = document.querySelector(`[id='h${num - 9}']`)
            let five = document.querySelector(`[id='v${num - 8}']`)
            let six = document.querySelector(`[id='v${num - 9}']`)
            if(one.classList.contains('red') || one.classList.contains('blue')){
                if(two.classList.contains('red') || two.classList.contains('blue')){
                    if(three.classList.contains('red') || three.classList.contains('blue')){
                        if(red <= blue){
                            arg.parentNode.classList.add('light-red')
                            redPoints++;
                        }else if(red > blue){
                            arg.parentNode.classList.add('light-blue')
                            bluePoints++;
                        }
                    }
                }                
            }
            if(four.classList.contains('red') || four.classList.contains('blue')){
                if(five.classList.contains('red') || five.classList.contains('blue')){
                    if(six.classList.contains('red') || six.classList.contains('blue')){
                        if(red <= blue){
                            four.parentNode.classList.add('light-red')
                            redPoints++;
                        }else if(red > blue){
                            four.parentNode.classList.add('light-blue')
                            bluePoints++;
                        }
                    }
                }                
            }
        }else if(arg.getAttribute('data-row') === '3'){
            let one = document.querySelector(`[id='h${num + 9}']`)
            let two = document.querySelector(`[id='v${num + 2}']`)
            let three = document.querySelector(`[id='v${num + 3}']`)
            let four = document.querySelector(`[id='h${num - 9}']`)
            let five = document.querySelector(`[id='v${num - 7}']`)
            let six = document.querySelector(`[id='v${num - 8}']`)
            if(one.classList.contains('red') || one.classList.contains('blue')){
                if(two.classList.contains('red') || two.classList.contains('blue')){
                    if(three.classList.contains('red') || three.classList.contains('blue')){
                        if(red <= blue){
                            arg.parentNode.classList.add('light-red')
                            redPoints++;
                        }else if(red > blue){
                            arg.parentNode.classList.add('light-blue')
                            bluePoints++;
                        }
                    }
                }                
            }
            if(four.classList.contains('red') || four.classList.contains('blue')){
                if(five.classList.contains('red') || five.classList.contains('blue')){
                    if(six.classList.contains('red') || six.classList.contains('blue')){
                        if(red <= blue){
                            four.parentNode.classList.add('light-red')
                            redPoints++;
                        }else if(red > blue){
                            four.parentNode.classList.add('light-blue')
                            bluePoints++;
                        }
                    }
                }                
            }
        }else if(arg.getAttribute('data-row') === '4'){
            let one = document.querySelector(`[id='h${num + 9}']`)
            let two = document.querySelector(`[id='v${num + 3}']`)
            let three = document.querySelector(`[id='v${num + 4}']`)
            let four = document.querySelector(`[id='h${num - 9}']`)
            let five = document.querySelector(`[id='v${num - 6}']`)
            let six = document.querySelector(`[id='v${num - 7}']`)
            if(one.classList.contains('red') || one.classList.contains('blue')){
                if(two.classList.contains('red') || two.classList.contains('blue')){
                    if(three.classList.contains('red') || three.classList.contains('blue')){
                        if(red <= blue){
                            arg.parentNode.classList.add('light-red')
                            redPoints++;
                        }else if(red > blue){
                            arg.parentNode.classList.add('light-blue')
                            bluePoints++;
                        }
                    }
                }                
            }
            if(four.classList.contains('red') || four.classList.contains('blue')){
                if(five.classList.contains('red') || five.classList.contains('blue')){
                    if(six.classList.contains('red') || six.classList.contains('blue')){
                        if(red <= blue){
                            four.parentNode.classList.add('light-red')
                            redPoints++;
                        }else if(red > blue){
                            four.parentNode.classList.add('light-blue')
                            bluePoints++;
                        }
                    }
                }                
            }
        }else if(arg.getAttribute('data-row') === '5'){
            let one = document.querySelector(`[id='h${num + 9}']`)
            let two = document.querySelector(`[id='v${num + 4}']`)
            let three = document.querySelector(`[id='v${num + 5}']`)
            let four = document.querySelector(`[id='h${num - 9}']`)
            let five = document.querySelector(`[id='v${num - 5}']`)
            let six = document.querySelector(`[id='v${num - 6}']`)
            if(one.classList.contains('red') || one.classList.contains('blue')){
                if(two.classList.contains('red') || two.classList.contains('blue')){
                    if(three.classList.contains('red') || three.classList.contains('blue')){
                        if(red <= blue){
                            arg.parentNode.classList.add('light-red')
                            redPoints++;
                        }else if(red > blue){
                            arg.parentNode.classList.add('light-blue')
                            bluePoints++;
                        }
                    }
                }                
            }
            if(four.classList.contains('red') || four.classList.contains('blue')){
                if(five.classList.contains('red') || five.classList.contains('blue')){
                    if(six.classList.contains('red') || six.classList.contains('blue')){
                        if(red <= blue){
                            four.parentNode.classList.add('light-red')
                            redPoints++;
                        }else if(red > blue){
                            four.parentNode.classList.add('light-blue')
                            bluePoints++;
                        }
                    }
                }                
            }
        }else if(arg.getAttribute('data-row') === '6'){
            let one = document.querySelector(`[id='h${num + 9}']`)
            let two = document.querySelector(`[id='v${num + 5}']`)
            let three = document.querySelector(`[id='v${num + 6}']`)
            let four = document.querySelector(`[id='h${num - 9}']`)
            let five = document.querySelector(`[id='v${num - 4}']`)
            let six = document.querySelector(`[id='v${num - 5}']`)
            if(one.classList.contains('red') || one.classList.contains('blue')){
                if(two.classList.contains('red') || two.classList.contains('blue')){
                    if(three.classList.contains('red') || three.classList.contains('blue')){
                        if(red <= blue){
                            arg.parentNode.classList.add('light-red')
                            redPoints++;
                        }else if(red > blue){
                            arg.parentNode.classList.add('light-blue')
                            bluePoints++;
                        }
                    }
                }                
            }
            if(four.classList.contains('red') || four.classList.contains('blue')){
                if(five.classList.contains('red') || five.classList.contains('blue')){
                    if(six.classList.contains('red') || six.classList.contains('blue')){
                        if(red <= blue){
                            four.parentNode.classList.add('light-red')
                            redPoints++;
                        }else if(red > blue){
                            four.parentNode.classList.add('light-blue')
                            bluePoints++;
                        }
                    }
                }                
            }
        }else if(arg.getAttribute('data-row') === '7'){
            let one = document.querySelector(`[id='h${num + 9}']`)
            let two = document.querySelector(`[id='v${num + 6}']`)
            let three = document.querySelector(`[id='v${num + 7}']`)
            let four = document.querySelector(`[id='h${num - 9}']`)
            let five = document.querySelector(`[id='v${num - 3}']`)
            let six = document.querySelector(`[id='v${num - 4}']`)
            if(one.classList.contains('red') || one.classList.contains('blue')){
                if(two.classList.contains('red') || two.classList.contains('blue')){
                    if(three.classList.contains('red') || three.classList.contains('blue')){
                        if(red <= blue){
                            arg.parentNode.classList.add('light-red')
                            redPoints++;
                        }else if(red > blue){
                            arg.parentNode.classList.add('light-blue')
                            bluePoints++;
                        }
                    }
                }                
            }
            if(four.classList.contains('red') || four.classList.contains('blue')){
                if(five.classList.contains('red') || five.classList.contains('blue')){
                    if(six.classList.contains('red') || six.classList.contains('blue')){
                        if(red <= blue){
                            four.parentNode.classList.add('light-red')
                            redPoints++;
                        }else if(red > blue){
                            four.parentNode.classList.add('light-blue')
                            bluePoints++;
                        }
                    }
                }                
            }
        }else if(arg.getAttribute('data-row') === '8'){
            let one = document.querySelector(`[id='h${num + 9}']`)
            let two = document.querySelector(`[id='v${num + 7}']`)
            let three = document.querySelector(`[id='v${num + 8}']`)
            let four = document.querySelector(`[id='h${num - 9}']`)
            let five = document.querySelector(`[id='v${num - 2}']`)
            let six = document.querySelector(`[id='v${num - 3}']`)
            if(one.classList.contains('red') || one.classList.contains('blue')){
                if(two.classList.contains('red') || two.classList.contains('blue')){
                    if(three.classList.contains('red') || three.classList.contains('blue')){
                        if(red <= blue){
                            arg.parentNode.classList.add('light-red')
                            redPoints++;
                        }else if(red > blue){
                            arg.parentNode.classList.add('light-blue')
                            bluePoints++;
                        }
                    }
                }                
            }
            if(four.classList.contains('red') || four.classList.contains('blue')){
                if(five.classList.contains('red') || five.classList.contains('blue')){
                    if(six.classList.contains('red') || six.classList.contains('blue')){
                        if(red <= blue){
                            four.parentNode.classList.add('light-red')
                            redPoints++;
                        }else if(red > blue){
                            four.parentNode.classList.add('light-blue')
                            bluePoints++;
                        }
                    }
                }                
            }
        }else if(arg.getAttribute('data-row') === '9'){
            let one = document.querySelector(`[id='h${num + 9}']`)
            let two = document.querySelector(`[id='v${num + 8}']`)
            let three = document.querySelector(`[id='v${num + 9}']`)
            let four = document.querySelector(`[id='h${num - 9}']`)
            let five = document.querySelector(`[id='v${num - 1}']`)
            let six = document.querySelector(`[id='v${num - 2}']`)
            if(one.classList.contains('red') || one.classList.contains('blue')){
                if(two.classList.contains('red') || two.classList.contains('blue')){
                    if(three.classList.contains('red') || three.classList.contains('blue')){
                        if(red <= blue){
                            arg.parentNode.classList.add('light-red')
                            redPoints++;
                        }else if(red > blue){
                            arg.parentNode.classList.add('light-blue')
                            bluePoints++;
                        }
                    }
                }                
            }
            if(four.classList.contains('red') || four.classList.contains('blue')){
                if(five.classList.contains('red') || five.classList.contains('blue')){
                    if(six.classList.contains('red') || six.classList.contains('blue')){
                        if(red <= blue){
                            four.parentNode.classList.add('light-red')
                            redPoints++;
                        }else if(red > blue){
                            four.parentNode.classList.add('light-blue')
                            bluePoints++;
                        }
                    }
                }                
            }
        }else if(arg.getAttribute('data-row') === '10'){
                let one = document.querySelector(`[id='h${num - 9}']`)
                let two = document.querySelector(`[id='v${num - 1}']`)
                let three = document.querySelector(`[id='v${num}']`)
                if(one.classList.contains('red') || one.classList.contains('blue')){
                    if(two.classList.contains('red') || two.classList.contains('blue')){
                        if(three.classList.contains('red') || three.classList.contains('blue')){
                            if(red <= blue){
                                one.parentNode.classList.add('light-red')
                                redPoints++;
                            }else if(red > blue){
                                one.parentNode.classList.add('light-blue')
                                bluePoints++;
                            }
                        }
                    }                
                }
        }


















    }else if(arg.classList.contains('vertical-line')){
        console.log(num)
    }
}