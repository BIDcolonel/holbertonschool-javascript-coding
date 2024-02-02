const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const database = 'database.csv';
    fs.readFile(database, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        const students = data.trim().split('\n').slice(1); // Exclude the header
        const totalStudents = students.length;

        const csStudents = students.filter((student) => student.split(',')[3].trim() === 'CS');
        const sweStudents = students.filter((student) => student.split(',')[3].trim() === 'SWE');

        const totalCsStudents = csStudents.length;
        const totalSweStudents = sweStudents.length;

        const csStudentsList = csStudents.map((student) => student.split(',')[0].trim()).join(', ');
        const sweStudentsList = sweStudents.map((student) => student.split(',')[0].trim()).join(', ');

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`This is the list of our students\nNumber of students: ${totalStudents}\nNumber of students in CS: ${totalCsStudents}. List: ${csStudentsList}\nNumber of students in SWE: ${totalSweStudents}. List: ${sweStudentsList}`);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
