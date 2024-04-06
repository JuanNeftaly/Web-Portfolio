// objeto en cuestion 
const linusTorvaldString = '{"name":"Linus Benedict Torvalds","birthday":"28/12/1969","nationality":"Finnish","age":53,"creatorOf":[{"technology":"Linux Kernel","description":"Open-source Unix-like operating system core"},{"technology":"Git","description":"Distributed version control system"}],"occupation":"Software Engineer","educationLevel":"Master\'s degree in Computer Science","university":"University of Helsinki","hobbies":["Soccer","VideoGames","Guitar","Math"],"favoriteColor":"Blue","height":177}';

// 1.Convertir la cadena a un objeto de JavaScript llamado linusTorvalds
const linusTorvalds = JSON.parse(linusTorvaldString);

// 2. Imprimir en pantalla: nacimiento, nacionalidad, tecnologia, la descripcion de la segunda tecno
console.log("Fecha de Nacimiento de tu vieja: ", linusTorvalds.birthday);
console.log("Nacionalidad de tu vieja: ", linusTorvalds.nationality);
console.log("Primera tecnologia de tu vieja: ", linusTorvalds.creatorOf[0].description);
console.log("Descripcion de la segunda tecnologia de ya sabes quien: ", linusTorvalds.creatorOf[1].description);

// 3. Almacenar en un array. Pero, solo tienen 5 caracteres
const linusTorvaldsHobbies = linusTorvalds.hobbies.filter(hobby => hobby.length > 5);

// 4. Mostrar los arreglos 
linusTorvaldsHobbies.forEach(hobby => {
    console.log("Hobbie en cuestion", hobby);
});