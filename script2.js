document.getElementById("studentForm").addEventListener('submit',function(event){
    event.preventDefault();

    const name = document.getElementById("name").value;
    const matric = document.getElementById("matric").value;
    const bm = parseFloat(document.getElementById("bm").value);
    const math = parseFloat(document.getElementById("math").value);
    const sej = parseFloat(document.getElementById("sej").value);
    const bi = parseFloat(document.getElementById("bi").value);

    const average = ((bm+sej+math+bi)/4).toFixed(2);

    const row = document.createElement('tr');
    row.innerHTML= `
    <td>${name}</td>
    <td>${matric}</td>
    <td>${bm}</td>
    <td>${math}</td>
    <td>${sej}</td>
    <td>${bi}</td>
    <td>${average}</td>
    <td><button class="delete-btn">Delete</button></td>
    `;

    row.querySelector('.delete-btn').addEventListener('click',function(){
        row.remove();
    });

    document.querySelector('#studentTable tbody').appendChild(row);
    document.getElementById('studentForm').reset();
});

function sortByAverage() {
    const tbody = document.querySelector('#studentTable tbody');
    const row = Array.from(tbody.querySelectorAll('tr'));
    row.sort((a,b)=>{
        const avgA = parseFloat(a.cells[6].textContent);
        const avgB = parseFloat(b.cells[6].textContent);
        return avgB - avgA;
    });

    tbody.innerHTML= '';
    row.forEach(row=>{
        tbody.appendChild(row);
    });
  }
