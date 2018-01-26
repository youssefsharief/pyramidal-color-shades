

function draw(stepSize, startColor) {
    window.onload = () => {
        const countOfShades = 15 - startColor + 1;
        console.log(countOfShades)
        const colorJump = 255 / countOfShades;
        let currentWidthNumber = 500
        for (let i = 0; i < countOfShades; i++) {
            const newSquare = document.createElement('div');
            newSquare.id = `id${i}Square`;
            const pixels = `${currentWidthNumber - ((stepSize ) * (i*2))}px`
            newSquare.style.width = pixels
            newSquare.style.height = pixels
            newSquare.style.alignSelf = 'center'
            newSquare.style.margin = 'auto'
            newSquare.style.display = 'flex'
            startColor = Math.floor(startColor + colorJump)
            const newColor = `rgb(${startColor}, ${startColor}, ${startColor})`
            newSquare.style.background = newColor
            if (i === 0) {
                document.querySelector(`#mainSquare`).appendChild(newSquare);
            } else {
                document.querySelector(`#id${i - 1}Square`).appendChild(newSquare);
            }
        }
    }



}


    draw(20, 0)
