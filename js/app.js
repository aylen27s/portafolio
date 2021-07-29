const app = new Vue({
			el:'#root',
			data:{
				checkIcon : false,
				//iconos:["fas fa-laptop-code","fas fa-user-check","fas fa-comment-dots"],
				iconInfo:[
				{
					id: 0,
					icon: 'fas fa-globe-americas',
					content:'Buenos Aires, Argentina',
					state: false
				},
				{
					id: 1,
					icon: 'fas fa-envelope',
					content:'ailen27mc@gmail.com',
					state:false
				},
				{
					id: 2,
					icon: 'fas fa-moon',
					content:'',
					state:false
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
						link:'https://darpormassonrisas.herokuapp.com/',
						name:'ONG DARpms'
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
					}]
			},
			methods:{
				getEdad(){
					let actual = new Date().getFullYear()
					const anio = this.personal.bdate.getFullYear()
					return actual - anio
				},
				viewInfo(id){
					for (i of this.iconInfo)
					{
						i.id == id ? i.state = !i.state : i.state = false
						console.log(i.state)
					}
				}

			}

		})
