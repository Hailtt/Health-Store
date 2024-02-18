import Image from 'public/images/home/backgroundReview.png';
interface DATA_TEST_Type {
  id: Number;
  images: string;
  name: string;
  price: string;
  rating: Number;
  discount: string;
}
export const DATA_TEST: DATA_TEST_Type[] = [
  {
    id: 1,
    images: 'https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/product_11_1-600x600.jpg',
    name: 'san pham 1',
    price: '1000',
    rating: 5,
    discount: '0',
  },
];
