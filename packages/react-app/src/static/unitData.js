import placeholder from 'static/logo-square.png'
const choices = [
  {title: 'Paint', options:[
    {title:'gray', imgUrl: placeholder},
    {title:'black', imgUrl: placeholder},
    {title:'white', imgUrl: placeholder},
  ]},
]
export default [
	{
		title: 'Unit A',
		subTitle: '1 bed, 1 bath',
    id: '1',
    description: 'Full description about this being a unit in such a such building that pertains to the exact address found here and there and so on and so forth.  Will most likely list the ammenities and will probably be a few lines long.  Am making it plenty long so that we know how to properly display and wrap the text in the case of these being very long, will most likely display all the information.',
    choices,
	},
	{
		title: 'Unit B',
		subTitle: '2 bed, 1 bath',
    id: '2'
	},
	{
		title: 'Unit C',
		subTitle: '3 bed, 1 bath',
    id: '3'
	},
]