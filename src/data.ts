import { Food } from './app/shared/models/Food';
export const sampleFoods: Food[] = [
  {
    id: '1',
    name: 'Pizza',
    cookTime: '10-20',
    price: 10,
    favorite: true,
    origins: ['Naples'],
    imageUrl: 'assets/food-1.jpg',
    tags: ['fast food', 'pizza', 'tradional'],
  },
  {
    id: '2',
    name: 'Spaghetti Carbonara',
    cookTime: '15-25',
    price: 10,
    favorite: false,
    origins: ['Rome'],
    imageUrl: 'assets/food-2.jpg',
    tags: ['a la minute', 'pasta', 'traditional'],
  },
  {
    id: '3',
    name: 'Spaghetti Bolognese',
    cookTime: '30-45',
    price: 15,
    favorite: true,
    origins: ['Bologna'],
    imageUrl: 'assets/food-3.jpg',
    tags: ['a la minute', 'pranzo', 'traditional'],
  },
  {
    id: '4',
    name: 'Arancini',
    cookTime: '15-25',
    price: 8,
    favorite: false,
    origins: ['Sicily'],
    imageUrl: 'assets/food-4.jpg',
    tags: ['fast food', 'starter', 'traditional'],
  },
  {
    id: '5',
    name: 'Polenta',
    cookTime: '5-10',
    price: 7,
    favorite: false,
    origins: ["Valle D'Aosta"],
    imageUrl: 'assets/food-5.jpg',
    tags: ['a la minute', 'winter', 'tradional'],
  },
  {
    id: '6',
    name: 'Lasagna',
    cookTime: '45-60',
    price: 25.55,
    favorite: false,
    origins: ['Emilia Romagna', 'Marche', 'Lazio'],
    imageUrl: 'assets/food-6.jpg',
    tags: ['a la minute', 'pasta', 'tradional'],
  },
];

// export class Food {
//   id!: string;
//   name!: string;
//   price!: number;
//   tags?: string[];
//   favorite!: boolean;
//   stars?: number;
//   imageUrl!: string;
//   origins!: string[];
//   cookTime!: string;
// }
