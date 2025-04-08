// seed.js - Data for PlayShifu Product Page

// Product images
export const productImages = [
    'https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fcarousal%2Fcarousal-1.webp&w=1080&q=100',
    'https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fcarousal%2Fcarousal-2.webp&w=1080&q=100',
    'https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fcarousal%2Fcarousal-3.webp&w=1080&q=100',
    'https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fcarousal%2Fcarousal-4.webp&w=1080&q=100',
    'https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fcarousal%2Fcarousal-5.webp&w=1080&q=100',
    'https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fcarousal%2Fcarousal-6.webp&w=1080&q=100',
  ];
  
  export const product = {
    name: "Junior Genius Pack", // or whichever product you're rendering
    reelvideos: [
      "https://d3no6xaq2ua3a6.cloudfront.net/videos/product-ugc-videos/plugo-count/16.mp4#t=0.001", 
      "https://d3no6xaq2ua3a6.cloudfront.net/videos/product-ugc-videos/plugo-letters/3.mp4#t=0.001", 
      "https://d3no6xaq2ua3a6.cloudfront.net/videos/product-ugc-videos/plugo-count/17.mp4#t=0.001", 
      "https://d3no6xaq2ua3a6.cloudfront.net/videos/product-ugc-videos/plugo-count/12.mp4#t=0.001"
    ]
  };
  

  // About images
  export const aboutImages = [
    {
      img: 'https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fabout%2Fabout-1.webp&w=1200&q=50',
      title: 'Hands-On Play',
      description: 'Encourages tactile learning and motor skills development through physical interaction.'
    },
    {
      img: 'https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fabout%2Fabout-3.webp&w=1200&q=50',
      title: 'Screen-Free Learning',
      description: 'Designed to reduce screen time while keeping your child engaged and curious.'
    },
    {
      img: 'https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fjunior-genius-pack%2Fabout%2Fabout-6.webp&w=1200&q=50',
      title: 'STEM Focused Activities',
      description: 'Builds early skills in science, technology, engineering, and math through play.'
    }
  ];
  
  
  // Related products
  export const relatedProducts = [
    {
      id: 1,
      name: 'Plugo Animals',
      price: 2699,
      originalPrice: 2999,
      rating: 5,
      reviews: 24,
      image: 'https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-animals%2Fcarousal%2Fcarousal-1.webp&w=1080&q=75',
      tag: 'New Launch',
      discount: 'Flat 15% off',
      description: 'Interactive animal learning kit with AR technology',
      ageGroup: '4-10',
    },
    {
      id: 2,
      name: 'Plugo Detective',
      price: 2699,
      originalPrice: 2999,
      rating: 5,
      reviews: 18,
      image: 'https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-detective%2Fcarousal%2Fcarousal-1.webp&w=1080&q=75',
      tag: 'New Launch',
      discount: 'Flat 10% off',
      description: 'Mystery solving kit with interactive clues',
      ageGroup: '6-12',
    },
    {
      id: 3,
      name: 'Orboot Earth Explorer',
      price: 3399,
      originalPrice: 3999,
      rating: 5,
      reviews: 32,
      image: 'https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Forboot-earth-explorer%2Fcarousal%2F1.webp&w=1080&q=75',
      tag: 'Parents Choice',
      discount: 'Flat 10% off',
      description: 'AR globe for world geography exploration',
      ageGroup: '4-10',
    },
    {
      id: 4,
      name: 'PlayShifu Peppa Pig',
      price: 3399,
      originalPrice: 3999,
      rating: 5,
      reviews: 15,
      image: 'https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fpeppa-pig%2Fcarousal%2F1.webp&w=1080&q=75',
      tag: 'Parents Choice',
      discount: '',
      description: 'Interactive Peppa Pig learning adventures',
      ageGroup: '3-8',
    },
    {
      id: 5,
      name: 'Strategic Set',
      price: 3198,
      originalPrice: 3998,
      rating: 5,
      reviews: 15,
      image: 'https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fpeppa-pig%2Fcarousal%2F1.webp&w=1080&q=75',
      tag: 'Parents Choice',
      discount: '',
      description: 'Develops strategic thinking',
      ageGroup: '3-8',
    },
  ];
  
  // Box contents
  export const boxContents = [
    { id: 1, img: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-count%2Fout-of-the-box%2Fcount-spike.webp&w=1920&q=75", title: "Count Spike" },
    { id: 2, img: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-count%2Fout-of-the-box%2Fnumerals-and-arithmetic-operators.webp&w=1920&q=75", title: "2 Sets Of 0-9 Numerals" },
    { id: 3, img: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-count%2Fout-of-the-box%2Fgamepad.webp&w=1920&q=75", title: "Gamepad" },
    { id: 4, img: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-count%2Fout-of-the-box%2Fquick-start-guide.webp&w=1920&q=75", title: "Quick Start Guide" },
    { id: 5, img: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-letters%2Fout-of-the-box%2F48-letter-tiles.webp&w=1920&q=75", title: "48 Letter Tiles" },
    { id: 6, img: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-letters%2Fout-of-the-box%2Fletters-trunk.webp&w=1920&q=75", title: "Letters Trunk" },
    { id: 7, img: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-link%2Fout-of-the-box%2F15-smart-magnetic-tiles.webp&w=1920&q=75", title: "15 Smart Magnetic Tiles" },
  ];
  
  
  // Free in-app games
  export const appGames = [
    {
      id: 1,
      image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-link%2Fgames%2Fgame-6.webp&w=640&q=75",
    },
    {
      id: 2,
      image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-letters%2Fgames%2Fgame-9.webp&w=640&q=75",
    },
    {
      id: 3,
      image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-count%2Fgames%2Fgame-5.webp&w=640&q=75",
    },
    {
      id: 4,
      image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-link%2Fgames%2Fgame-1.webp&w=640&q=75",
    },
    {
      id: 5,
      image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-letters%2Fgames%2Fgame-7.webp&w=640&q=75",
      
    },
    {
      id: 6,
      image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fskus%2Fplugo-letters%2Fgames%2Fgame-6.webp&w=640&q=75",
      
    }
  ];
  
  
  
  // Device compatibility
  export const deviceCompatibility = [
    {
      id: 1,
      img: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fproduct%2Fdevice-compatibilty%2Fandroid-icon.webp&w=3840&q=75",
      title: "Android",
      details: [
        "All devices with RAM 3GB and above except Samsung",
        "All Samsung devices with RAM 2GB and above",
        "Devices with 11 inches screen and below (Samsung A9+ is not compatible)"
      ]
    },
    {
      id: 2,
      img: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fproduct%2Fdevice-compatibilty%2Fios-icon.webp&w=3840&q=75",
      title: "iOS",
      details: [
        "iPhone 6S and above",
        "iPad mini 4 and above",
        "iPad Air 2 and above",
        "iPad 5th gen and above",
        "iPad Pro 11 inches only"
      ]
    },
    {
      id: 3,
      img: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fproduct%2Fdevice-compatibilty%2Ffire-device.webp&w=3840&q=75",
      title: "Amazon Fire",
      details: [
        "Fire 7 (2022 release)",
        "Fire 8 (2020 and 2022 release)",
        "Fire 8 Plus (2020 and 2022 release)"
      ]
    }
  ];
  
  
  // Product details
  export const productDetails = {
    id: "junior-genius-pack",
    name: "Junior Genius Pack",
    subtitle: "Plugo Count & Plugo Letters & Plugo Link",
    price: 3749,
    originalPrice: 4999,
    discount: "25%",
    rating: 4,
    reviews: 24,
    ageGroup: "4-10",
    warranty: "6 months",
    returnPeriod: "30 days",
    features: [
      "Plugo Count - An interactive math learning kit to master essential math skills, including addition, subtraction, multiplication, and division.",
      "Plugo Letters - A letter toy that encourages children to spell using the toy to solve word puzzles on the screen.",
      "Plugo Link - Build shapes using the magnetic tiles off-screen to solve puzzles on-screen!"
    ],
    tags: [
      { text: "High Educational Value", type: "educational" },
      { text: "Flat 25% off", type: "discount" },
      { text: "Super Saver Deals", type: "super-saver" }
    ],
    benefits: [
      { icon: "4-10", text: "Age Group" },
      { icon: "truck", text: "Free Shipping" },
      { icon: "shield", text: "6 months warranty" },
      { icon: "undo", text: "30 Day Return" }
    ]
  };
  
  // Stats for footer
  export const companyStats = [
    { value: "2M+", label: "Parents & Educators" },
    { value: "35+", label: "Countries & Counting" },
    { value: "20+", label: "Educational Toys" },
    { value: "4.8", label: "App Rating" }
  ];
  
  // Footer links
  export const footerLinks = {
    shop: [
      "Problem Solving Toys",
      "STEM Toys",
      "Social & Emotional Development Toys",
      "Birthday Gift Toys",
      "Best Seller Toys"
    ],
    more: [
      "Device Compatibility",
      "Free E-Books",
      "Parent Hub",
      "Blogs",
      "About Us"
    ],
    support: [
      "Contact Us",
      "Return Policy",
      "Privacy Policy",
      "Terms & Conditions",
      "FAQs"
    ]
  };
  
  // Payment methods
  export const paymentMethods = [
    { name: "Apple Pay", image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fpayments%2Fapplepay.webp&w=3840&q=75" },
    { name: "Visa", image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fpayments%2Fmastercard.webp&w=3840&q=75" },
    { name: "Mastercard", image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fpayments%2Fvisa.webp&w=3840&q=75" },
    { name: "Google Pay", image: "https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Fpayments%2Fgpay.webp&w=3840&q=75" }
  ];
  
  // Features bar items
  export const featuresBarItems = [
    { icon: "truck", text: "Free Shipping" },
    { icon: "undo", text: "30 Days Return" },
    { icon: "shield", text: "6 Months Warranty" },
    { icon: "lock", text: "Secure Checkout" }
  ];
  
  // Navigation items
  export const navigationItems = [
    { text: "Shop By Category", hasDropdown: true },
    { text: "Shop By Age", hasDropdown: true },
    { text: "Super Saver Deals", highlight: true },
    { text: "Birthday Gifts" },
    { text: "Up To 30% Off" },
    { text: "Return Gifts" },
    { text: "Shop All" },
    { text: "More", hasDropdown: true }
  ];
  
  // Social media links
  export const socialMediaLinks = [
    { platform: "facebook", url: "https://www.facebook.com/playshifu/" },
    { platform: "linkedin", url: "https://www.linkedin.com/company/playshifu/?originalSubdomain=in" },
    { platform: "instagram", url: "https://www.instagram.com/playshifu/" },
    { platform: "youtube", url: "https://www.youtube.com/playshifu" }
  ];