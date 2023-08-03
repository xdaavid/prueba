// Leer el archivo CSV y procesar los datos
fetch('emg_data.csv')
    .then(response => response.text())
    .then(data => {
        // Dividir el archivo CSV en líneas
        const lines = data.split('\n');
        
        // Mostrar los datos en la tabla en la página web
        const tableBody = document.getElementById('emg-data-table');
        for (let i = 0; i < lines.length; i++) {
            const row = document.createElement('tr');
            const indexCell = document.createElement('td');
            const dataCell = document.createElement('td');
            indexCell.textContent = i + 1;

            // Convertir el dato de texto a número (suponiendo que sean números en el CSV)
            dataCell.textContent = parseFloat(lines[i]);

            row.appendChild(indexCell);
            row.appendChild(dataCell);
            tableBody.appendChild(row);
        }
    })
    .catch(error => console.error('Error al cargar el archivo:', error));
