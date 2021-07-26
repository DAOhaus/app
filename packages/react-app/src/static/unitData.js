import placeholder from 'static/logo-square.png'
const pieces = [
  {
    id:'id1',
    url: '',
    price: '',
  }
]

const simpleChoices = [
  {
    title: 'Kitchen', options: [
      { 
        title: 'A',
        price: '100',
        url: 'https://www.ikea.pr/puertorico/en/pd/hyby-ceiling-lamp-white-art-10347393',
        image: 'https://static.ikea.pr/assets/images/077/0607749_PE683178_S4.jpg',
        pieces: {
          kitchenSink: 'id1',
          ceilingLight: 'id45',
          bathroomSink: 'id67',
        }
      },
      { 
        title: 'B',
        price: '100',
        url: 'https://www.ikea.pr/puertorico/en/pd/hyby-ceiling-lamp-white-art-10347393',
        image: 'https://static.ikea.pr/assets/images/077/0607749_PE683178_S4.jpg'
      },
      {
        title: 'C',
        price: '100',
        url: 'https://www.ikea.pr/puertorico/en/pd/hyby-ceiling-lamp-white-art-10347393',
        image: 'https://static.ikea.pr/assets/images/077/0607749_PE683178_S4.jpg' 
      }
    ]
  },
  {
    title: 'Bathroom', options: [
      { 
        title: 'A',
        price: '100',
        url: 'https://www.ikea.pr/puertorico/en/pd/hyby-ceiling-lamp-white-art-10347393',
        image: 'https://static.ikea.pr/assets/images/077/0607749_PE683178_S4.jpg'
      },
      { 
        title: 'B',
        price: '100',
        url: 'https://www.ikea.pr/puertorico/en/pd/hyby-ceiling-lamp-white-art-10347393',
        image: 'https://static.ikea.pr/assets/images/077/0607749_PE683178_S4.jpg'
      },
      {
        title: 'C',
        price: '100',
        url: 'https://www.ikea.pr/puertorico/en/pd/hyby-ceiling-lamp-white-art-10347393',
        image: 'https://static.ikea.pr/assets/images/077/0607749_PE683178_S4.jpg' 
      }
    ]
  },
  {
    title: 'Bedroom', options: [
      { 
        title: 'A',
        price: '100',
        url: 'https://www.ikea.pr/puertorico/en/pd/hyby-ceiling-lamp-white-art-10347393',
        image: 'https://static.ikea.pr/assets/images/077/0607749_PE683178_S4.jpg'
      },
      { 
        title: 'B',
        price: '200',
        url: 'https://www.ikea.pr/puertorico/en/pd/hyby-ceiling-lamp-white-art-10347393',
        image: 'https://static.ikea.pr/assets/images/077/0607749_PE683178_S4.jpg'
      },
      {
        title: 'C',
        price: '300',
        url: 'https://www.ikea.pr/puertorico/en/pd/hyby-ceiling-lamp-white-art-10347393',
        image: 'https://static.ikea.pr/assets/images/077/0607749_PE683178_S4.jpg' 
      }
    ]
  },
  {
    title: 'Living Room', options: [
      { 
        title: 'A',
        price: '100',
        url: 'https://www.ikea.pr/puertorico/en/pd/hyby-ceiling-lamp-white-art-10347393',
        image: 'https://static.ikea.pr/assets/images/077/0607749_PE683178_S4.jpg'
      },
      { 
        title: 'B',
        price: '200',
        url: 'https://www.ikea.pr/puertorico/en/pd/hyby-ceiling-lamp-white-art-10347393',
        image: 'https://static.ikea.pr/assets/images/077/0607749_PE683178_S4.jpg'
      },
      {
        title: 'C',
        price: '300',
        url: 'https://www.ikea.pr/puertorico/en/pd/hyby-ceiling-lamp-white-art-10347393',
        image: 'https://static.ikea.pr/assets/images/077/0607749_PE683178_S4.jpg' 
      }
    ]
  },
]
const choices = [
  {
    title: 'Ceiling Fixture', options: [
      { 
        title: 'white bulb',
        price: '18.99',
        url: 'https://www.ikea.pr/puertorico/en/pd/hyby-ceiling-lamp-white-art-10347393',
        image: 'https://static.ikea.pr/assets/images/077/0607749_PE683178_S4.jpg'
      },
      {
        title: 'stainless flat',
        price: '22.99',
        url: 'https://www.ikea.pr/puertorico/en/pd/frihult-ceiling-wall-lamp-stainless-steel-color-art-70431614',
        image: 'https://static.ikea.pr/assets/images/895/0689510_PE723007_S4.jpg'
      },
      {
        title: 'gold bulb',
        price: '16.57',
        url: 'https://www.homedepot.com/p/Hampton-Bay-12-Watt-Antique-Brass-Integrated-LED-Ceiling-Flush-Mount-JPJ3011L/303760338',
        image: 'https://images.thdstatic.com/productImages/4a6afe3c-ee41-47c7-9688-bb199498b889/svn/antique-brass-hampton-bay-flush-mount-lights-jpj3011l-64_600.jpg'
      },
      {
        title: 'gold ribbed',
        price: '19.99',
        url: 'https://www.ikea.pr/puertorico/en/pd/solklint-ceiling-lamp-art-90472038',
        image: 'https://static.ikea.pr/assets/images/422/0842293_PE778939_S4.jpg'
      },
      {
        title: 'white hang',
        price: '8.99',
        url: 'https://www.ikea.pr/puertorico/en/pd/melodi-pendant-lamp-white-art-60386532',
        image: 'https://static.ikea.pr/assets/images/452/0545277_PE655373_S4.jpg'
      },
      {
        title: 'silver hang',
        price: '44.99',
        url: 'https://www.ikea.pr/puertorico/en/pd/holjes-pendant-lamp-white-art-60325794',
        image: 'https://static.ikea.pr/assets/images/074/0607401_PE682951_S4.jpg'
      },
      {
        title: 'gold & white hang',
        price: '44.99',
        url: 'https://www.ikea.pr/puertorico/en/pd/ranarp-pendant-lamp-off-white-art-00390966',
        image: 'https://static.ikea.pr/assets/images/130/0613045_PE686138_S4.jpg'
      },
      {
        title: 'gold track lights',
        price: '39.99',
        url: 'https://www.ikea.pr/puertorico/en/pd/barometer-ceiling-track-5-spots-brass-color-art-70364638',
        image: 'https://static.ikea.pr/assets/images/130/0613026_PE686117_S4.jpg',
      },
      {
        title: 'white fan light',
        price: '119.00',
        image: 'https://images.homedepot-static.com/productImages/2ce4ecc5-4adf-40d1-afa2-a6d2db21db61/svn/white-home-decorators-collection-ceiling-fans-with-lights-sw1422wh-64_600.jpg',
        url: 'https://www.homedepot.com/p/Home-Decorators-Collection-Merwry-52-in-Integrated-LED-Indoor-White-Ceiling-Fan-with-Light-Kit-and-Remote-Control-SW1422WH/301231211'
      }
    ],
  },
  {
    title: 'Bathroom Faucet',
    options: [
      {
        title: 'silver 1',
        price: '119.00',
        image: 'https://static.ikea.pr/assets/images/197/0519778_PE641763_S4.jpg',
        url: 'https://www.ikea.pr/puertorico/en/pd/almaren-kitchen-faucet-stainless-steel-color-art-50341643'
      },{
        title: 'Silver 2',
        price: '89.00',
        url: 'https://www.ikea.pr/puertorico/en/pd/glypen-kitchen-faucet-art-70442392',
        image: 'https://static.ikea.pr/assets/images/793/0779358_PE759468_S4.jpg'
      }
    ]
  },
  {
    title: 'Kitchen Sink',
    options: [
      {
        title: 'Silver',
        url: 'https://www.ikea.pr/puertorico/en/pd/hillesjon-1-1-2-bowl-dual-mount-sink-spr-09140708',
        image: 'https://static.ikea.pr/assets/images/544/0754486_PE747939_S4.jpg',
        price: '132.00'
      },{
        title: 'Silver 2',
        price: '89.00',
        url: 'https://www.ikea.pr/puertorico/en/pd/glypen-kitchen-faucet-art-70442392',
        image: 'https://static.ikea.pr/assets/images/793/0779358_PE759468_S4.jpg'
      }
    ]
  }
]

export default [
  {
    title: 'Unit A',
    subTitle: '1 bed, 1 bath',
    id: '1',
    description: 'Full description about this being a unit in such a such building that pertains to the exact address found here and there and so on and so forth.  Will most likely list the ammenities and will probably be a few lines long.  Am making it plenty long so that we know how to properly display and wrap the text in the case of these being very long, will most likely display all the information.',
    choices: simpleChoices,
  },
  {
    title: 'Unit B',
    subTitle: '2 bed, 1 bath',
    id: '2',
    choices
  },
  {
    title: 'Unit C',
    subTitle: '3 bed, 1 bath',
    id: '3',
    choices
  },
]