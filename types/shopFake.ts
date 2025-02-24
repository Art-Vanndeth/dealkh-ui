export type ShopFake = {
  slug: string;
  address: string;
  phoneNumber: string;
  name: string;
  description: string;
  profile: string;
  cover: string;
  shopType: string;
  openAt: string;
  location: string;
  isDeleted: boolean;
};

const shopFakes: ShopFake[] = [
  {
    slug: 'K.The-Plant',
    address: '19 Monivong Blvd, Phnom Penh, Cambodia',
    phoneNumber: '+855 23 222 782',
    name: 'K.The Plant',
    description:
      'K.The Plant is a large indoor store located in the heart of the city. It offers a wide variety of goods including clothes, electronics, handicrafts, and local produce.',
    profile:
      'https://i.pinimg.com/564x/45/04/4b/45044bef83acc12ef103ac404e586f9d.jpg',
    cover:
      'https://i.pinimg.com/564x/14/de/0c/14de0c849e0394105e043da184a6f368.jpg',
    shopType: 'Flower',
    openAt: '10:00AM to 05:00PM',
    location: '11.562880, 104.917042',
    isDeleted: false,
  },
  {
    slug: 'chef-donut',
    address: '228 Orussey Market, Phnom Penh, Cambodia',
    phoneNumber: '+855 12 345 678',
    name: 'Chef Donut',
    description:
      'Orussey Market is a lively outdoor market known for its wide selection of clothing, household items, and Khmer street food. It a popular spot for locals and tourists alike.',
    profile:
      'https://i.pinimg.com/564x/3a/2a/bd/3a2abdd21981e144c22a239967844f40.jpg',
    cover:
      'https://i.pinimg.com/564x/d4/ea/aa/d4eaaa75e8d64dbbf30e5085b2882265.jpg',
    shopType: 'Marketplace',
    openAt: '07:00AM to 06:00PM',
    location: '11.569175, 104.917000',
    isDeleted: false,
  },
  {
    slug: 'khann-kafe',
    address: '19 Kandal Market, Phnom Penh, Cambodia',
    phoneNumber: '+855 23 987 654',
    name: 'Khann Kafe',
    description:
      'Kandal Market is a traditional Cambodian market selling a diverse range of goods such as fresh produce, flowers, household items, and local handicrafts. Ita great place to experience the local culture.',
    profile:
      'https://i.pinimg.com/564x/39/3b/b1/393bb1bb15940aea508dd07c5da23917.jpg',
    cover:
      'https://i.pinimg.com/564x/02/08/66/02086690081f2a02b68c18e30d897e70.jpg',
    shopType: 'Marketplace',
    openAt: '06:00AM to 05:00PM',
    location: '11.557401, 104.916111',
    isDeleted: false,
  },
  {
    slug: 'old-market',
    address: '12 Old Market, Phnom Penh, Cambodia',
    phoneNumber: '+855 12 345 678',
    name: 'Old Market',
    description:
      'The Old Market is a bustling openAt-air market in the heart of the city, offering a wide range of local produce, handicrafts, and street food. Ita popular spot for both locals and tourists.',
    profile:
      'https://i.pinimg.com/564x/62/ab/e3/62abe3c73330a7fd1af483b64acae37e.jpg',
    cover:
      'https://i.pinimg.com/564x/7c/a0/fc/7ca0fcb1e3e54a259314d04d920d2501.jpg',
    shopType: 'Marketplace',
    openAt: '07:00AM to 06:00PM',
    location: '11.560811, 104.917703',
    isDeleted: false,
  },
  {
    slug: 'psar-thmei',
    address: '92 Psar Thmei, Phnom Penh, Cambodia',
    phoneNumber: '+855 23 456 789',
    name: 'Psar Thmei',
    description:
      'Psar Thmei, or the New Market, is a modern indoor market that sells a variety of goods, from clothing and electronics to local delicacies and souvenirs. Ita popular shopping destination for both locals and visitors.',
    profile:
      'https://i.pinimg.com/564x/a1/0c/76/a10c76bf683fe2781220e21e77097d09.jpg',
    cover:
      'https://i.pinimg.com/564x/04/cf/85/04cf854794e18b9018c4bc510b1095c4.jpg',
    shopType: 'Marketplace',
    openAt: '07:00AM to 06:00PM',
    location: '11.561467, 104.918956',
    isDeleted: false,
  },
  {
    slug: 'russian-market',
    address: '105 Russian Market, Phnom Penh, Cambodia',
    phoneNumber: '+855 12 345 678',
    name: 'Russian Market',
    description:
      'The Russian Market, also known as Tuol Tompoung Market, is a vibrant outdoor market that sells a wide range of goods, from clothes and handicrafts to electronics and local produce. Ita popular spot for bargain hunting.',
    profile:
      'https://i.pinimg.com/564x/98/f9/d9/98f9d9a24e606889d77d1612f1c44029.jpg',
    cover:
      'https://i.pinimg.com/564x/92/c7/49/92c749e7809eba8a5f5c0fc4896a5dc8.jpg',
    shopType: 'Marketplace',
    openAt: '07:00AM to 06:00PM',
    location: '11.554958, 104.920923',
    isDeleted: false,
  },
  {
    slug: 'boeung-keng-kang-market',
    address: '78 Boeung Keng Kang Market, Phnom Penh, Cambodia',
    phoneNumber: '+855 23 987 654',
    name: 'Boeung Keng Kang Market',
    description:
      'Boeung Keng Kang Market, or BKK Market, is a modern indoor market that offers a diverse selection of goods, including clothing, electronics, household items, and local delicacies. Ita popular shopping destination for both locals and tourists.',
    profile:
      'https://i.pinimg.com/564x/d7/de/64/d7de64f0c785b5a14fa04de5225d2e07.jpg',
    cover:
      'https://i.pinimg.com/736x/71/f7/6d/71f76da69135573bfe54c9e990c0504c.jpg',
    shopType: 'Marketplace',
    openAt: '07:00AM to 06:00PM',
    location: '11.550422, 104.922607',
    isDeleted: false,
  },
  {
    slug: 'lexuery-clothing',
    address: '45 Chbar Ampov Market, Phnom Penh, Cambodia',
    phoneNumber: '+855 12 345 678',
    name: 'Lexury Clothing',
    description:
      'Chbar Ampov Market is a lively outdoor market located in the southern part of Phnom Penh. It offers a wide variety of local produce, street food, and handicrafts, providing a glimpse into the daily life of the local community.',
    profile:
      'https://i.pinimg.com/564x/f5/19/90/f51990bfcf1177cbb6a8724ee8da8348.jpg',
    cover:
      'https://i.pinimg.com/564x/44/57/3a/44573a9dbd0aa1e69b439b77fcdab14f.jpg',
    shopType: 'Cloth',
    openAt: '06:00AM to 05:00PM',
    location: '11.545900, 104.927412',
    isDeleted: false,
  },
  {
    slug: 'sneaker-studio',
    address: '62 Samaki Market, Phnom Penh, Cambodia',
    phoneNumber: '+855 23 456 789',
    name: 'Sneaker Studio',
    description:
      'Samaki Market is a traditional Cambodian market that specializes in fresh seafood, meat, and local produce. Ita popular destination for both locals and visitors who want to experience authentic Khmer cuisine.',
    profile:
      'https://i.pinimg.com/564x/ba/33/ad/ba33ad3f6a52ae0211da00394a429c66.jpg',
    cover:
      'https://i.pinimg.com/564x/14/6d/bd/146dbd86668badb9ef833b3b44a2da04.jpg',
    shopType: 'Shoe',
    openAt: '07:00AM to 05:00PM',
    location: '11.557844, 104.915033',
    isDeleted: false,
  },
];

export default shopFakes;
