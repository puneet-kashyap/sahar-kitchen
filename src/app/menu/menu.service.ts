import * as firebase from 'firebase';

export class MenuService {
    private items = [
        {
          type: 'Appetizers',
          items: [
            {
              itemName: 'Vegetable Samosa',
              itemPrice: '6.00',
              itemDescription: 'Pouch of green peas and potatoes and wrapy in a flaky dough with indian herb spice'
            },
            {
              itemName: 'Vegetable Pakora',
              itemPrice: '6.00',
              itemDescription: 'Mixed vegetable deep fried in chickpea butter'
            },
            {
              itemName: 'Onion Bhajee',
              itemPrice: '6.00',
              itemDescription: 'Freshly sliced onion battered and deep fried mildly spiced served with salad'
            },
            {
              itemName: 'Mixed Platter',
              itemPrice: '6.00',
              itemDescription: 'Samosa, pakora, kabab, chicken tikka and onion bhajee served on a sizzler.'
            }
          ]
        },
        {
          type: 'Soups and Salad',
          items: [
            {
              itemName: 'Mulligatawny Soup',
              itemPrice: '6.00',
              itemDescription: 'An authentic Indian soup prepared with lentils, lemon juice, chicken and spices.'
            },
            {
              itemName: 'Lentil Soup',
              itemPrice: '6.00',
              itemDescription: 'Vegetarian soup prepared with lentils, herbs and spices.'
            },
            {
              itemName: 'Garden Salad',
              itemPrice: '5.00',
              itemDescription: ''
            },
            {
              itemName: 'Tandoori Chicken Salad',
              itemPrice: '8.99',
              itemDescription: ''
            }
          ]
        },
        {
          type: 'Tandoori Dishes',
          items: [
            {
              itemName: 'Murg Tandoori',
              itemPrice: '16.99',
              itemDescription: 'Chicken leg and breast marinated in yogurt with spices and cooked in Tandoor oven.'
            },
            {
              itemName: 'Seekh Kabab',
              itemPrice: '17.00',
              itemDescription: 'Minced meat blended with our chef\'s own special spice and herbs, cooked on skewers in tandoor oven.'
            },
            {
              itemName: 'Chicken Tikka',
              itemPrice: '19.00',
              itemDescription: 'Chicken breast marinated in light spices and cooked in Tandoor oven.'
            },
            {
              itemName: 'Tandoori Jheenga',
              itemPrice: '17.00',
              itemDescription: 'Garlic flavoured prawns cooked in perfection in clay oven.'
            },
            {
              itemName: 'Tandoori Chicken',
              itemPrice: '17.00',
              itemDescription: 'Chicken leg and breast marinated in yogurt with spices and cooked in Tandoor oven.'
            },
            {
              itemName: 'Machi Afgani',
              itemPrice: '17.00',
              itemDescription: 'Garlic flavoured prawns cooked in perfection in clay oven.'
            },
            {
              itemName: 'Hariyali Mirch Tikka',
              itemPrice: '17.00',
              itemDescription: 'Bonless pieces of chicken marinated overnight in corriander and green chilli paste cooked in tandoori oven.'
            }
          ]
        },
        {
          type: 'Seafood Dishes',
          items: [
            {
              itemName: 'Fish Tikka',
              itemPrice: '21.00',
              itemDescription: 'Fresh salmon marinated in light spices and cooked in Tandoor oven.'
            },
            {
              itemName: 'King Prawn Tikka',
              itemPrice: '22.00',
              itemDescription: 'King prawn marinated in light spices and cooked in Tandoor oven.'
            },
            {
              itemName: 'King prawn Masala',
              itemPrice: '21.00',
              itemDescription: 'King prawns cooked with onion, tomato and fresh coriander.'
            },
            {
              itemName: 'King Prawn Sag',
              itemPrice: '21.00',
              itemDescription: 'King prawn curry cooked with spinach and selected spices.'
            },
            {
              itemName: 'King Prawn Jhalfrezi',
              itemPrice: '21.00',
              itemDescription: 'Stir fried king prawn with fresh green chilies, green pepper, tomatoes, fresh cilantro and garnished with a touch of fresh garlic and ginger.'
            },
            {
              itemName: 'King Prawn Korma',
              itemPrice: '21.00',
              itemDescription: 'Mild and creamy king prawn curry cooked with almonds and sultanas.'
            },
            {
              itemName: 'Fish Masala',
              itemPrice: '21.00',
              itemDescription: 'Salmon fish cooked with onion, tomatoes and fresh cilantro.'
            }
          ]
        },
        {
          type: 'Chicken Dishes',
          items: [
            {
              itemName: 'Butter Chicken',
              itemPrice: '18.00',
              itemDescription: 'Chicken breast marinated in yogurt and spices, barbecued in Tandoor oven and cooked with creamy tomato gravy.'
            },
            {
              itemName: 'Chicken Pasanda',
              itemPrice: '18.00',
              itemDescription: 'Pieces of chicken marinated in spices and gently casseroled in a creamy sauce with red wine. A delicate, fragrant and aromatic curry. '
            },
            {
              itemName: 'Chicken Tikka Masala',
              itemPrice: '18.00',
              itemDescription: 'Pieces of chicken tikka cooked with onions, green peppers, tomatoes and spices.'
            },
            {
              itemName: 'Chicken Jalfrezi',
              itemPrice: '18.00',
              itemDescription: 'Tender chicken cooked with green chilies, ginger, green pepper and fresh cilantro.'
            }
          ]
        },
        {
          type: 'Chef\'s Special Dishes',
          items: [
            {
              itemName: 'Korma',
              itemPrice: '18.00',
              itemDescription: 'A mild curry cooked in creamy sauce with almonds and sultanas.'
            },
            {
              itemName: 'Dupiaza',
              itemPrice: '18.00',
              itemDescription: 'A maximum quantity of onions cooked with dozens of spices.'
            },
            {
              itemName: 'Rogan Josh',
              itemPrice: '18.00',
              itemDescription: 'A preparation with fresh tomatoes & garlic. Garnished with fresh tomato and cilantro.'
            },
            {
              itemName: 'Dansak',
              itemPrice: '18.00',
              itemDescription: 'A beautiful combination of spices with pineapple, lentils, garlic and fresh cilantro producing a sweet & sour taste.'
            },
            {
              itemName: 'Garlic Chili',
              itemPrice: '18.00',
              itemDescription: 'A preparation of garlic and chili in a hot spicy sauce.'
            },
            // {
            //   itemName: 'Madras',
            //   itemPrice: '18.00',
            //   itemDescription: 'Rich and hot & sour preparation with garlic, red chili, lemon juice and fresh cilantro.'
            // },
            // {
            //   itemName: 'Vindaloo',
            //   itemPrice: '18.00',
            //   itemDescription: 'A combination of potatoes, lemon juice and extra red chilies with select spices.'
            // },
            // {
            //   itemName: 'Sag',
            //   itemPrice: '18.00',
            //   itemDescription: 'A medium spiced curry cooked with spinach and select spices.'
            // }
          ]
        },
        {
          type: 'Vegetable Specialities',
          items: [
            {
              itemName: 'Daal Tarka',
              itemPrice: '13.00',
              itemDescription: 'Indian lentils cooked in garlic butter and spices.'
            },
            {
              itemName: 'Aloo Gobhi',
              itemPrice: '15.00',
              itemDescription: 'Potato and cauliflower cooked in spices.'
            },
            {
              itemName: 'Sag Aloo',
              itemPrice: '15.00',
              itemDescription: 'Potatoes cooked with spinach and spices.'
            },
            {
              itemName: 'Chana Masala',
              itemPrice: '15.00',
              itemDescription: 'Chickpeas cooked in spices.'
            },
            {
              itemName: 'Bharta',
              itemPrice: '15.00',
              itemDescription: 'Grilled eggplant coked with herbs, tomatoes and Indian spices.'
            },
            {
              itemName: 'Sag Paneer',
              itemPrice: '15.00',
              itemDescription: 'Spinach cooked with homemade cottage cheese and select spices.'
            },
            {
              itemName: 'Mator Paneer',
              itemPrice: '15.00',
              itemDescription: 'Peas cooked with homemade cottage cheese and stewed in a creamy tomato gravy.'
            },
            // {
            //   itemName: 'Paneer Makhani',
            //   itemPrice: '15.00',
            //   itemDescription: 'Fresh homemade cottage cheese stewed in a creamy tomato gravy.'
            // },
            // {
            //   itemName: 'Mixed Vegetable Korma',
            //   itemPrice: '15.00',
            //   itemDescription: 'Mixed vegetables cooked in a creamy curry with almonds and sultanas.'
            // },
            // {
            //   itemName: 'Mixed Vegetable Dupiaza',
            //   itemPrice: '15.00',
            //   itemDescription: 'Fresh mixed vegetables cooked with plenty of onions and dozens of spices.'
            // },
          ]
        },
        {
          type: 'Rice & Biriyani',
          items: [
            {
              itemName: 'Basmati Rice',
              itemPrice: '5.00',
              itemDescription: 'Basmati rice cooked with a small amount of onions, cumin and mild spices.'
            },
            {
              itemName: 'Peas Pulao',
              itemPrice: '7.00',
              itemDescription: 'Basmati rice fried with peas, onions, almonds and spices.'
            },
            {
              itemName: 'Mushroom Rice',
              itemPrice: '7.00',
              itemDescription: 'Basmati rice fried with mushrooms and onions.'
            },
            {
              itemName: 'King Prawn Biriyani',
              itemPrice: '16.00',
              itemDescription: 'Exotic king prawn fried with rice and spices.'
            },
            {
              itemName: 'Lamb Biriyani',
              itemPrice: '15.00',
              itemDescription: 'Rice fried with lamb and spices.'
            },
            {
              itemName: 'Vegetable Biriyani',
              itemPrice: '12.00',
              itemDescription: 'Rice fried with mixed vegetables and spices.'
            }
          ]
        },
        {
          type: 'Pakistani Breads',
          items: [
            {
              itemName: 'Naan',
              itemPrice: '3.00',
              itemDescription: 'Leavened fine flour bread baked in the Tandoor oven.'
            },
            {
              itemName: 'Garlic Naan',
              itemPrice: '5.00',
              itemDescription: 'Naan prepared with garlic.'
            },
            {
              itemName: 'Peshwari Naan',
              itemPrice: '6.00',
              itemDescription: 'Naan stuffed with coconuts, sultanas and almonds.'
            },
            {
              itemName: 'Dandoori Roti',
              itemPrice: '3.00',
              itemDescription: 'Unleavened whole wheat bread baked in the Tandoor oven.'
            },
            {
              itemName: 'Paratha',
              itemPrice: '5.00',
              itemDescription: 'Layered whole wheat bread prepared on a pan.'
            }
          ]
        },
        {
          type: 'Liquor & Dessert',
          items: [
            {
              itemName: 'Masala Lassi',
              itemPrice: '4.00',
              itemDescription: ''
            },
            {
              itemName: 'Mango Lassi',
              itemPrice: '4.00',
              itemDescription: ''
            },
            {
              itemName: 'Sweet Lassi',
              itemPrice: '4.00',
              itemDescription: ''
            },
            {
              itemName: 'Masala Tea',
              itemPrice: '2.00',
              itemDescription: ''
            },
            {
              itemName: 'Mango Juice',
              itemPrice: '2.00',
              itemDescription: ''
            },
            // {
            //   itemName: 'Rose Syrup',
            //   itemPrice: '2.00',
            //   itemDescription: ''
            // },
            // {
            //   itemName: 'Rice Pudding',
            //   itemPrice: '2.00',
            //   itemDescription: ''
            // },
            // {
            //   itemName: 'Rasmalai',
            //   itemPrice: '3.00',
            //   itemDescription: ''
            // }
          ]
        },
      ]


      getMiles(){
          return this.items;
      }



}