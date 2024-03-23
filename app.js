const d = document;

const $cont = d.querySelector(".div__cont");
const $asd = d.querySelector(".cont__asd");

console.log($cont);
console.log($asd);

for (let i = 0; i < 5; i++) {
  const $asd = d.createElement("aside");
  $asd.classList.add("cont__asd");

  //   $asd.innerHTML = `
  //   <img src="ruta-a-imagen-${i}.jpg" alt="Imagen ${i}" />
  //   <p>Contenido del ${i}</p>
  //   <span>Ejemplo ${i}</span>
  //   <a href="#">Enlace ${i}</a>
  // `;

  $cont.appendChild($asd);
}
