
const generateScenery = (src, length) => {
    const array = [];
    let div = document.createElement('div');
    div.style.display ='flex';
    div.style.flexWrap = 'Wrap';
    div.style.width = '1000px';
    for (let i = 0; i < length; i++) {
        let img = document.createElement('img');
        img.src = src;

        array.push(img);
    }
    for (let element of array) {
       div.append(element);
    }
    //document.body.append(div);
    return div;
}


const newImage = (src, left = '100px',bottom = '100px') => {
    let img = document.createElement('img');
    img.src = src;
    img.style.position = 'fixed';
    img.style.left = left;
    img.style.bottom = bottom;
    document.body.append(img);
    return img;
}

const newItem = (src,left = '100px',bottom = '100px') => {
    let img = document.createElement('img')
    img.src = src;
    img.style.position = 'fixed'
    img.style.left = left;
    img.style.bottom = bottom;
    document.body.append(img);
    img.addEventListener('dblclick', () => {
        img.remove(); 
    });
    return img;
}


newImage('assets/pine-tree.png', '450px','200px');


newImage('assets/green-character.gif');
newImage('assets/tree.png','200px','300px');
newImage('assets/crate.png','150px','200px');
newImage('assets/well.png','500px','425px');

let sword = newItem('assets/sword.png','500px','405px');

newItem('assets/shield.png','165px','185px');
newItem('assets/staff.png','600px','100px');

function combineScenery() {
    const div = document.createElement('div');
    div.append(generateScenery('assets/sky.png',50));
    div.append(generateScenery('assets/grass.png',50))
    return div;

}
document.getElementById('m').append(combineScenery());
document.getElementById('m').append(combineScenery());
document.getElementById('m').style.position = 'fixed';
document.getElementById('m').style.bottom = '-4px';