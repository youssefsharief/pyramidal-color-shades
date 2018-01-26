
window.onload = () => {
    draw(20,10)
}
function draw(stepSize, startColor) {
    const countOfShades = 15 - startColor + 1;
    const colorJump = 255 / countOfShades;
    const currentWidthNumber = countOfShades * stepSize * 2
    for (let i = 0; i < countOfShades; i++) {
        const newSquare = document.createElement('div');
        newSquare.id = `id${i}Square`;
        const pixels = `${currentWidthNumber - ((stepSize) * (i * 2))}px`
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

function resetGraph() {
    document.getElementById('id0Square').remove()
}

function submit() {
    if(document.getElementById('id0Square')) {
        resetGraph()
    }
    const gap = document.getElementById('gap').value
    const firstColor = document.getElementById('first-color').value
    if (Number.isFinite(parseFloat(gap)) && Number.isFinite(parseFloat(firstColor))) {
        draw(parseFloat(gap), parseFloat(firstColor))
    }
}
