// couponDetail.ts

export type CouponDetail = {
  slug: number;
  images: string;
  name: string;
  duration: string;
  location: string;
  contact: string;
  type: string;
};

export const couponDetail: CouponDetail[] = [
  {
    slug: 1,
    images:
      'https://as1.ftcdn.net/v2/jpg/02/91/67/60/1000_F_291676069_ZBjqhpjsPBprZlfjmbOTt4zebYG5gGq5.jpg',
    name: 'New Year Gift 2024',
    duration:
      "This amazing discount offer is valid until July 2024. Don't miss out on the chance to save big this summer!",
    location:
      'Available in Example City 1 and its neighboring areas, our stores are conveniently located for your shopping pleasure.',
    contact:
      'Feel free to contact our customer service team at +1 234 567 890 for more details and to learn how you can take advantage of this fantastic offer.',
    type: 'Special Discount Offer for Summer',
  },
  {
    slug: 2,
    images:
      'https://as1.ftcdn.net/v2/jpg/02/91/67/62/1000_F_291676248_IuE3mdvCI2vKNRw1tsBqRVvmMvFAE8hN.jpg',

    name: 'Autumn Sale is Here!',
    duration:
      'Our exciting autumn sale runs until August 2024. Now is the perfect time to treat yourself or loved ones to something special.',
    location:
      "Explore our exclusive offers at Example City 2 and its surrounding areas, where you'll find great deals just around the corner.",
    contact:
      'Contact our team today at +1 345 678 901 to make the most of this incredible opportunity to get a free item with every purchase.',
    type: 'Get a Free Item with Every Purchase',
  },
  {
    slug: 3,
    images:
      'https://as2.ftcdn.net/v2/jpg/02/91/67/83/1000_F_291678347_ldV3Fs2UXsVMe1fpkoTcluIjNh65z6ya.jpg',

    name: 'Winter Sale is Comming!',
    duration:
      'Act fast! This buy one, get one free offer is available until September 2024. Stock up on your favorites today.',
    location:
      'Visit Example City 3 and its surrounding areas to take advantage of this exclusive BOGO offer on selected items.',
    contact:
      "For more information about our products and this promotion, please contact us at +1 456 789 012. We're here to help!",
    type: 'Exclusive BOGO Offer on Selected Items',
  },
  {
    slug: 4,
    images:
      'https://as1.ftcdn.net/v2/jpg/03/05/13/86/1000_F_305138615_3S2eG484NTtMRupLZB4odKxboyBqhVbb.jpg',

    name: 'Happy Chinese New Year',
    duration:
      "Hurry, our special fall promotion ends in October 2024. Take advantage of these limited-time offers before they're gone!",
    location:
      "Discover the savings available in Example City 4 and nearby locations. We're conveniently located to serve you better.",
    contact:
      'Call us now at +1 567 890 123 to secure this deal and learn more about how we can enhance your shopping experience.',
    type: 'Special Promotion for Fall Season',
  },
  {
    slug: 5,
    images:
      'https://as2.ftcdn.net/v2/jpg/02/91/67/61/1000_F_291676143_GtsMEfoFeRQADmmeLg7MSiOxYE1ET9hZ.jpg',

    name: 'Special Offer!',
    duration:
      "Don't miss out on our special offer, valid until November 2024. It's our way of thanking you for your loyalty.",
    location:
      'Visit Example City 5 and its neighboring areas to discover the exclusive discounts available just for you.',
    contact:
      'Get in touch with us today at +1 678 901 234 to learn more about this exciting offer and how you can benefit.',
    type: 'Exclusive Discount for our Loyal Customers',
  },
  {
    slug: 6,
    images:
      'https://as2.ftcdn.net/v2/jpg/02/91/67/65/1000_F_291676535_WzMlxsrQh8Ww7V04HvR5owHArtWcZkuv.jpg',

    name: 'Example Coupon 6',
    duration:
      'Celebrate the holiday season with our special discount, valid until December 2024. Spread joy with savings!',
    location:
      'Shop with us in Example City 6 and its surrounding areas to experience the magic of our holiday promotions.',
    contact:
      'Call us now at +1 789 012 345 to take advantage of this limited-time offer and bring cheer to your shopping.',
    type: 'Special Holiday Season Discount',
  },
  {
    slug: 7,
    images:
      'https://as2.ftcdn.net/v2/jpg/02/91/67/59/1000_F_291675907_a42y1cNQP2VRH2t5nNoVZsmkshVrHwVh.jpg',

    name: 'Example Coupon 7',
    duration:
      'Ring in the new year with our special promotion, valid until January 2025. Start the year right with savings!',
    location:
      'Discover our offers in Example City 7 and nearby locations, where every purchase brings value and joy.',
    contact:
      "Contact us now at +1 890 123 456 to find out more about this exciting New Year's promotion.",
    type: "Special New Year's Promotion",
  },
  {
    slug: 8,
    images:
      'https://as1.ftcdn.net/v2/jpg/02/91/67/60/1000_F_291676097_ycnF7xaUPfzSMWp6X8v94EOvWgtI9Szx.jpg',

    name: 'Example Coupon 8',
    duration:
      "Celebrate love with our Valentine's Day offer, valid until February 2025. Show your love with thoughtful savings!",
    location:
      'Share the love in Example City 8 and its surrounding areas, where every purchase brings happiness and romance.',
    contact:
      "Get more information about this romantic offer by contacting us at +1 901 234 567. Let us help make your Valentine's Day special.",
    type: "Special Valentine's Day Offer",
  },
];
