function calculateTriangle(){
  const triangleBaseInput = document.getElementById('triangle-base');
  const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText)
  console.log(base)

  const triangleHeightInput = document.getElementById('triangle-height');
  const triangleHeightText = triangleHeightInput.value;
  const height = parseFloat(triangleHeightText);
  console.log(height)

  const area = 0.5 * base * height;
  console.log('Are of triangle is :', area)

  // display triangle area
  const triangleSpan = document.getElementById('triangle-area');
  triangleSpan.innerText = area;
}

