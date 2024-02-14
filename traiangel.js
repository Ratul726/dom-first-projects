// console.log('hello world')
// function calculateTraianleArea (){
//     //console.log('Insite the Function')
//     document.getElementById('triangel-base').addEventListener('click',function(){
//         console.log('hello world')
//     })
// }

function calculateTraianleArea () {
    const triangelBaseInput = document.getElementById('triangel-base');
    const triangelBaseText = triangelBaseInput.value;
    const base = parseInt(triangelBaseText);
    // console.log(base);
    const triangleHrightInput = document.getElementById('triangel-height');
    // console.log(triangleHrightInput)
    const triangelHeightText = triangleHrightInput.value;
    const height = parseFloat(triangelHeightText)
    // console.log(height);

// calculate triangle area
    const area = 0.5 * base * height;
    console.log('area of the triangle is:',area)

    // display traingle area
    const traingleAreaSpan =document.getElementById('traiangel-area');
    traingleAreaSpan.innerText = area;
}

function calculateRhombusArea () {
    const triangelBaseInput = document.getElementById('rhombus-length');
    const triangelBaseText = triangelBaseInput.value;
    const base = parseInt(triangelBaseText);
    // console.log(base);
    const triangleHrightInput = document.getElementById('rhombus-width');
    // console.log(triangleHrightInput)
    const triangelHeightText = triangleHrightInput.value;
    const height = parseFloat(triangelHeightText)
    // console.log(height);

// calculate triangle area
    const area = 0.5 * base * height;
    console.log('area of the triangle is:',area)

    // display traingle area
    const traingleAreaSpan =document.getElementById('rhombus-area');
    traingleAreaSpan.innerText = area;
}

function calculatePentagonArea() {
    const triangelBaseInput = document.getElementById('Pentagon-length');
    const triangelBaseText = triangelBaseInput.value;
    const base = parseInt(triangelBaseText);
    // console.log(base);
    const triangleHrightInput = document.getElementById('Pentagon-width');
    // console.log(triangleHrightInput)
    const triangelHeightText = triangleHrightInput.value;
    const height = parseFloat(triangelHeightText)
    // console.log(height);

// calculate triangle area
    const area = 0.5 * base * height;
    console.log('area of the triangle is:',area)

    // display traingle area
    const traingleAreaSpan =document.getElementById('Pentagon-area');
    traingleAreaSpan.innerText = area;
}