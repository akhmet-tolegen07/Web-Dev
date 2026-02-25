import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Tablets' },
    { id: 4, name: 'Headphones' },
  ];

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 13',
      description: 'Powerful Apple smartphone with A15 chip and great camera.',
      price: 329990,
      rating: 4.8,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/',
      likes: 0,
      categoryId: 1,
    },

    {
      id: 2,
      name: 'Samsung Galaxy S25 Ultra',
      description: 'Flagship Samsung phone with excellent display and camera.',
      price: 562000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pbc/p24/20120108.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7d/p27/20120112.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ped/p27/20120116.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-chernyi-133435348/?c=750000000',
      likes: 0,
      categoryId: 1,
    },

    {
      id: 3,
      name: 'Xiaomi Redmi Note 13',
      description: 'Affordable smartphone with AMOLED display and big battery.',
      price: 193000,
      rating: 4.5,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZM1RBQqERNREIzQLqniuuBfl0NegxacOhdw&s',
      images: [
        'https://gadgetstore.kz/wa-data/public/shop/products/81/08/881/images/2618/2618.970.jpg',
        'https://optim.tildacdn.pro/tild3234-3065-4363-a461-333162633562/-/format/webp/noroot.png.webp',
        'https://gadgetstore.kz/wa-data/public/shop/products/76/08/876/images/2614/2614.970.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-5g-nfc-16-gb-512-gb-chernyi-118366848/?c=750000000',
      likes: 0,
      categoryId: 1,
    },

    {
      id: 4,
      name: 'Google Pixel 9',
      description:
        'Modern smartphone with high performance and innovative features that will become your reliable companion in everyday life.',
      price: 449900,
      rating: 4.5,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/hee/h02/86792517910558.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hee/h02/86792517910558.jpg?format=gallery-medium',
        'https://50.img.avito.st/image/1/1.0Su0Mra4fcKChf_PmnG2N5qTf8QKk__Ugp5_wASbdcgC.RjA7Ko03XP1qI5yZY5wxe0Emwv_TOproi_aXbNeAsSI',
        'https://avatars.mds.yandex.net/get-mpic/5194288/2a00000191544e0c97fee9d7de33e7652af7/orig',
      ],
      link: 'https://kaspi.kz/shop/p/google-pixel-9-12-gb-256-gb-chernyi-122384541/?c=750000000',
      likes: 0,
      categoryId: 1,
    },

    {
      id: 5,
      name: 'Poco C71',
      description:
        'Smartphone that combines high performance, modern technology, and stylish design.',
      price: 74990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p9e/p27/38279925.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p82/p27/38279926.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p65/p27/38279927.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/poco-c71-4-gb-128-gb-zolotistyi-podarok-138553679/?c=750000000',
      likes: 0,
      categoryId: 1,
    },

    {
      id: 6,
      name: 'MacBook Air M1',
      description: 'Lightweight Apple laptop with M1 chip, fast performance and long battery life.',
      price: 439990,
      rating: 4.9,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0a/h85/64213178351646.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hdb/hb3/64213181169694.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3a/h0d/64213216755742.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000',
      likes: 0,
      categoryId: 2,
    },

    {
      id: 7,
      name: 'ASUS VivoBook 15',
      description: 'Laptop that combines high performance, stylish design and convenience of use',
      price: 307500,
      rating: 4.6,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h0b/hd3/86542194966558.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf7/h2a/86542195097630.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hdf/hfe/86542195163166.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfa/hb9/86542195228702.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/asus-vivobook-15-x1504za-bq1364w-15-6-16-gb-ssd-512-gb-win-11-90nb1021-m02090-121433042/?c=750000000',
      likes: 0,
      categoryId: 2,
    },

    {
      id: 8,
      name: 'Lenovo IdeaPad 1',
      description:
        'Laptop for work, study, and everyday tasks that combines performance with an affordable price.',
      price: 196000,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p3d/p07/59736581.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p75/p07/59736583.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p91/p07/59736584.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pae/p07/59736585.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-1-15ijl7-15-6-8-gb-ssd-512-gb-bez-os-82lx00g9rk-144403511/?c=750000000',
      likes: 0,
      categoryId: 2,
    },

    {
      id: 9,
      name: 'Acer Aspire 16',
      description: 'A powerful and stylish laptop that is perfect for work and play.',
      price: 282730,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p91/pf8/28407711.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p75/pf8/28407712.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p59/pf8/28407713.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p21/pf8/28407715.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/acer-aspire-16-16-gb-emmc-512-gb-win-11-pro-nx-j5rem-01c-al16-52p-135804242/?c=750000000',
      likes: 0,
      categoryId: 2,
    },

    {
      id: 10,
      name: 'HP Laptop 15',
      description: 'A reliable laptop for everyday work.',
      price: 299990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p80/pae/95714977.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p64/pae/95714978.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p47/pae/95714979.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbf/pab/95714981.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/hp-laptop-15-fd0324ci-15-6-16-gb-ssd-512-gb-bez-os-d18p7ea-154678941/?c=750000000',
      likes: 0,
      categoryId: 2,
    },

    {
      id: 11,
      name: 'Galaxy Tab A9',
      description: 'A powerful device for work and entertainment that offers high performance',
      price: 179990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p3b/p01/77344134.bin?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p57/p01/77344135.bin?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p73/p01/77344136.bin?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pac/p01/77344138.bin?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-lte-8-7-djuim-4-gb-64-gb-seryi-113807107/?c=750000000',
      likes: 0,
      categoryId: 3,
    },

    {
      id: 12,
      name: 'Apple iPad A16',
      description: 'Your perfect companion for work and play.',
      price: 205000,
      rating: 4.2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p85/pe5/37011897.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p69/pe5/37011898.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=750000000',
      likes: 0,
      categoryId: 3,
    },

    {
      id: 13,
      name: 'Huawei MatePad SE',
      description: 'An excellent choice for everyday use.',
      price: 95990,
      rating: 4.8,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/hab/hd7/86806714908702.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb7/h51/86806714974238.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha0/h48/86806715301918.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha5/h7a/86806715367454.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/huawei-matepad-se-ags6-w09-11-djuim-8-gb-128-gb-seryi-122142480/?c=750000000',
      likes: 0,
      categoryId: 3,
    },

    {
      id: 14,
      name: 'Lenovo Idea Tab Pro',
      description:
        'A powerful device with a large screen, suitable for work, creativity, and multimedia.',
      price: 249900,
      rating: 4.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/paa/pd2/22753488.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p22/pd0/22753490.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p06/pd0/22753491.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pce/pcf/22753493.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-idea-tab-pro-tb373fu-acc-12-7-djuim-8-gb-256-gb-seryi-134113446/?c=750000000',
      likes: 0,
      categoryId: 3,
    },

    {
      id: 15,
      name: 'Xiaomi Pad 6',
      description: 'Powerful Android tablet with high-resolution display and slim design.',
      price: 162000,
      rating: 4.0,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h32/hdc/82729741582366.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p78/pfa/78318162.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p95/pfa/78318163.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb1/pfa/78318164.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-11-djuim-8-gb-256-gb-seryi-112453226/?c=750000000',
      likes: 0,
      categoryId: 3,
    },

    {
      id: 16,
      name: 'AirPods Pro 2',
      description: 'Wireless earbuds with active noise cancellation and spatial audio.',
      price: 105000,
      rating: 3.2,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/hf2/84108189827102.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000',
      likes: 0,
      categoryId: 4,
    },
    {
      id: 17,
      name: 'Sony WH-1000XM5',
      description: 'Top-tier noise cancelling headphones with excellent sound quality.',
      price: 134990,
      rating: 4.2,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hd5/hd0/65099686150174.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc7/hde/65099687657502.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0d/h4e/65099689000990.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?c=750000000',
      likes: 0,
      categoryId: 4,
    },

    {
      id: 18,
      name: 'Logitech G Pro X',
      description:
        'A powerful gaming model with a stylish black body and a steel adjustable headband.',
      price: 59990,
      rating: 4.0,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/hda/h35/63881966288926.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h94/hf8/63881967697950.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hbb/h9e/63881970417694.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha5/hd1/63881972514846.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-logitech-g-pro-x-chernyi-100383545/?c=750000000',
      likes: 0,
      categoryId: 4,
    },

    {
      id: 19,
      name: 'Samsung Galaxy Buds 3',
      description:
        'This is a stylish and functional accessory for those who value high-quality sound and comfort.',
      price: 51990,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p28/p8f/69533707.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p28/p8f/69533707.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p44/p8f/69533708.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p60/p8f/69533709.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-samsung-galaxy-buds-3-fe-chernyi-147052040/?c=750000000',
      likes: 0,
      categoryId: 4,
    },

    {
      id: 20,
      name: 'JBL Tune 770NC',
      description: 'Top-tier noise cancelling headphones with excellent sound quality.',
      price: 33990,
      rating: 4.9,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/hcb/h78/82294170255390.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcb/h78/82294170255390.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5e/h26/82294170779678.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h69/h5f/82294171303966.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-770nc-chernyi-112143394/?c=750000000',
      likes: 0,
      categoryId: 4,
    },
  ];

  getCategories() {
    return this.categories;
  }

  getProductsByCategory(categoryId: number) {
    return this.products.filter((p) => p.categoryId === categoryId);
  }
}
