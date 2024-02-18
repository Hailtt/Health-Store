import { routes } from '@utils/routes';

interface IMenuList {
  label: string;
  route: string;
  submenu?: IMenuList[];
}

export const MENU_LIST: IMenuList[] = [
  {
    label: 'Trang chủ',
    route: routes.HOME,
  },
  {
    label: 'Giới thiệu',
    route: '/',
  },
  {
    label: 'Sản phẩm',
    route: routes.PRODUCTS,
    submenu: [
      {
        label: 'Sản phẩm làm đẹp',
        route: routes.PRODUCTS,
      },
      {
        label: 'Viêm Đường Hô Hấp - Đau họng - Ho - Viêm phổi',
        route: routes.PRODUCTS,
      },
      {
        label: 'Sản phẩm - Đau nhức cơ xương khớp',
        route: routes.PRODUCTS,
      },
      {
        label: 'Thảo dược xua đuổi côn trùng - Tâm linh tài lộc',
        route: routes.PRODUCTS,
      },
    ],
  },
  {
    label: 'Tin tức',
    route: routes.BLOGS,
  },
  {
    label: 'Liên hệ',
    route: routes.CONTACT,
  },
  {
    label: 'Hệ thống phân phối',
    route: routes.DISTRIBUTION,
  },
];

export const MENU_BOTTOM = [
  {
    route: '/',
    className: 'fa-light fa-house',
    title: 'Shop',
  },
  {
    route: '/',
    className: 'fa-regular fa-user',
    title: 'Account',
  },
  {
    route: '/',
    className: 'fa-regular fa-magnifying-glass',
    title: 'Search',
  },
  {
    route: '/',
    className: 'fa-regular fa-heart',
    title: 'Wishlist',
  },
];

export const MENU_LANGUAGE = [
  {
    name: 'Tiếng Anh',
  },
  {
    name: 'Tiếng Việt',
  },
];
export const MENU_CURRENCY = [
  {
    icon: 'fa-regular fa-dollar-sign fa-sm _icon-hover',
    name: 'USD',
  },
  {
    icon: 'fa-regular fa-dong-sign fa-sm _icon-hover',
    name: 'VNĐ',
  },
];
export const ABOUT_LINKS = [
  {
    label: 'Giới thiệu',
    route: '/',
  },
  {
    label: 'Ý kiến khách hàng',
    route: '/',
  },
  {
    label: 'Liên hệ',
    route: '/',
  },
];

export const SHOP_LINKS = [
  {
    label: 'Sản phẩm sức khỏe',
    route: '/',
  },
  {
    label: 'Sản phẩm làm đẹp',
    route: '/',
  },
  {
    label: 'Nhang thảo dược',
    route: '/',
  },
  {
    label: 'Chương trình khuyến mãi',
    route: '/',
  },
];

export const HELP_CENTER_LINKS = [
  {
    label: 'Chính sách đổi trả',
    route: '/',
  },
  {
    label: 'Chính sách bảo mật',
    route: '/',
  },
  {
    label: 'Câu hỏi thường gặp',
    route: '/',
  },
];

export const CONTACT_LINKS = [
  {
    address: '161/28/11 Bình Trị Đông, Phường Bình Trị Đông A, Q.Bình Tân, TP.HCM',
    branch: '428/30 Chiến Lược, Phường Bình Trị Đông A, Q.Bình Tân, TP.HCM ',
    phone1: '028.6688 7979 ',
    phone2: '0906.861.663',
    web: 'thaoduocanhduong.vn',
  },
];

export const BRAND = [
  {
    className: 'fa-brands fa-facebook',
  },
  {
    className: 'fa-brands fa-twitter',
  },
  {
    className: 'fa-brands fa-linkedin',
  },
];

export const SERVICE = [
  {
    className: 'fa-light fa-dolly',
    title: 'Miễn Phí Vận Chuyển',
    description: 'Đơn hàng trên 1 triệu đồng',
  },
  {
    className: 'fa-light fa-box-check',
    title: 'Hỗ trợ đổi trả',
    description: 'Lỗi do nhà sẳn suất',
  },
  {
    className: 'fa-light fa-headphones',
    title: 'Hỗ trợ 24/7',
    description: '0286.688.7979 / 0906.861.663',
  },
  {
    className: 'fa-light fa-money-check',
    title: 'Thanh Toán Linh Hoạt ',
    description: 'Tùy bạn lựa chọn',
  },
];

export const CART = [
  {
    name: 'Cinnamon Horchata Organic Green and Black Tea',
    price: 50,
    rating: 4,
    discount: 30,
    count: 3,
    images: [
      'https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/product_2_1-600x600.jpg',
      'https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/product_2_2-600x600.jpg',
    ],
  },
  {
    name: 'Cinnamon Horchata Organic Green and Black Tea',
    price: 50,
    rating: 4,
    discount: 30,
    count: 3,
    images: [
      'https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/product_3_1-600x600.jpg',
      'https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/product_3_2-600x600.jpg',
    ],
  },
  {
    name: 'Cinnamon Horchata Organic Green and Black Tea',
    price: 50,
    rating: 4,
    discount: 30,
    count: 3,
    images: [
      'https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/product_4_1-600x600.jpg',
      'https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/product_4_2-600x600.jpg',
    ],
  },
  {
    name: 'Cinnamon Horchata Organic Green and Black Tea',
    price: 50,
    rating: 4,
    discount: 50,
    count: 3,
    images: [
      'https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/product_16_1.jpg',
      'https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/product_16_2.jpg',
    ],
  },
  {
    name: 'Cinnamon Horchata Organic Green and Black Tea',
    price: 50,
    rating: 2,
    discount: 50,
    count: 3,
    images: [
      'https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/product_6_1-600x600.jpg',
      'https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/product_6_2-600x600.jpg',
    ],
  },
  {
    name: 'Cinnamon Horchata Organic Green and Black Tea',
    price: 50,
    rating: 4,
    discount: 50,
    count: 3,
    images: [
      'https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/product_7_1-600x600.jpg',
      'https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/product_7_2-600x600.jpg',
    ],
  },
  {
    name: 'Cinnamon Horchata Organic Green and Black Tea',
    price: 50,
    rating: 4,
    discount: 50,
    count: 3,
    images: [
      'https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/product_11_1-600x600.jpg',
      'https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/product_11_2-600x600.jpg',
    ],
  },
  {
    name: 'Cinnamon Horchata Organic Green and Black Tea',
    price: 50,
    rating: 4,
    discount: 30,
    count: 3,
    images: [
      'https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/product_4_1-600x600.jpg',
      'https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/product_4_2-600x600.jpg',
    ],
  },
  {
    name: 'Cinnamon Horchata Organic Green and Black Tea',
    price: 50,
    rating: 4,
    discount: 50,
    count: 3,
    images: [
      'https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/product_16_1.jpg',
      'https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/product_16_2.jpg',
    ],
  },
  {
    name: 'Cinnamon Horchata Organic Green and Black Tea',
    price: 50,
    rating: 2,
    discount: 50,
    count: 3,
    images: [
      'https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/product_6_1-600x600.jpg',
      'https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/product_6_2-600x600.jpg',
    ],
  },
  {
    name: 'Cinnamon Horchata Organic Green and Black Tea',
    price: 50,
    rating: 4,
    discount: 50,
    count: 3,
    images: [
      'https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/product_7_1-600x600.jpg',
      'https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/product_7_2-600x600.jpg',
    ],
  },
  {
    name: 'Cinnamon Horchata Organic Green and Black Tea',
    price: 50,
    rating: 4,
    discount: 50,
    count: 3,
    images: [
      'https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/product_11_1-600x600.jpg',
      'https://demo2.wpopal.com/teapoz/wp-content/uploads/2023/05/product_11_2-600x600.jpg',
    ],
  },
];
