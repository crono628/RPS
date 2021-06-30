// your javascript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const paragraph = document.createElement('p');
paragraph.classList.add('paragraph');
paragraph.textContent = 'Hey I\'m red!'
paragraph.style.color = 'red'

container.appendChild(paragraph);

const header3 = document.createElement('h3');
header3.classList.add('header3');
header3.textContent = 'I\'m a blue h3!'
header3.style.color = 'blue'

container.appendChild(header3);

const newDiv = document.createElement('div');
newDiv.setAttribute('id', 'newDivDiv')
newDiv.classList.add('newDiv');
newDiv.textContent = 'I\'m a blue h3!';
newDiv.style.color = 'blue';
newDiv.style.border = '10px solid black'
newDiv.style.backgroundColor = 'pink';


container.appendChild(newDiv);

const experiment = document.querySelector('#newDivDiv');
const exp = document.createElement('h1');
exp.textContent = 'I\'m in a div!'

experiment.appendChild(exp)