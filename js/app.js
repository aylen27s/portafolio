const app = new Vue({
			el:'#root',
			data:{
				//iconos:["fas fa-laptop-code","fas fa-user-check","fas fa-comment-dots"],
				iconInfo:[
				{
					icon: 'fas fa-globe-americas',
					content:'globo'
				},
				{
					icon: 'fas fa-envelope',
					content:'mail'
				},
				{
					icon: 'fas fa-moon',
					content:'data'
				}],
				personal:
				{
					name:'Aylen',
					city:'Buenos Aires',
					pais:'Argentina',
					bdate: new Date('March 27, 2001 00:00:00')
				},
				formacion:[
				{
					nombre: 'E.E.S.T. N°6',
					periodo:'2013 - 2019',
					titulo: 'Técnica en Informática'
				},
				{
					nombre: 'UTN FRBA',
					periodo:'2020 - En curso',
					titulo: 'Ingenieria en Electrónica',
				},
				{
					nombre: 'Codo a Codo BA',
					periodo:'2021 Abril - En curso',
					titulo: 'Capacitación Full Stack Dev.'
				}],
				projects:[
					{
						link:'https://infinite-basin-92269.herokuapp.com/',
						name:'Parcialitos'
					},
					{
						link:'https://matetutor.netlify.app/',
						name:'Maquetado'
					},
					{
						link:'https://matchfichas.netlify.app/',
						name:'Fichas'
					},
					{
						link:'https://github.com/aylen27s',
						name:'+GitHub'
					}

				],
				skills:[
					{
						icon:["fas fa-laptop-code"],
						stack:[
						{
							tech:'C/C++',
							rango:'Intermedio'
						},
						{
							tech:'HTML/CSS',
							rango:'Intermedio'
						},
						{
							tech:'Javascript',
							rango:'Intermedio'
						},
						{
							tech:'Python',
							rango:'Basico'
						}]
					},
					{
						icon:[,"fas fa-user-check"],
						soft:['Responsable','Buen trabajo en equipo','Comunicativa']
					},
					{
						icon:["fas fa-comment-dots"],
						idioma:[
						{
							lengua:'Español',
							nivel:'Nativo'
						},
						{
							lengua:'Ingles técnico',
							nivel:'Básico para lectura'
						}]
					}],
				laboral:[
					{
						lugar:'Banco Itaú - Ramos Mejia',
						puesto:'Greeter',
						descripcion:'Práctica profesional',
						periodo:'2019 Agosto - Noviembre',
						info:'Asistencia al cliente en el uso de canales digitales(cajeros automáticos, banca por internet y banca telefónica)'
					}]
			},
			methods:{
				getEdad(){
					let actual = new Date().getFullYear()
					const anio = this.personal.bdate.getFullYear()
					return actual - anio
				}
				// viewInfo(){

				// }

			}

		})
