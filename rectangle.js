function calculateRectangleArea(){
    // get length 
    const rectangleLength = document.getElementById('rectangle-length');
    // console.log(rectangleLength)
    const rectangleValue = rectangleLength.value;
    const lengthText = parseFloat(rectangleValue)
    console.log(lengthText);

    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleValue_2 = rectangleWidth.value;
    const widthText = parseFloat(rectangleValue_2);
    console.log(widthText)

    // calculate value
    const area = lengthText * widthText;
    console.log('a',area)
    // display rectangle area

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area
}

function calculateParallelogramArea(){
    const ParallelogramLength = document.getElementById('parallelogram-length')
    // console.log(ParallelogramLength)
    const parallelogramValue = ParallelogramLength.value;
    const lengthText = parseFloat(parallelogramValue);
    console.log(lengthText);

    const parallelogramWidth =document.getElementById('parallelogram-width');
    const parallelogramValue_2 =parallelogramWidth.value;
    const widthText = parseFloat(parallelogramValue_2);
    console.log(widthText);
    
    //calculet area
    const area = lengthText * widthText;
    console.log('area of the triangle is:',area);
    
    const spanValue =document.getElementById('parallelogram-area');
    spanValue.innerText = area;
}

function calculateEllipseArea(){
    const ParallelogramLength = document.getElementById('Ellipse-length')
    // console.log(ParallelogramLength)
    const parallelogramValue = ParallelogramLength.value;
    const lengthText = parseFloat(parallelogramValue);
    // console.log(lengthText);

    const parallelogramWidth =document.getElementById('Ellipse-width');
    const parallelogramValue_2 =parallelogramWidth.value;
    const widthText = parseFloat(parallelogramValue_2);
    // console.log(widthText);
    
    //calculet area
    const area = 3.1416* lengthText * widthText;
    console.log('area of the triangle is:',area);
    
    const spanValue =document.getElementById('Ellipse-area');
    spanValue.innerText = area;
}