export const products = [{
    id: '11448965',
    image:  'images/protuct image/knit-athletic-sneakers-pink.webp',
    name: 'knit-athletic-sneakers-pink',
    price: '2090',
    delivery: '200',
    rating: 'images/rating-4.png',
    catagory:'Footwear'
},
{   
    id: '565842',
    image:  'images/protuct image/Premium Quality - Black Analog Watch For-Men.webp',
    name: 'Premium Quality - Black Analog Watch For-Men',
    price: '3060',
    delivery: '500',
    rating: 'images/rating-4.png' ,
    catagory:'watch' 
},
{
    id: '852963',
    image: 'images/protuct image/Pure Leather Wallet For Men_.webp',
    name: 'Pure Leather Wallet For Men',
    price: '1060',
    delivery: '600',
    rating: 'images/rating-4.png',
    catagory:'wallet' 
},
{
    id: '456321',
    image:  'images/protuct image/Xiaomi Mi Mini Stylish Backpack Colour -Black.webp',
    name: 'Xiaomi Mi Mini Stylish Backpack Colour - Black',
    price: '4060',
    delivery: '300',
    rating: 'images/rating-4.png' ,
    catagory:'backpack'
},
{   id: '112233',
    image:  'images/protuct image/LED waterproof electronic watch INS wind nylon strap watch European .jpg',
    name: 'LED waterproof electronic watch INS wind nylon strap ',
    price: '6030',
    delivery: '350',
    rating: 'images/rating-4.png' ,
    catagory:'watch'
},
{   id: '223344',
    image:  'images/protuct image/Trendy Fashionable Cotton Polo Shirt For Men.webp',
    name: 'Trendy Fashionable Cotton Polo Shirt For Men',
    price: '2088',
    delivery: '450',
    rating: 'images/rating-4.png' ,
    catagory:'fashion'
},
{
    id: '475621',
    image:  'images/protuct image/New Stylish Fashionable Soft A.T Leather Sandal.webp',
    name: 'New Stylish Fashionable Soft A.T Leather Sandal',
    price: '5555',
    delivery: '550',
    rating: 'images/rating-4.png' ,
    catagory:'Footwear'
},
{
    id: '47585621',
    image:  'images/protuct image/men-athletic-shoes-green.jpg',
    name: 'Men athletic shoes green',
    price: '11000',
    delivery: '500',
    rating: 'images/rating-4.png' ,
    catagory:'Footwear'
},
{
    id: '585235621',
    image:  'images/protuct image/electric-glass-and-steel-hot-water-kettle.webp',
    name: 'Electric glass and steel hot water kettle',
    price: '650',
    delivery: '500',
    rating: 'images/rating-4.png' ,
    catagory:'kitchen'
},
{
    id: '8651358',
    image:  'images/protuct image/round-airtight-food-storage-containers.jpg',
    name: 'Round airtight food storage containers',
    price: '3058',
    delivery: '380',
    rating: 'images/rating-4.png' ,
    catagory:'kitchen'
},
{
    id: '4788821',
    image:  'images/protuct image/round-sunglasses-black.jpg',
    name: 'Round-sunglasses-black',
    price: '3056',
    delivery: '500',
    rating: 'images/rating-4.png' ,
    catagory:'fashion'
},
{
    id: '85369425',
    image:  'images/protuct image/Gorgeous Looking Colorful AntibAir LED Digital Sports Watch.webp',
    name: 'Gorgeous Looking Colorful AntibAir LED Digital Sports Watch',
    price: '8656',
    delivery: '500',
    rating: 'images/rating-4.png' ,
    catagory:'watch'
},
{
    id: '7652369',
    image:  'images/protuct image/6-piece-white-dinner-plate-set.jpg',
    name: '6-piece-white-dinner-plate-set',
    price: '4520',
    delivery: '550',
    rating: 'images/rating-4.png' ,
    catagory:'kitchen'
},
{
    id: '45862252',
    image:  'images/protuct image/6-piece-non-stick-baking-set.webp',
    name: '6-piece-non-stick-baking-set',
    price: '5555',
    delivery: '550',
    rating: 'images/rating-4.png' ,
    catagory:'kitchen'
},
{
    id: '963528',
    image:  'images/protuct image/Goloen Wolf Men Laptop Backpack Anti-Theft Travel Bags .webp',
    name: 'Goloen Wolf Men Laptop Backpack Anti-Theft Travel Bags - Black Gb00444',
    price: '4055',
    delivery: '550',
    rating: 'images/rating-4.png' ,
    catagory:'backpack'
},
{
    id: '78964253',
    image:  'images/protuct image/non-stick-cooking-set-15-pieces.webp',
    name: 'Non-stick-cooking-set-15-pieces',
    price: '7555',
    delivery: '450',
    rating: 'images/rating-4.png' ,
    catagory:'kitchen'
},
{
    id: '4586458622252',
    image:  'images/protuct image/plain-hooded-fleece-sweatshirt-yellow.jpg',
    name: 'Plain hooded fleece sweatshirt-yellow',
    price: '3550',
    delivery: '200',
    rating: 'images/rating-4.png' ,
    catagory:'fashion'
},
{
    id: '458475262252',
    image:  'images/protuct image/men-chino-pants-beige.jpg',
    name: 'Men-chino-pants-beige',
    price: '2550',
    delivery: '200',
    rating: 'images/rating-4.png' ,
    catagory:'fashion'
},
{
    id: '4778882252',
    image:  'images/protuct image/Chicago Camera Backpack Your Compac.webp',
    name: 'BP-30 Chicago Camera Backpack: Your Compact',
    price: '5600',
    delivery: '200',
    rating: 'images/rating-4.png' ,
    catagory:'backpack'
},
{
    id: '262252',
    image:  'images/protuct image/liquid-laundry-detergent-plain.jpg',
    name: 'Liquid laundry detergent plain',
    price: '2550',
    delivery: '200',
    rating: 'images/rating-4.png' ,
    catagory:'laundry'
},
];


//short the big name
export function shortedName(name) {
    if (name.length > 50) {
        return name.substring(0, 47) + '...';
    } else {
        return name;
    };
};


