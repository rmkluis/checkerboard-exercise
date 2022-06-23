// Your JS goes here
let container = document.createElement('div');
container.style.background = "linear-gradient(to bottom, blue, cyan)"
document.body.append(container);

for (let i = 0; i < 8; i++) {
    for( let j = 0; j < 8; j++) {
    let div = document.createElement('div');
    div.style.width = "11.1%";
    div.style.float = "left";
    div.style.paddingBottom = "11.1%";
    div.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
    // div.style.background.getRandomColor()
    // if ((i % 2 === 0 && j % 2 == 0) || (i % 2 === 1 && j % 2 === 1)) {
    //     div.style.background = 'red';
    // } else if ((i % 2 === 1 && j % 2 == 0) || (i % 2 === 0 && j % 2 === 1)) {
    //     div.style.background = 'black'
    // }
    div.style.border = "1px solid black";
    document.body.append(div);
    }
}