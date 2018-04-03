const defaultState = [
	{
		id: '1',
		link: 'github.com',
		name: 'Имя либы 111',
		markers: ['Javascript', 'React'],
		desc: 'Описание либы'
	},{
		id: '2',
		link: 'github.com',
		name: 'Имя либы 222',
		markers: ['Javascript', 'React'],
		desc: 'Описание либы'
	},{
		id: '3',
		link: 'github.com',
		name: 'Имя либы 333',
		markers: ['Javascript', 'React'],
		desc: 'Описание либы'
	}
]

export default function listLibs( state = defaultState, action ){
	return state;
}