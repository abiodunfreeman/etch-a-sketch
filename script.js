const container = document.querySelector('#container');
const row   = document.createElement('div');
const row1  = document.createElement('div');
const row2  = document.createElement('div');
const row3  = document.createElement('div');
const frag = document.createDocumentFragment();
const boxes = []; //captures div 0-15 in an array

//Reset button functionality
const rBtn = document.querySelector('#reset');

rBtn.addEventListener('click', () => {
    boxes.forEach(function(box) {
        box.classList.remove('box-hover');
    })
})


for (var i = 0; i < 4; i++) {
    var div = document.createElement('div');
    div.textContent = i;
    div.className = 'grid'
    boxes.push(div);
    frag.appendChild(div);
}
row.appendChild(frag);
for (var i = 4; i < 8; i++) {
    var div = document.createElement('div');
    div.textContent = i;
    div.className = 'grid'
    boxes.push(div);
    frag.appendChild(div);
}
row1.appendChild(frag);
for (var i = 8; i < 12; i++) {
    var div = document.createElement('div');
    div.textContent = i;
    div.className = 'grid'
    boxes.push(div);
    frag.appendChild(div);
}
row2.appendChild(frag);
for (var i = 12; i < 16; i++) {
    var div = document.createElement('div');
    div.textContent = i;
    div.className = 'grid'
    boxes.push(div);
    frag.appendChild(div);
}
row3.appendChild(frag);




container.appendChild(row);
container.appendChild(row1);
container.appendChild(row2);
container.appendChild(row3);
console.log(boxes);

//adds eventlisteners to each box 
boxes.forEach(function(box) {
    box.addEventListener('mouseenter', (e) => {
        console.log(box)
        console.log(e)
    })
})
boxes.forEach(function(box) {
    box.addEventListener('mouseleave', (e) => {
        
        box.classList.toggle('box-hover');
    })
})

