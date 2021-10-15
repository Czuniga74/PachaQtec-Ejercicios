const alumnos = [
	{
	  nombre: 'Juan',
	  carrera: 'Biología',
	  nota: 16
	},
	{
	  nombre: 'Jose',
	  carrera: 'Enfermería',
	  nota: 10
	},
	  {
	  nombre: 'Luis',
	  carrera: 'Policía',
	  nota: 07
	}
	,
	  {
	  nombre: 'Maria',
	  carrera: 'Secretariado',
	  nota: 10
	},
	{
	  nombre: 'Hugo',
	  carrera: 'Enfermería',
	  nota: 15
	},
	  {
	  nombre: 'Rosa',
	  carrera: 'Enfermería',
	  nota: 12
	}
	,
	  {
	  nombre: 'Luisa',
	  carrera: 'Biología',
	  nota: 18
	}
  ]

//Ejercicio 1
let aprobados = desaprobados = notaAprobatoria = promedioAprobados = notaDesaprobatoria = promedioDesaprobados=0

console.log("Ejercicio 1")
console.log("Indices multiplo de 2")
alumnos.forEach(({nombre,carrera,nota},indice)=>{

	if(nota>=13){
		aprobados++
		notaAprobatoria+=nota
	}else{
		desaprobados++
		notaDesaprobatoria+=nota
	}

	if(indice%2===0){
		console.log("Mi nombre es "+nombre+" y mi carrera es "+carrera+".")
	}

})
console.log()
promedioAprobados=notaAprobatoria/aprobados
promedioDesaprobados=notaDesaprobatoria/desaprobados
promedioTotal=(promedioAprobados+promedioDesaprobados)/2

console.log("Alumnos aprobados: "+aprobados)
console.log("Alumnos desaprobados: "+desaprobados)
console.log("Promedio notas aprobatorias: "+Math.trunc(promedioAprobados))
console.log("Promedio notas desaprobatorias: "+Math.trunc(promedioDesaprobados))
console.log("Promedio total: "+Math.trunc(promedioTotal))
//Fin ejercicio 1


//Ejercicio 2
console.log()
console.log("Ejercicio 2")
function filtrar(notaFiltro){

	const segunNota=alumnos.filter(alumno=>alumno.nota<notaFiltro)
	console.log("Alumnos con nota menor a "+notaFiltro)

	segunNota.forEach(({nombre,carrera,nota})=>{
		console.log("Nombre: "+nombre,"Carrera: "+carrera,"Nota: "+nota)
	})

}
filtrar(13)
//Fin ejercicio 2


//Ejercicio 3
console.log()
const nuevaNota=[]
console.log("Ejercicio 3")
console.log("Alumnos con nueva nota")

alumnos.forEach(({nombre,carrera,nota})=>{
	if(nota>0){
		nota=(nota*3)/2
		nuevaNota.push({nombre,carrera,nota})
	}
	console.log("Nombre: "+nombre,"Carrera: "+carrera,"Nota: "+nota)
})
//Fin ejercicio3