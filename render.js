var ps = require("python-shell")
// import PythonShell from 'python-shell';
options = {
  mode: 'text',
  pythonPath : '/usr/bin/python3'
};

let pyshell = new ps.PythonShell('test.py', options);

function abc(flag){
  alert(flag);
  // sends a message to the Python script via stdin
  pyshell.send(flag);
  pyshell.on('message', function(message){
    console.log(message);
    alert(message);
  });

}
