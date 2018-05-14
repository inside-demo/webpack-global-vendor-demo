console.log('register global `hello` function');

function hello(name) {
    name = name || 'World';
    alert('Hello ' + name + '!');
}