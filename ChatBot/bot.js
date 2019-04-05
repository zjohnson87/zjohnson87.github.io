var response = '<h1>Hello, I am a bot. Ask me a question</h1>';

var output = document.getElementById('output');

output.innerHTML = response;

function bot() {
    var input = document.getElementById('input').value;
    console.log(input);
    if (input.substring(0,5) == 'Hello') {
        output.innerHTML= '<h1>Hi!<h1>';
    }
}