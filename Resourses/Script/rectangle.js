function calculateRectangle(){
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidtText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidtText)
    console.log(width)

    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);
    console.log(length);

    const area = width * length;
    console.log(area)

    const rectangleSpan = document.getElementById('rectangle-area');
    rectangleSpan.innerText = area;
}