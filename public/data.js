/* Shared account data used by both the storefront and the product page */
window.STEAMZONE_ACCOUNTS = [
  {
    id: 1,
    name: 'GTA V',
    category: 'AAA',
    featured: true,
    price: 300,
    currency: 'DA',
    gamesList: [],
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/271590/capsule_616x353.jpg',
    hero: 'https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg',
    icon: 'fa-solid fa-car',
    accent: '#22c55e',
    developer: 'Rockstar North',
    publisher: 'Rockstar Games',
    release: '2015-04-14',
    tags: ['عالم مفتوح', 'أكشن', 'مغامرات', 'قتال بالسيارات', 'تعديلات'],
    shortDescription: 'انغمس في عالم لوس سانتوس — أكبر مدينة تفاعلية في تاريخ ألعاب Rockstar.',
    description: [
      'GTA V هي مغامرة أكشن ضخمة من Rockstar Games تلعبها بأسلوبك الحر في عالم مفتوح لا حدود له. تشعر وكأنك تعيش قصة ثلاث شخصيات لا تشبه بعضها: مايكل وفرانكلين وتريفور — قصصهم تتقاطع في مواقف لا تُنسى.',
      'استمتع بمجموعة ضخمة من المهام، وسباقات السيارات، والمركبات النادرة، ونظام أونلاين غني (GTA Online) يتيح لك اللعب مع أصدقائك. متوفرة على حسابك الخاص فورًا.'
    ],
    features: [
      'عالم مفتوح ضخم (لوس سانتوس ومقاطعة بلادير)',
      'وضع أونلاين متكامل (GTA Online)',
      'أكثر من 250 مركبة سيارات ودراجات وطائرات',
      'قصة رئيسية ممتدة + مهام جانبية لا حصر لها',
      'التعديلات (Mods) مدعومة على النسخة',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 10 64-bit', cpu: 'Intel Core 4 6600K @ 2.4GHz / AMD Phenom 4Duo @ 2.5GHz', ram: '4GB RAM', gpu: 'NVIDIA GeForce 7800 GT 512MB / AMD HD 4870 1GB', storage: '90GB مساحة خالية', directx: 'DirectX 11' },
      rec: { label: 'المواصفات الموصى بها', os: 'Windows 10 64-bit', cpu: 'Intel Core i5-6600K @ 3.5GHz / AMD Ryzen 5', ram: '8GB RAM', gpu: 'NVIDIA GTX 1060 6GB / AMD RX 580 8GB', storage: '100GB مساحة خالية', directx: 'DirectX 11' }
    }
  },
  {
    id: 2,
    name: 'BeamNG.drive',
    category: 'AAA',
    featured: false,
    price: 100,
    currency: 'DA',
    gamesList: [],
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/284160/capsule_616x353.jpg',
    hero: 'https://cdn.akamai.steamstatic.com/steam/apps/284160/header.jpg',
    icon: 'fa-solid fa-car-crash',
    accent: '#f97316',
    developer: 'BeamNG GmbH',
    publisher: 'BeamNG GmbH',
    release: '2015-05-29',
    tags: ['محاكاة', 'فيزياء', 'سيارات', 'عالم مفتوح', 'تعديلات'],
    shortDescription: 'أفضل محاكاة فيزياء سيارات واقعية — اصطدامات، تدمير، قيادة حرة.',
    description: [
      'BeamNG.drive هي محاكاة سيارات واقعية ثورية تعتمد على فيزياء الأجزاء الناعمة (soft-body physics). كل مركبة تتكون من آلاف العقد والأعصاب التي تتفاعل بشكل واقعي مع الاصطدامات والتشوه.',
      'استكشف خرائط ضخمة بعالم مفتوح، جرب سيناريوهات متنوعة، أو اصنع محتواك الخاص عبر المحرر المدمج ودعم التعديلات (Mods) الواسع من Workshop.'
    ],
    features: [
      'فيزياء سيارات واقعية بتقنية Soft-body physics',
      'خرائط عالم مفتوح ضخمة ومتنوعة',
      'مئات المركبات قابلة للتخصيص',
      'محرر سيناريوهات ومحرر خرائط',
      'دعم كامل للتعديلات (Steam Workshop)',
      'أوضاع لعب: حر، سيناريوهات، وقت هجوم، ومزيد',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 7/8/10/11 64-bit', cpu: 'Intel Core i3 / AMD FXシリーズ', ram: '4GB RAM', gpu: 'NVIDIA GeForce GTX 550 Ti / AMD Radeon HD 7770', storage: '15GB مساحة خالية', directx: 'DirectX 11' },
      rec: { label: 'الموصى بها', os: 'Windows 10/11 64-bit', cpu: 'Intel Core i5-8400 / AMD Ryzen 5 3600', ram: '8GB RAM', gpu: 'NVIDIA GTX 1060 6GB / AMD RX 580 8GB', storage: '20GB مساحة خالية', directx: 'DirectX 11' }
    }
  },
  {
    id: 3,
    name: 'Red Dead Redemption 2',
    category: 'AAA',
    featured: true,
    price: 400,
    currency: 'DA',
    gamesList: [],
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/1174180/capsule_616x353.jpg',
    hero: 'https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg',
    icon: 'fa-solid fa-horse',
    accent: '#b8860b',
    developer: 'Rockstar Games',
    publisher: 'Rockstar Games',
    release: '2019-11-05',
    tags: ['عالم مفتوح', 'أكشن', 'مغامرات', 'غرب أمريكي', 'قصة'],
    shortDescription: 'ملحمة آرثر مورغان وعصابة فان دير ليند في أمريكا 1899.',
    description: [
      'Red Dead Redemption 2 هي تحفة روكستار جيمز — عالم مفتوح ضخم في غرب أمريكا أواخر القرن التاسع عشر. تلعب بدور آرثر مورغان، عضو في عصابة فان دير ليند، وتختبر قصة عميقة عن الولاء، الخيانة، والبقاء.',
      'عالم حي يتفاعل معك: طقس ديناميكي، حيوانات برية، مدن نابضة بالحياة، ومئات المهام الجانبية. طور الأونلاين (Red Dead Online) يتيح لك استكشاف العالم مع الأصدقاء.'
    ],
    features: [
      'قصة سينمائية عميقة مع شخصيات لا تُنسى',
      'عالم مفتوح ضخم بتفاصيل مذهلة',
      'نظام شرف وتفاعل ديناميكي مع NPCs',
      'Red Dead Online متعدد اللاعبين',
      'صيد، صيد سمك، قمار، ومهام جانبية لا حصر لها',
      'رسومات وصوتيات من أعلى مستوى',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 10 64-bit', cpu: 'Intel Core i5-2500K / AMD Ryzen 5 1600', ram: '8GB RAM', gpu: 'NVIDIA GeForce GTX 770 2GB / AMD Radeon R9 280', storage: '150GB مساحة خالية', directx: 'DirectX 12' },
      rec: { label: 'الموصى بها', os: 'Windows 10/11 64-bit', cpu: 'Intel Core i7-4770K / AMD Ryzen 5 3600', ram: '12GB RAM', gpu: 'NVIDIA GTX 1060 6GB / AMD RX 5700 XT', storage: '150GB مساحة خالية (SSD)', directx: 'DirectX 12' }
    }
  },
  {
    id: 5,
    name: 'Forza Horizon 5',
    category: 'AAA',
    featured: false,
    price: 200,
    currency: 'DA',
    gamesList: [],
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/1551360/capsule_616x353.jpg',
    hero: 'https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg',
    icon: 'fa-solid fa-flag-checkered',
    accent: '#e85d04',
    developer: 'Playground Games',
    publisher: 'Xbox Game Studios',
    release: '2021-11-09',
    tags: ['سباقات', 'عالم مفتوح', 'سيارات', 'أونلاين', 'مكسيك'],
    shortDescription: 'أفضل لعبة سباقات عالم مفتوح — اكتشف المكسيك، مئات السيارات، وطقس ديناميكي.',
    description: [
      'Forza Horizon 5 تأخذك في رحلة عبر المكسيك الخلابة — صحراء، غابات، براكين، ومدن تاريخية. أكثر من 500 سيارة مرخصة بتفاصيل مذهلة، مع دعم Ray Tracing و 4K/60fps.',
      'استكشف العالم المفتوح بحرية، شارك في مهرجان Horizon، أكمل القصص، أو تنافس في الأونلاين مع Horizon Arcade، Eliminator، و convoys. دعم كامل للتعديلات والـ Livery Editor.'
    ],
    features: [
      'عالم مفتوح ضخم في المكسيك بتفاصيل 4K/HDR',
      'أكثر من 500 سيارة مرخصة بتفاصيل واقعية',
      'طقس ديناميكي وفصول متغيرة',
      'طور Horizon Arcade و The Eliminator تنافسي',
      'Livery Editor كامل + دعم التعديلات',
      'Cross-play بين Steam و Xbox + Cloud Gaming',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 10 64-bit', cpu: 'Intel Core i5-8400 / AMD Ryzen 5 3600', ram: '8GB RAM', gpu: 'NVIDIA GTX 1060 6GB / AMD RX 580', storage: '110GB مساحة خالية', directx: 'DirectX 12' },
      rec: { label: 'الموصى بها', os: 'Windows 10/11 64-bit', cpu: 'Intel Core i7-10700K / AMD Ryzen 7 5800X', ram: '16GB RAM', gpu: 'NVIDIA RTX 3080 / AMD RX 6800 XT', storage: '110GB مساحة خالية (SSD NVMe)', directx: 'DirectX 12' }
    }
  },
  {
    id: 6,
    name: 'EA SPORTS FC 25',
    category: 'multi',
    featured: false,
    price: 200,
    currency: 'DA',
    gamesList: [],
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/2669320/capsule_616x353.jpg',
    hero: 'https://cdn.akamai.steamstatic.com/steam/apps/2669320/header.jpg',
    icon: 'fa-solid fa-futbol',
    accent: '#facc15',
    developer: 'EA Canada , EA Romania',
    publisher: 'Electronic Arts',
    release: '2024-09-27',
    tags: ['كرة قدم', 'رياضية', 'أونلاين', 'محاكاة', 'eSports'],
    shortDescription: 'متعة كرة القدم الكاملة — طور Rush 5v5 و تكتيكات FC IQ.',
    description: [
      'EA SPORTS FC 25 هي لعبة كرة القدم الأكثر شمولاً من Electronic Arts — وضع Rush الجديد 5v5 يتيح لكم اللعب مع أصدقائك بأسلوب سريع وممتع، بينما يعيد FC IQ صياغة التكتيكات والتحكم في الملعب بدقة غير مسبوقة.',
      'أكثر من 19,000 لاعب حقيقي من أشهر الأندية والمسابقات حول العالم، مع Ultimate Team و Career و Clubs. احصل على الحساب جاهزاً على ستيم وابدأ لعبك فوراً.'
    ],
    features: [
      'وضع Rush الجديد 5v5 للعب مع الأصدقاء',
      'نظام تكتيكي متقدم FC IQ',
      'Ultimate Team — فريق أحلامك مع لاعبين حقيقيين',
      'Career Mode كلاعب أو مدرب للرجال والنساء',
      'طور Clubs و Pro Clubs الجماعي',
      'بطولات حقيقية مرخصة من أشهر الدوريات',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 10 64-bit', cpu: 'Intel Core i5 6600K / AMD Ryzen 5 1600', ram: '8GB RAM', gpu: 'NVIDIA GTX 1050 Ti / AMD RX 570', storage: '100GB مساحة خالية', directx: 'DirectX 12' },
      rec: { label: 'الموصى بها', os: 'Windows 10/11 64-bit', cpu: 'Intel Core i7 9700K / AMD Ryzen 5 3600', ram: '16GB RAM', gpu: 'NVIDIA RTX 2070 / AMD RX 5700 XT', storage: '100GB مساحة خالية (SSD)', directx: 'DirectX 12' }
    }
  },
  {
    id: 7,
    name: 'EA SPORTS FC 26',
    category: 'multi',
    featured: false,
    price: 400,
    currency: 'DA',
    gamesList: [],
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3405690/2d96aa1b06e453cd62dae9029d412f19e61932c3/header.jpg?t=1785772769',
    hero: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3405690/2d96aa1b06e453cd62dae9029d412f19e61932c3/header.jpg?t=1785772769',
    icon: 'fa-solid fa-trophy',
    accent: '#eab308',
    developer: 'EA Canada , EA Romania',
    publisher: 'Electronic Arts',
    release: '2025-09-25',
    tags: ['كرة قدم', 'رياضية', 'أونلاين', 'محاكاة', 'بطولات'],
    shortDescription: 'أحدث إصدار 2025 — بطولة كأس عالم بأسلوب كامل و 48 منتخباً.',
    description: [
      'EA SPORTS FC 26 يجلب البطولات الدولية الكبرى إلى ستيم — طور بطولة دولية جديد بمنافسات 48 منتخباً محاكاة كاملة، مع Manager Career محسّن عبر تحديات حية (Live Challenges) يواكب فيها موسمك الكروي الحقيقي.',
      'طور Player Career يضم أساطير دولية (ICONs) و Heroes يمكنك اللعب معهم وضدهم، مع رسومات Frostbite محدثة ووضع Rush 5v5 المحبوب من FC 25.'
    ],
    features: [
      'طور بطولة دولية بمنافسات 48 منتخباً',
      'Manager Live Challenges تحديات حية مستمرة',
      'Player Career مع ICONs و Heroes دوليين',
      'وضع Rush 5v5 للعب الجماعي',
      'Ultimate Team و Clubs بالكامل',
      'رسومات محسّنة بمحرك Frostbite',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 10 64-bit', cpu: 'Intel Core i5 6600K / AMD Ryzen 5 1600', ram: '8GB RAM', gpu: 'NVIDIA GTX 1050 Ti / AMD RX 570', storage: '100GB مساحة خالية', directx: 'DirectX 12' },
      rec: { label: 'الموصى بها', os: 'Windows 10/11 64-bit', cpu: 'Intel Core i7 9700K / AMD Ryzen 5 3600', ram: '16GB RAM', gpu: 'NVIDIA RTX 2070 / AMD RX 5700 XT', storage: '100GB مساحة خالية (SSD)', directx: 'DirectX 12' }
    }
  },
  {
    id: 8,
    name: 'Cyberpunk 2077',
    category: 'AAA',
    featured: false,
    price: 300,
    currency: 'DA',
    gamesList: [],
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg',
    hero: 'https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg',
    icon: 'fa-solid fa-city',
    accent: '#f43f5e',
    developer: 'CD PROJEKT RED',
    publisher: 'CD PROJEKT RED',
    release: '2020-12-10',
    tags: ['RPG', 'عالم مفتوح', 'مستقبلي', 'قصة', 'سايبربانك'],
    shortDescription: 'نيو سيتي في انتظارك — RPG ضخم من CD Projekt RED بعالم مستقبلي.',
    description: [
      'Cyberpunk 2077 هي ملحمة RPG من عيار ثقيل تدور أحداثها في نايت سيتي — ميجابوليس مستقبلية مليئة بالفرص والخطر. أنت V، مرتزق يسعى لتحقيق الشهرة ويجد نفسه أمام سر يصنع مصير كل من في المدينة.',
      'اختر خلفية قصتك (Street Kid / Nomad / Corpo)، طوّر شخصيتك بالمهارات والزرع الإلكتروني (Cyberware)، وحارب الشبكات العملاقة في أكثر الألعاب تفصيلاً في النوع. سارع الآن فاللعبة واحدة من أعظم RPG في العصر.'
    ],
    features: [
      'عالم مفتوح ضخم — نايت سيتي بحيوية كاملة',
      'قصة فرعية متعددة النهايات',
      'نظام Cyberware وأسلحة متطور',
      'تحديث 2.0 + توسعة Phantom Liberty متكاملة',
      'نظام طرق لعب مرن (جاسوسية، قتال، قرصنة)',
      'تقنية Ray Tracing و DLSS على الـ PC',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 10 64-bit', cpu: 'Intel Core i5-3570K / AMD FX-8310', ram: '8GB RAM', gpu: 'NVIDIA GTX 970 / AMD RX 470', storage: '70GB مساحة خالية (SSD)', directx: 'DirectX 12' },
      rec: { label: 'الموصى بها', os: 'Windows 10/11 64-bit', cpu: 'Intel Core i7-4790 / AMD Ryzen 5 3600', ram: '16GB RAM', gpu: 'NVIDIA RTX 2060 / AMD RX 5700 XT', storage: '70GB مساحة خالية (SSD)', directx: 'DirectX 12' }
    }
  },
  {
    id: 9,
    name: 'The Witcher 3: Wild Hunt',
    category: 'AAA',
    featured: false,
    price: 300,
    currency: 'DA',
    gamesList: [],
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/292030/capsule_616x353.jpg',
    hero: 'https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg',
    icon: 'fa-solid fa-swords',
    accent: '#6366f1',
    developer: 'CD PROJEKT RED',
    publisher: 'CD PROJEKT RED',
    release: '2015-05-19',
    tags: ['RPG', 'عالم مفتوح', 'فانتازيا', 'قصة', 'مغامرات'],
    shortDescription: 'تحفة RPG الحائزة على جوائز — مغامرات جيرالت من ريفيا بكل توسعاتها.',
    description: [
      'The Witcher 3: Wild Hunt هي اللعبة التي أعادت تعريف ألعاب RPG — عالم مفتوح ساحر، قصة عميقة، واختيارات تحمل عواقب حقيقية. تلعب بدور جيرالت من ريفيا، الصياد المحترف للوحوش، في رحلة البحث عن ابنته.',
      'النسخة كاملة تشمل التوسعات الضخمة Hearts of Stone و Blood and Wine، مع تحديث Next-Gen للرسومات على الـ PC. مئات الساعات من المحتوى في واحدة من أعظم الألعاب على الإطلاق.'
    ],
    features: [
      'قصة مذهلة متفرعة باختيارات مؤثرة',
      'توسعتا Hearts of Stone و Blood and Wine كاملتان',
      'تحديث Next-Gen بالرسومات المحسّنة',
      'عالم مفتوح مليان بكويستات جانبية فريدة',
      'نظام علامات وسوائل (Signs & Potions)',
      'ثلاثون+ ساعة من المحتوى لكل توسعة',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 10/11 64-bit', cpu: 'Intel Core i5-2500K / AMD FX-8120', ram: '6GB RAM', gpu: 'NVIDIA GTX 660 / AMD HD 7870', storage: '35GB مساحة خالية', directx: 'DirectX 11' },
      rec: { label: 'الموصى بها', os: 'Windows 10/11 64-bit', cpu: 'Intel Core i7-3770 / AMD FX-8350', ram: '8GB RAM', gpu: 'NVIDIA GTX 770 / AMD R9 290', storage: '35GB مساحة خالية', directx: 'DirectX 11' }
    }
  },
  {
    id: 10,
    name: 'Euro Truck Simulator 2',
    category: 'multi',
    featured: false,
    price: 100,
    currency: 'DA',
    gamesList: [],
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/227300/capsule_616x353.jpg',
    hero: 'https://cdn.akamai.steamstatic.com/steam/apps/227300/header.jpg',
    icon: 'fa-solid fa-truck',
    accent: '#38bdf8',
    developer: 'SCS Software',
    publisher: 'SCS Software',
    release: '2012-10-19',
    tags: ['محاكاة', 'شاحنات', 'قيادة', 'عالم مفتوح', 'استرخاء'],
    shortDescription: 'عيش حياة سائق الشاحنات في أوروبا — محاكاة مريحة ومسببة للإدمان.',
    description: [
      'Euro Truck Simulator 2 هي المحاكاة الأشهر لعالم الشاحنات في أوروبا — قد السيارة عبر قيادة مريحة في طرقات حقيقية، انقل البضائع بين المدن، طوّر شركتك الخاصة ووسّع أسطولك مع موظفين ومرائب.',
      'مع دعم التعديلات الواسع ومجتمع ضخم، اللعبة تعتبر من أنجح ألعاب المحاكاة على الإطلاق — تجربة مريحة وقانعة لا تغني عما تستحقه.'
    ],
    features: [
      'قيادة شاحنات مرخصة بالكامل (Volvo, Scania, MAN…)',
      'خريطة أوروبا بتفاصيل واسعة',
      'نظام شركة وعمال وأسطول ذاتي الإدارة',
      'دعم كامل للتعديلات وكروبات TruckersMP',
      'تنوع بضائع وحمولات لا ينتهي',
      'مشاهد طبيعية ومدن حقيقية متقنة',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 10/11 64-bit', cpu: 'Dual Core 2.4GHz', ram: '4GB RAM', gpu: 'NVIDIA GeForce GTS 450 / AMD HD 6670', storage: '25GB مساحة خالية', directx: 'DirectX 11' },
      rec: { label: 'الموصى بها', os: 'Windows 10/11 64-bit', cpu: 'Quad Core 3.0GHz', ram: '8GB RAM', gpu: 'NVIDIA GTX 1060 / AMD RX 580', storage: '25GB مساحة خالية (SSD)', directx: 'DirectX 11' }
    }
  },
  {
    id: 11,
    name: 'ARC Raiders',
    category: 'multi',
    featured: false,
    price: 300,
    currency: 'DA',
    gamesList: [],
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/1808500/capsule_616x353.jpg',
    hero: 'https://cdn.akamai.steamstatic.com/steam/apps/1808500/header.jpg',
    icon: 'fa-solid fa-crosshairs',
    accent: '#22d3ee',
    developer: 'Embark Studios',
    publisher: 'Embark Studios',
    release: '2025-10-30',
    tags: ['استخراج', 'تكتيكي', 'أونلاين', 'تعاوني', 'مستقبلي'],
    shortDescription: 'لعبة استخراج تعاونية قاتلة من Embark — واجه تهديد ARC الآلي مع فريقك.',
    description: [
      'ARC Raiders هي لعبة استخراج (Extraction Shooter) تعاونية من Embark Studios — أنت رايدر مخضرم يخوض غارات محفوفة بالمخاطر في عالم خراب حيث تنتشر الآلات الميكانيكية القاتلة (ARC) التي يتحكم فيها الذكاء الاصطناعي.',
      'لعب PvPvE مع فرق صغيرة: سلّح نفسك، انهب الموارد، وأنجِ بقاءك للخروج حياً بما جمعت — قرارات كل غارة تحدد ما تكسبه أو تتركه وراءك. رسومات الجيل الجديد وحركة مليئة بالتوتر الشديد.'
    ],
    features: [
      'طور استخراج PvPvE تنافسي وتكتيكي',
      'غارات تعاونية مع الأصدقاء حتى 3 لاعبين',
      'تهديدات ARC الميكانيكية الذكية',
      'نظام أسلحة وترقيات عميق',
      'عالم بعمق وحياة ومخاطر متغيرة',
      'طور ترتيب عالمي وموسمي',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 10 64-bit', cpu: 'Intel Core i5-8600K / AMD Ryzen 5 2600X', ram: '16GB RAM', gpu: 'NVIDIA GTX 1080 / AMD RX 6600 XT', storage: '35GB مساحة خالية (SSD)', directx: 'DirectX 12' },
      rec: { label: 'الموصى بها', os: 'Windows 10/11 64-bit', cpu: 'Intel Core i7-10700K / AMD Ryzen 7 5800X', ram: '32GB RAM', gpu: 'NVIDIA RTX 3080 / AMD RX 6800 XT', storage: '35GB مساحة خالية (SSD)', directx: 'DirectX 12' }
    }
  },
  {
    id: 12,
    name: 'Forza Horizon 6',
    category: 'AAA',
    featured: false,
    price: 400,
    currency: 'DA',
    gamesList: [],
    image: '/img/fh6.jpg',
    hero: '/img/fh6.jpg',
    icon: 'fa-solid fa-mountain-sun',
    accent: '#e11d48',
    developer: 'Playground Games',
    publisher: 'Xbox Game Studios',
    release: '2026-05-19',
    tags: ['سباقات', 'عالم مفتوح', 'اليابان', 'سيارات', 'أونلاين'],
    shortDescription: 'أحدث إصدار المفاجأة — اليابان بأكملها، أكبر عالم مفتوح في تاريخ اللعبة.',
    description: [
      'Forza Horizon 6 انطلق في مايو 2026 ويأخذك إلى اليابان — أكبر مغامرة سباقات عالم مفتوح في تاريخ اللعبة. من طوكيو المزدحمة إلى جبال الألب اليابانية، اكتشف المناظر الخلابة حول 7 مناطق خرائط و 74 مقاطعة بتفاصيل لا تصدق.',
      'أكثر من 550 سيارة مرخصة من أشهر العلامات، مهرجان Horizon يعود بحجم أكبر، مع دعم Ray Tracing و Cross-play بين Steam و Xbox وأداء مثالي على Steam Deck.'
    ],
    features: [
      'أكبر عالم مفتوح في تاريخ Forza Horizon — اليابان',
      '+550 سيارة مرخصة من 71 مُصنّعاً',
      '7 مناطق خرائط و 74 مقاطعة قابلة للاستكشاف',
      'دعم Ray Tracing و Steam Deck Verified',
      'Cross-play كامل مع Xbox والـ PC',
      'طور Horizon Festival الموسمي وألعاب مصغرة',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 10 22H2 64-bit أو أحدث', cpu: 'Intel Core i5-8400 / AMD Ryzen 5 1600', ram: '16GB RAM', gpu: 'NVIDIA GTX 1650 / AMD RX 6500 XT / Intel Arc A380', storage: '167GB مساحة خالية (SSD)', directx: 'DirectX 12' },
      rec: { label: 'الموصى بها', os: 'Windows 10 22H2 64-bit أو أحدث', cpu: 'Intel Core i5-12400F / AMD Ryzen 5 5600X', ram: '16GB RAM', gpu: 'NVIDIA RTX 3060 Ti / AMD RX 6700 XT / Intel Arc A580', storage: '167GB مساحة خالية (SSD)', directx: 'DirectX 12' }
    }
  },
  {
    id: 13,
    name: 'Forza Horizon 4',
    category: 'AAA',
    featured: false,
    price: 300,
    currency: 'DA',
    gamesList: [],
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/1293830/capsule_616x353.jpg',
    hero: 'https://cdn.akamai.steamstatic.com/steam/apps/1293830/header.jpg',
    icon: 'fa-solid fa-snowflake',
    accent: '#3b82f6',
    developer: 'Playground Games',
    publisher: 'Xbox Game Studios',
    release: '2021-03-09',
    tags: ['سباقات', 'عالم مفتوح', 'فصول السنة', 'بريطانيا', 'أونلاين'],
    shortDescription: 'الفصول الأربعة تتحول بمرور الوقت — البحث عن الكنز في بريطانيا الأشهر.',
    description: [
      'Forza Horizon 4 تقيم مهرجان Horizon في بريطانيا — عالم مفتوح تتغير فيه الفصول الأربعة أسبوعياً ومعه تتغير الطرق والطقس والمناظر. شبابيك مغلقة، جليد، أوراق خريفية ترقص في الريح، وليالٍ صيفية طويلة.',
      'أكثر من 700 مركبة مرخصة تشمل السيارات الكلاسيكية والحديثة، مع طور الأونلاين المشترك والمواسم الأسبوعية التي تجلب تحديات وجوائز متجددة. اللعبة حُذفت من المتجر رسمياً — الحسابات المتوفرة محدودة القيمة الغالية.'
    ],
    features: [
      'فصول السنة الأربعة المتغيرة ديناميكياً',
      '+700 سيارة مرخصة بطرازاتها المختلفة',
      'بريطانيا الكاملة: مواسم تتحول مع الزمن',
      'تحديات أسبوعية وجوائز موسمية',
      'طور الأونلاين المشترك مع الأصدقاء',
      'محذوفة من المتجر رسمياً — كمية محدودة',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 10 64-bit', cpu: 'Intel Core i3-4170 / AMD FX 6300', ram: '8GB RAM', gpu: 'NVIDIA GTX 650 Ti / AMD R7 250X', storage: '80GB مساحة خالية', directx: 'DirectX 12' },
      rec: { label: 'الموصى بها', os: 'Windows 10 64-bit', cpu: 'Intel Core i7-3820 / AMD Ryzen 7 1700', ram: '12GB RAM', gpu: 'NVIDIA GTX 970 / AMD RX 570', storage: '80GB مساحة خالية', directx: 'DirectX 12' }
    }
  },
  {
    id: 14,
    name: 'Crimson Desert',
    category: 'AAA',
    featured: false,
    price: 400,
    currency: 'DA',
    gamesList: [],
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3321460/abd7dbdeaede8b6c9a6d40bf116ff2b883f2dd45/header.jpg?t=1781661893',
    hero: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3321460/abd7dbdeaede8b6c9a6d40bf116ff2b883f2dd45/header.jpg?t=1781661893',
    icon: 'fa-solid fa-fire',
    accent: '#a855f7',
    developer: 'Pearl Abyss',
    publisher: 'Pearl Abyss',
    release: '2026-03-19',
    tags: ['عالم مفتوح', 'أكشن', 'مغامرات', 'فانتازيا', 'قصة'],
    shortDescription: 'ملحمة Pearl Abyss المنتظرة — قارة Pywel الشاسعة وقصة كليف الموسمية.',
    description: [
      'Crimson Desert هي مغامرة الأكشن المفتوحة الضخمة من Pearl Abyss — عالم Pywel يزيد ضعف عالم Skyrim، بلا شاشات تحميل، حيث تقود عصابة Greymane للنهوض من جديد في أرض قاسية وجميلة في آن واحد.',
      'انضم إلى كليف في رحلة إعادة بناء فصيل Greymane وإنقاذ الأرض من الظلام. قتال وحشي ومتقن يجمع السيوف والصد والإمساك بقوى الهوة، مع زجاجات خيول ومطاردات وتجوال عمودي حر في كل اتجاه.'
    ],
    features: [
      'أكبر عالم مفتوح بلا شاشات تحميل (Pywel كاملة)',
      'قصة كليف وإعادة بناء فصيل Greymane',
      'قتال متقن: سيوف، صدود، رمي، وقوى الهوة',
      'محرك BlackSpace الملكي برسومات خرافية',
      'ركوب الخيل والطيران والتسلق الحر',
      'ست درجات من التعقيد — مهمات ومواجهات متعددة',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 10 64-bit', cpu: 'Intel Core i5-8500 / AMD Ryzen 5 2600X', ram: '16GB RAM', gpu: 'NVIDIA GTX 1060 / AMD RX 5500 XT', storage: '150GB مساحة خالية (SSD)', directx: 'DirectX 12' },
      rec: { label: 'الموصى بها', os: 'Windows 10/11 64-bit', cpu: 'Intel Core i5-11600K / AMD Ryzen 5 5600', ram: '16GB RAM', gpu: 'NVIDIA RTX 2080 / AMD RX 6700 XT', storage: '150GB مساحة خالية (SSD)', directx: 'DirectX 12' }
    }
  },
  {
    id: 15,
    name: 'Resident Evil Requiem',
    category: 'AAA',
    featured: false,
    price: 400,
    currency: 'DA',
    gamesList: [],
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3764200/ce5437442768e38eb575f205ab9397d0264017b0/header.jpg?t=1779840172',
    hero: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3764200/ce5437442768e38eb575f205ab9397d0264017b0/header.jpg?t=1779840172',
    icon: 'fa-solid fa-skull',
    accent: '#ef4444',
    developer: 'CAPCOM Co., Ltd.',
    publisher: 'CAPCOM Co., Ltd.',
    release: '2026-02-27',
    tags: ['رعب البقاء', 'زومبي', 'رعب', 'قصة', 'أكشن'],
    shortDescription: 'الجزء التاسع الرئيسي من سلسلة الرعب الشهيرة — العودة إلى Raccoon City.',
    description: [
      'Resident Evil Requiem هو الجزء الرئيسي التاسع من سلسلة الرعب الأسطورية من CAPCOM — قصة غريس آشكروفت في التحقيق في وفاة والدتها تتصادم مع مسار ليون إس كينيدي اللامع في العودة المشؤومة إلى Raccoon City حيث بدأ كل شيء.',
      'بأنوية RE ENGINE، تتنقل بحرية بين منظور الشخص الأول والثالث، وتواجه أهوال البقاء الكلاسيكية: إدارة الموارد، ألغاز محبوكة، ومواجهات بقلب ينبض بسرعة. اللعبة التي حصدت 4 جوائز في Gamescom 2025 وتقييمات تجاوزت 90 في Metacritic.'
    ],
    features: [
      'الجزء الرئيسي التاسع من سلسلة RE',
      'بطلا القصة: غريس آشكروفت و ليون إس كينيدي',
      'تبديل حر بين منظوري الشخص الأول والثالث',
      'العودة إلى Raccoon City ببيئة محبوكة',
      '4 جوائز في Gamescom 2025 وتقييم 92 Metacritic',
      'احتفالية الثلاثين عاماً للسلاسة — حصرياً بمحرك RE ENGINE',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 11 64-bit', cpu: 'Intel Core i5-8500 / AMD Ryzen 5 3500', ram: '16GB RAM', gpu: 'NVIDIA GTX 1660 6GB / AMD RX 5500 XT 8GB', storage: '~80GB مساحة خالية (SSD)', directx: 'DirectX 12' },
      rec: { label: 'الموصى بها', os: 'Windows 11 64-bit', cpu: 'Intel Core i7-8700 / AMD Ryzen 5 5500', ram: '16GB RAM', gpu: 'NVIDIA RTX 2060 Super 8GB / AMD RX 6600 8GB', storage: '~80GB مساحة خالية (SSD)', directx: 'DirectX 12' }
    }
  },
  {
    id: 16,
    name: "Marvel's Spider-Man 2",
    category: 'AAA',
    featured: false,
    price: 300,
    currency: 'DA',
    gamesList: [],
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2651280/cb8da9b3e99cf7362cd88c10a0544b7fe892ccad/capsule_616x353.jpg?t=1763569811',
    hero: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2651280/header.jpg?t=1763569811',
    icon: 'fa-solid fa-spider',
    accent: '#dc2626',
    developer: 'Insomniac Games , Nixxes Software',
    publisher: 'PlayStation Publishing LLC',
    release: '2025-01-30',
    tags: ['بطل خارق', 'عالم مفتوح', 'أكشن', 'مغامرات', 'قصة'],
    shortDescription: 'بيتر و مايلز في أخطر مغامراتهم — قوة السيمبيوت وعدو جديد في نيويورك.',
    description: [
      "Marvel's Spider-Man 2 تجمع بين بيتر باركر و مايلز موراليس في مواجهة التهديد الأخطر في تاريخ السلسلة — قوة السيمبيوت تصل ببيتر إلى حافة الهاوية، بينما يظهر فينوم وكريفن ذا هانتر بشراسة لم يسبق لها مثيل.",
      'نسخة الـ PC بتطوير Insomniac و Nixxes تقدم كل محتوى ما بعد الإطلاق: 14 بذلة جديدة، New Game+، أوضاع إضاءة جديدة، ودعم واسع للرسميات مع Ray Tracing محسّن على المستطاع.'
    ],
    features: [
      "بطلا الخارقان: بيتر باركر و مايلز موراليس",
      'قوى السيمبيوت و Web Wings للعبور السريع',
      'نيويورك الممتدة بحارات جديدة ومهام جانبية',
      'كل محتوى ما بعد الإطلاق + 14 بذلة إضافية',
      'Ray Tracing محسّن ودعم DLSS على الـ PC',
      'صور ونظام ترخيص Photo Mode متقدم',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 10/11 64-bit (1909 أو أحدث)', cpu: 'Intel Core i3-8100 / AMD Ryzen 3 3100', ram: '16GB RAM', gpu: 'NVIDIA GTX 1650 / AMD RX 5500 XT', storage: '140GB مساحة خالية (SSD)', directx: 'DirectX 12' },
      rec: { label: 'الموصى بها', os: 'Windows 10/11 64-bit (1909 أو أحدث)', cpu: 'Intel Core i5-8400 / AMD Ryzen 5 3600', ram: '16GB RAM', gpu: 'NVIDIA RTX 3060 / AMD RX 5700', storage: '140GB مساحة خالية (SSD)', directx: 'DirectX 12' }
    }
  },
  {
    id: 17,
    name: 'Black Myth: Wukong',
    category: 'AAA',
    featured: false,
    price: 300,
    currency: 'DA',
    gamesList: [],
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/2358720/capsule_616x353.jpg',
    hero: 'https://cdn.akamai.steamstatic.com/steam/apps/2358720/header.jpg',
    icon: 'fa-solid fa-cloud-bolt',
    accent: '#d97706',
    developer: 'Game Science',
    publisher: 'Game Science',
    release: '2024-08-20',
    tags: ['RPG', 'عالم مفتوح', 'أكشن', 'أساطير صينية', 'Souls-like'],
    shortDescription: 'مغامرة الملك القرد — ملحمة أكشن مستوحاة من رحلة إلى الغرب.',
    description: [
      'Black Myth: Wukong هي ملحمة الأكشن الأسطورية من Game Science المستوحاة من "رحلة إلى الغرب" — تلعب بملك القرد الذي لا يُهزمه سلاح، وتمضي عبر عوالم مليئة بالمعابد، الآلهة، والشياطين بإتقان بصري أخاذ.',
      'قتال مدروس بالعصا الذهبية، قدرات تحول تسمح لك بأن تصبح عدوّك وتستعمل قواه، وقصة عميقة عن الموت والخلود. نسخة الـ PC كاملة بالمحتوى والتحديثات.'
    ],
    features: [
      'عالم مغلق زاخر مستوحى من الأسطورة الصينية',
      'قتال بالعصا الذهبية + قدرات التحول',
      'أكثر من 80 زعيماً أسطورياً',
      'نظام مهارات متفرع بثلاث مدارس قتال',
      'رسومات مذهلة على محرك Unreal Engine 5',
      'قصة عاطفية عن الحب والموت والخلود',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 10 64-bit', cpu: 'Intel Core i5-8400 / AMD Ryzen 5 1600', ram: '16GB RAM', gpu: 'NVIDIA GTX 1060 6GB / AMD RX 580 8GB', storage: '130GB مساحة خالية (SSD)', directx: 'DirectX 11' },
      rec: { label: 'الموصى بها', os: 'Windows 10/11 64-bit', cpu: 'Intel Core i7-9700 / AMD Ryzen 5 5500', ram: '16GB RAM', gpu: 'NVIDIA RTX 2060 / AMD RX 5700 XT', storage: '130GB مساحة خالية (SSD)', directx: 'DirectX 12' }
    }
  },
  {
    id: 18,
    name: 'God of War Ragnarök',
    category: 'AAA',
    featured: false,
    price: 400,
    currency: 'DA',
    gamesList: [],
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/2322010/capsule_616x353.jpg',
    hero: 'https://cdn.akamai.steamstatic.com/steam/apps/2322010/header.jpg',
    icon: 'fa-solid fa-hammer',
    accent: '#0ea5e9',
    developer: 'SIE Santa Monica Studio , Jetpack Interactive',
    publisher: 'PlayStation Publishing LLC',
    release: '2024-09-19',
    tags: ['أكشن', 'مغامرات', 'قصة', 'أساطير إسكندنافية', 'RPG'],
    shortDescription: 'كريدوس و أتراوس في نهاية العالم الإسكندنافية — راجناروك حطت أخيراً.',
    description: [
      'God of War Ragnarök تواصل ملحمة كريدوس وأتراوس بعد أحداث 2018 — نهاية العالم الإسكندنافية قادمة، وعلى الأب والابن الاختيار بين واجباتهما الأولى. القصة التي ستحدد مصير الآلهة والبشر.',
      'نسخة الـ PC من Santa Monica و Jetpack تقدم محيطاً محسناً: DLSS و FSR، دعم شاشات عريضة وشاشات فائقة العرض، ومحتوى التحديثات كاملاً بما فيه Valhalla بعد الإطلاق.'
    ],
    features: [
      'قصة ضخمة بكل معنى الكلمة — نهاية راجناروك',
      'معارك بالفأس والرمح (ليفياتان + دراوبنير)',
      'أتراوس بأسلوب لعب مستقل خاص',
      '9 عوالم نوردية قابلة للاستكشاف',
      'توابع ومهمات جانبية أعمق من أي جزء سابق',
      'دعم Nvidia DLSS و AMD FSR على الـ PC',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 10 64-bit', cpu: 'Intel Core i5-4670K / AMD Ryzen 5 1500X', ram: '8GB RAM', gpu: 'NVIDIA GTX 1060 6GB / AMD RX 5500 XT', storage: '190GB مساحة خالية (HDD/SSD)', directx: 'DirectX 12' },
      rec: { label: 'الموصى بها', os: 'Windows 10/11 64-bit', cpu: 'Intel Core i5-8600 / AMD Ryzen 5 3600', ram: '16GB RAM', gpu: 'NVIDIA RTX 2060 Super / AMD RX 5700 XT', storage: '190GB مساحة خالية (SSD)', directx: 'DirectX 12' }
    }
  },
  {
    id: 19,
    name: 'Assetto Corsa',
    category: 'AAA',
    featured: false,
    price: 100,
    currency: 'DA',
    gamesList: [],
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/244210/capsule_616x353.jpg',
    hero: 'https://cdn.akamai.steamstatic.com/steam/apps/244210/header.jpg',
    icon: 'fa-solid fa-gauge-high',
    accent: '#fb923c',
    developer: 'Kunos Simulazioni',
    publisher: '505 Games',
    release: '2014-12-19',
    tags: ['محاكاة قيادة', 'سباقات', 'رياضة موتور', 'تعديلات', 'حقيقية'],
    shortDescription: 'معيار محاكاة القيادة — فيزياء حقيقية، حلبات ممسوحة بالليزر، وتعديلات لا تنتهي.',
    description: [
      'Assetto Corsa من Kunos Simulazioni هي معيار الذهب في محاكاة القيادة على الـ PC — فيزياء إطارات وديناميكا مركبات مبنية على بيانات حقيقية، وحلبات ممسوحة بالليزر تعيد إنتاج كل تفصيلة في الأرضية.',
      'النسخة الأساسية تشمل مجموعة سيارات محترمة وبيئة مثالية للتعديلات: محتوى من المجتمع يضاعف اللعبة مئات المرات — سيارات وحلبات ومودات فيزياء ورسوميات، مع دعم كامل للعجلات VR.'
    ],
    features: [
      'فيزياء قيادة صارمة تابعة للمجتمع المحترف',
      'حلبات ممسوحة بالليزر بدقة عالية',
      'دعم كامل للتعديلات ومحتوى المجتمع',
      'دعم VR (Oculus و SteamVR)',
      'طور Practice و Quick Race و Custom Championship',
      'الرمان الأساسي للنشاطات التنافسية على الـ PC',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 7 SP1 64-bit أو أحدث', cpu: 'Intel Core i5-9400 / AMD Phenom II X6 1100T', ram: '6GB RAM', gpu: 'NVIDIA GTX 460 / AMD HD 5850', storage: '15GB مساحة خالية', directx: 'DirectX 11' },
      rec: { label: 'الموصى بها', os: 'Windows 10/11 64-bit', cpu: 'Intel Core i5-4460 أو أفضل', ram: '8GB RAM', gpu: 'NVIDIA GTX 980 / AMD R9 390', storage: '15GB مساحة خالية', directx: 'DirectX 11' }
    }
  },
  {
    id: 20,
    name: 'The Last of Us Part I',
    category: 'AAA',
    featured: false,
    price: 200,
    currency: 'DA',
    gamesList: [],
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/1888930/capsule_616x353.jpg',
    hero: 'https://cdn.akamai.steamstatic.com/steam/apps/1888930/header.jpg',
    icon: 'fa-solid fa-biohazard',
    accent: '#10b981',
    developer: 'Naughty Dog LLC , Iron Galaxy Studios',
    publisher: 'PlayStation Publishing LLC',
    release: '2023-03-28',
    tags: ['نهاية العالم', 'قصة', 'بقاء', 'أكشن', 'دراما'],
    shortDescription: 'الملحمة التي أعادت تعريف السرد في الألعاب — رحلة جويل و إيلي من البداية.',
    description: [
      'The Last of Us Part I هي النسخة المعدلة بالكامل من اللعبة التي غيرت مفهوم السرد في الألعاب — رحلة جويل وإيلي عبر أمريكا ما بعد الوباء، حيث أصعب البشرية لا أنواعها: الموتى والزومبي هم فقط البداية.',
      'أعيد بناؤها بمحرك الجيل الأخير مع رسومات وإضاءة جديدة كلياً، وأداء صوتي وحساسية تجربة لمسية على الـ PC، بالإضافة إلى DLC Left Behind المتضمنة ليكتمل الخبر.'
    ],
    features: [
      'قصة إنسانية عميقة تعيد تعريف البطولية',
      'إعادة بناء كاملة بمحرك أحدث',
      'DLC Left Behind متضمنة بالكامل',
      'دعم Nvidia DLSS و AMD FSR و Reflex',
      'ميزات إتاحة مدمجة (Subtitles، سرد صوتي…)',
      'طور Photo Mode و درجات لون متعددة',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 10 64-bit', cpu: 'Intel Core i5-7600K / AMD Ryzen 5 1600', ram: '16GB RAM', gpu: 'NVIDIA GTX 970 4GB / AMD RX 570 4GB', storage: '100GB مساحة خالية (SSD)', directx: 'DirectX 12' },
      rec: { label: 'الموصى بها', os: 'Windows 10/11 64-bit', cpu: 'Intel Core i7-8700 / AMD Ryzen 7 3700X', ram: '16GB RAM', gpu: 'NVIDIA RTX 3060 / AMD RX 5800 XT', storage: '100GB مساحة خالية (SSD)', directx: 'DirectX 12' }
    }
  },
  {
    id: 21,
    name: 'The Last of Us Part II',
    category: 'AAA',
    featured: false,
    price: 300,
    currency: 'DA',
    gamesList: [],
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2531310/header.jpg?t=1750959180',
    hero: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2531310/header.jpg?t=1750959180',
    icon: 'fa-solid fa-hand-fist',
    accent: '#14b8a6',
    developer: 'Naughty Dog LLC , Nixxes Software , Iron Galaxy Studios',
    publisher: 'PlayStation Publishing LLC',
    release: '2025-04-03',
    tags: ['نهاية العالم', 'قصة', 'بقاء', 'أكشن', 'دراما'],
    shortDescription: 'أكبر قصة انتقام في الألعاب — إلي و آبي في مغامرة لا تُنسى.',
    description: [
      'The Last of Us Part II Remastered هي التكملة الحائزة على أكثر من 300 جائزة لعبة العام — قصة إلي وآبي المتشابكة تتكشف في سياتل وما وراءها، بينما يدفع الانتقام الجميع ثمناً باهظاً.',
      'النسخة المعدلة للـ PC من Naughty Dog و Nixxes تضيف طور No Return الناجي المتجدد، مستويات Lost Levels المفقودة بتعليقات المطورين، ووضع Guitar Free Play — كلها بتحسينات رسومية للـ PC.'
    ],
    features: [
      'قصة إلي و آبي بمنظوري لعب متكاملين',
      'طور No Return للبقاء والأسلوب roguelike',
      'Lost Levels — مستويات محذوفة بتعليق المطورين',
      'وضع Guitar Free Play الحر',
      'تحسينات PC: DLSS 3، FSR، شاشات عريضة',
      'أكثر من 300 جائزة لعبة العام',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 10 64-bit', cpu: 'Intel Core i5-8600 / AMD Ryzen 5 3600', ram: '16GB RAM', gpu: 'NVIDIA GTX 970 4GB / AMD RX 570 4GB', storage: '100GB مساحة خالية (SSD)', directx: 'DirectX 12' },
      rec: { label: 'الموصى بها', os: 'Windows 10/11 64-bit', cpu: 'Intel Core i5-9600 / AMD Ryzen 5 3600', ram: '16GB RAM', gpu: 'NVIDIA RTX 2070 Super / AMD RX 5700 XT', storage: '100GB مساحة خالية (SSD)', directx: 'DirectX 12' }
    }
  },
  {
    id: 22,
    name: 'Ghost of Tsushima',
    category: 'AAA',
    featured: false,
    price: 400,
    currency: 'DA',
    gamesList: [],
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/2215430/capsule_616x353.jpg',
    hero: 'https://cdn.akamai.steamstatic.com/steam/apps/2215430/header.jpg',
    icon: 'fa-solid fa-mountain',
    accent: '#db2777',
    developer: 'Sucker Punch Productions , Nixxes Software',
    publisher: 'PlayStation Publishing LLC',
    release: '2024-05-16',
    tags: ['عالم مفتوح', 'ساموراي', 'قصة', 'مغامرات', 'اليابان'],
    shortDescription: 'جين ساكاي في جزيرة تسوشيما — ملحمة ساموراي بشروح الحقبة المغولية.',
    description: [
      'Ghost of Tsushima DIRECTOR\'S CUT تضعك مكان جين ساكاي، آخر ساموراي قلعة تسوشيما عام 1274 أثناء الغزو المغولي الأول لليابان. بين شرف الساموراي وضرورة الفوز، يُولد طيف (Ghost) يحارب بالظل كما بالخنجر.',
      'النسخة المعدلة تشمل توسعة Iki Island كاملة وطور Legends التعاوني، مع ضبط الـ PC من Nixxes: DLSS 3 و FSR 3 وأنماط ألوان سينمائية ودعم شاشات عريضة.'
    ],
    features: [
      'عالم تسوشيما مفتوح بالعمق — الرياح تقود الطريق',
      'نظام قتال ساموراي دقيق (Stances)',
      'توسعة Iki Island كاملة مفصلة',
      'طور Legends التعاوني بـ 4 لاعبين',
      'سلوك بطل الشروق (Ghost) يغير العالم',
      'دعم Nixxes: DLSS 3, FSR 3, شاشات عريضة',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 10 64-bit', cpu: 'Intel Core i3-7100 / AMD Ryzen 3 1200', ram: '8GB RAM', gpu: 'NVIDIA GTX 960 4GB / AMD RX 560 4GB', storage: '75GB مساحة خالية (HDD)', directx: 'DirectX 12' },
      rec: { label: 'الموصى بها', os: 'Windows 10/11 64-bit', cpu: 'Intel Core i5-8600 / AMD Ryzen 5 3600', ram: '16GB RAM', gpu: 'NVIDIA RTX 2060 / AMD RX 5600 XT', storage: '75GB مساحة خالية (SSD)', directx: 'DirectX 12' }
    }
  },
  {
    id: 23,
    name: 'Far Cry 5',
    category: 'AAA',
    featured: false,
    price: 200,
    currency: 'DA',
    gamesList: [],
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/552520/capsule_616x353.jpg',
    hero: 'https://cdn.akamai.steamstatic.com/steam/apps/552520/header.jpg',
    icon: 'fa-solid fa-paw',
    accent: '#06b6d4',
    developer: 'Ubisoft Montreal , Red Storm , Ubisoft Shanghai , Ubisoft Toronto , Ubisoft Kiev',
    publisher: 'Ubisoft',
    release: '2018-03-27',
    tags: ['عالم مفتوح', 'إطلاق نار', 'أكشن', 'مغامرات', 'مونتانا'],
    shortDescription: 'هوب كاونتي ومونتاني — طائفة Eden\'s Gate أخذت الحرية، خذها أنت رداً.',
    description: [
      'Far Cry 5 تنقلك إلى Hope County في مونتانا، حيث تسيطر طائفة Eden\'s Gate وزعيمها جوزيف سيد على المنطقة بمزيج من المكر والعنف. دورك كنائب شريف أن تحرر المقاطعة — بكل الطرق.',
      'طور Arcade يسمح بصناعة وتجربة خرائط من المجتمع، تعاون كامل عبر الأونلاين مع صديق، وتفاعل حي مع البرية: صيد، تعدين، وحلفاء حيوانات.'
    ],
    features: [
      'عالم مفتوح في مونتانا بتفاصيل غنية',
      'طور Arcade لمحرر الخرائط المخصص',
      'تعاون أونلاين كامل طوال الحملة',
      'أعداء وزعماء الطائفة الهادفون (Seeds)',
      'حيوانات، صيد، ومركبات برية وجوية',
      'قصة متشعبة حسب مسارك',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 7 SP1 64-bit', cpu: 'Intel Core i5-2400 / AMD FX-6300', ram: '8GB RAM', gpu: 'NVIDIA GTX 660 / AMD HD 7850', storage: '40GB مساحة خالية', directx: 'DirectX 11' },
      rec: { label: 'الموصى بها', os: 'Windows 10 64-bit', cpu: 'Intel Core i7-4770 / AMD Ryzen 5 1600', ram: '8GB RAM (16GB موصى)', gpu: 'NVIDIA GTX 970 / AMD RX 480', storage: '40GB مساحة خالية', directx: 'DirectX 11' }
    }
  },
  {
    id: 24,
    name: 'Horizon Zero Dawn',
    category: 'AAA',
    featured: false,
    price: 200,
    currency: 'DA',
    gamesList: [],
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/1151640/capsule_616x353.jpg',
    hero: 'https://cdn.akamai.steamstatic.com/steam/apps/1151640/header.jpg',
    icon: 'fa-solid fa-robot',
    accent: '#65a30d',
    developer: 'Guerrilla',
    publisher: 'PlayStation Publishing LLC',
    release: '2020-08-07',
    tags: ['عالم مفتوح', 'مغامرات', 'ماكينات', 'قصة', 'RPG'],
    shortDescription: 'ألوي في عالم مهجور تسكنه آلات هائلة — وعد جذاب كلياً.',
    description: [
      'Horizon Zero Dawn Complete Edition تجسد رؤية Guerrilla — عالم ما بعد الكارثة حيث الطبيعة استعادت الأرض وتحكمها مخلوقات حديدية هائلة. أنت ألوي، صيادة شابة تسعى لكشف سر الماضي الذي شكّل هذا العالم.',
      'النسخة الكاملة تشمل توسعة The Frozen Wilds وجميع التحسينات على الـ PC: فتح معدل الإطارات، دعم الشاشات العريضة، وترقيات الرسوميات الكاملة.'
    ],
    features: [
      'عالم مفتوح شاسع مع آلات ضخمة متفاعلة',
      'توسعة The Frozen Wilds متضمنة',
      'نظام صيد آلات بتخطيط مستويات',
      'شجرة مهارات عميقة ومعدات قابلة للتخصيص',
      'قصة تتكشف بالتدريج عن انهيار الحضارة',
      'إصدار الكمبيوتر بفتح FPS وترقيات رسوميات',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 10 64-bit', cpu: 'Intel Core i5-2500K / AMD FX 6300', ram: '8GB RAM', gpu: 'NVIDIA GTX 780 / AMD RX 290', storage: '70GB مساحة خالية', directx: 'DirectX 12' },
      rec: { label: 'الموصى بها', os: 'Windows 10/11 64-bit', cpu: 'Intel Core i7-4770K / AMD Ryzen 5 1500X', ram: '16GB RAM', gpu: 'NVIDIA GTX 1060 / AMD RX 580', storage: '70GB مساحة خالية (SSD)', directx: 'DirectX 12' }
    }
  },
  {
    id: 25,
    name: 'Uncharted: Legacy of Thieves',
    category: 'AAA',
    featured: false,
    price: 300,
    currency: 'DA',
    gamesList: [],
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/1659420/capsule_616x353.jpg',
    hero: 'https://cdn.akamai.steamstatic.com/steam/apps/1659420/header.jpg',
    icon: 'fa-solid fa-compass',
    accent: '#9a3412',
    developer: 'Naughty Dog LLC , Iron Galaxy Studios',
    publisher: 'PlayStation Publishing LLC',
    release: '2022-10-19',
    tags: ['مغامرات', 'أكشن', 'قصة', 'منصات', 'تصويب'],
    shortDescription: 'ناثان دريك وكلوي فريزر في مجموعتين أسطوريتين بمعالجة للكمبيوتر.',
    description: [
      'Uncharted: Legacy of Thieves Collection تجمع الموسمين الأخيرين من ملحمة ناثان دريك: A Thief\'s End و The Lost Legacy — مغامرات صيد كنوز متقنة بفيزياء قفز ومنصات تلهث قلبك، وقصة عاطفية تختتم رحلة دريك.',
      'النسخة للكمبيوتر من Iron Galaxy مع دعم DLSS و FSR وأزرار اللعب بالماوس ولوحة المفاتيح بشكل لائق، لتعيش التجربة السينمائية الكاملة.'
    ],
    features: [
      'لعبتان كاملتان بمجموعة واحدة: UC4 + Lost Legacy',
      'مغامرة تسلق وقفز ومنصات من أعلى مستوى',
      'قصة ناثان دريك الختامية العاطفية',
      'دعم DLSS و FSR على الـ PC',
      'طور Photo Mode وميزات سينمائية',
      'تفاصيل بيئية تنبض بأطلال تخفي أسراراً',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 10 64-bit', cpu: 'Intel Core i5-4330 / AMD Ryzen 5 1500X', ram: '8GB RAM', gpu: 'NVIDIA GTX 960 / AMD RX 470', storage: '126GB مساحة خالية (SSD)', directx: 'DirectX 12' },
      rec: { label: 'الموصى بها', os: 'Windows 10/11 64-bit', cpu: 'Intel Core i7-7700K / AMD Ryzen 7 3700X', ram: '16GB RAM', gpu: 'NVIDIA GTX 1070 / AMD RX 5700', storage: '126GB مساحة خالية (SSD)', directx: 'DirectX 12' }
    }
  },
  {
    id: 26,
    name: 'PRAGMATA',
    category: 'AAA',
    featured: false,
    price: 300,
    currency: 'DA',
    gamesList: [],
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3357650/341da3fa5338fad44ae87b2d14edfe6be80ff4c3/capsule_616x353.jpg?t=1777351016',
    hero: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3357650/e32e168b25ed68a0cf6264c220c07e96c2abfb56/header.jpg?t=1777351016',
    icon: 'fa-solid fa-moon',
    accent: '#4f46e5',
    developer: 'CAPCOM Co., Ltd.',
    publisher: 'CAPCOM Co., Ltd.',
    release: '2026-04-17',
    tags: ['خيال علمي', 'مغامرات', 'أكشن', 'ألغاز', 'قمر'],
    shortDescription: 'مغامرة Capcom الجديدة على سطح القمر — هيو و الروبوتة ديانا في مواجهة الذكاء الاصطناعي المارق.',
    description: [
      'PRAGMATA هو عنوان Capcom الجديد كلياً: مغامرة أكشن خيال علمي تجري على منشأة قمرية سيطر عليها ذكاء اصطناعي مارق. أنت هيو، عضو فريق تحقيق منحوس، مع الروبوتة الصغيرة ديانا — رحلة عودة إلى الأرض وسط جاذبية منخفضة وخطر مرعب.',
      'قتال منظوري من الطرف الثالث مع إدارة الجاذبية والعناطس، ألغاز قرصنة تختبر عقلك بدل الحظ، ومأوى (Shelter) قابلاً للتطوير. حصدت اللعبة مراجعات إيجابية بالجملة منذ إطلاقها في أبريل 2026.'
    ],
    features: [
      'قصة على القمر — عالَم منخفض الجاذبية متقن',
      'شخصيتان: هيو بالعناطس والمقذوفات + ديانا للقرصنة',
      'ألغاز قرصنة حية واحدة تلو الأخرى',
      'مأوى Shelter قابل للتطوير وطابعة أسلحة',
      'رسومات RE ENGINE بتوهج قمري ساحر',
      'مشاهد سينمائية وأجواء رعب هادئ',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 11 64-bit', cpu: 'Intel Core i5-8500 / AMD Ryzen 5 3500', ram: '16GB RAM', gpu: 'NVIDIA GTX 1660 6GB / AMD RX 5500 XT 8GB', storage: '40GB مساحة خالية (SSD)', directx: 'DirectX 12' },
      rec: { label: 'الموصى بها', os: 'Windows 11 64-bit', cpu: 'Intel Core i7-8700 / AMD Ryzen 5 5500', ram: '16GB RAM', gpu: 'NVIDIA RTX 2060 Super 8GB / AMD RX 6600 8GB', storage: '40GB مساحة خالية (SSD)', directx: 'DirectX 12' }
    }
  },
  {
    id: 27,
    name: 'Resident Evil 4',
    category: 'AAA',
    featured: false,
    price: 300,
    currency: 'DA',
    gamesList: [],
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/2050650/capsule_616x353.jpg',
    hero: 'https://cdn.akamai.steamstatic.com/steam/apps/2050650/header.jpg',
    icon: 'fa-solid fa-user-shield',
    accent: '#a32b2b',
    developer: 'CAPCOM Co., Ltd.',
    publisher: 'CAPCOM Co., Ltd.',
    release: '2023-03-24',
    tags: ['رعب البقاء', 'أكشن', 'إعادة إنتاج', 'قصة'],
    shortDescription: 'إعادة إنتاج أسطورية للكلاسيكية — ليون كينيدي في قرية اللصوص وأهوالها من جديد.',
    description: [
      'Resident Evil 4 هو إعادة الإنتاج المرتقبة لعام 2023 لعنوان 2005 الأسطوري، بإعادة بناء كاملة بواسطة محرك RE ENGINE. تعود القصة إلى ليون س. كينيدي المكلَّف بإنقاذ ابنة الرئيس من طائفة غامضة في قرية أوروبية نائية تسيطر عليها الشرور.',
      'قتال متماسك بالثالث شخص مع رحلة أليمة بالأسلحة المحدودة والموارد الشحيحة، مع تحسينات جذرية في الذكاء الاصطناعي والحركات والبيئة. نالت اللعبة تقييمات شبه مثالية وأصبحت من أفضل إعادة الإنتاج في التاريخ.'
    ],
    features: [
      'RE ENGINE — رسومات بجودة الجيل الحالي',
      'قصة كاملة ومشاهد سينمائية جديدة',
      'نظام قتال محسّن مع وتيرة أسرع',
      'مراحل منصات وألغاز مبنية من الصفر',
      'أطوار الميركاداريز والجماعات الجانبية',
      'إطلاق متزامن حصد تقييمات شبه مثالية',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 10 64-bit', cpu: 'AMD Ryzen 3 1200 / Intel Core i5-7500', ram: '8GB RAM', gpu: 'NVIDIA GTX 960 / AMD RX 470', storage: '55GB مساحة خالية', directx: 'DirectX 12' },
      rec: { label: 'الموصى بها', os: 'Windows 10/11 64-bit', cpu: 'AMD Ryzen 5 3600 / Intel Core i7-8700', ram: '16GB RAM', gpu: 'NVIDIA GTX 1070 / AMD RX 5700', storage: '55GB مساحة خالية (SSD)', directx: 'DirectX 12' }
    }
  },
  {
    id: 28,
    name: 'Resident Evil 7 Biohazard',
    category: 'AAA',
    featured: false,
    price: 200,
    currency: 'DA',
    gamesList: [],
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/418370/capsule_616x353.jpg',
    hero: 'https://cdn.akamai.steamstatic.com/steam/apps/418370/header.jpg',
    icon: 'fa-solid fa-house-chimney',
    accent: '#3f3f46',
    developer: 'CAPCOM Co., Ltd.',
    publisher: 'CAPCOM Co., Ltd.',
    release: '2017-01-24',
    tags: ['رعب', 'بقاء', 'VR', 'منظور أول'],
    shortDescription: 'عودة الرعب النقي — عائلة بيكر في مزرعة ملوثة بالعدوى في منظور الشخص الأول.',
    description: [
      'Resident Evil 7 Biohazard أعاد السلسلة إلى جذور الرعب البقاء عبر منظور الشخص الأول، داخل مزرعة عائلة بيكر في لويزيانا. أنت إيثان وينترز الباحث عن زوجته المفقودة، لتكتشف عائلة بيكر الممسوسة وكل أسرار منزلهم المريب.',
      'أجواء خانقة مع عدوى روائية (The Mold) وموارد محدودة ولقاءات متعلقة بالأسلوب الكلاسيكي للسلاسل، مع دعم كامل للواقع الافتراضي على PC. حصلت اللعبة على تقييمات مرتفعة بانتشار واسع وأعادت إحياء اسم السلسلة.'
    ],
    features: [
      'منظور الشخص الأول — رعب مباشر وخانق',
      'دعم كامل للواقع الافتراضي',
      'عائلة بيكر: خصوم لا يُنسون',
      'أطوار لاحقة بقصص جانبية متنوعة',
      'بيئة واحدة مترابطة بقدر من الاستكشاف',
      'ألغاز وموارد نموذج رعب البقاء الأصيل',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 7 64-bit', cpu: 'AMD Ryzen 3 1200 / Intel Core i5-4430', ram: '8GB RAM', gpu: 'NVIDIA GTX 760 / AMD RX 470', storage: '24GB مساحة خالية', directx: 'DirectX 11' },
      rec: { label: 'الموصى بها', os: 'Windows 10 64-bit', cpu: 'AMD Ryzen 7 1700 / Intel Core i7-6700K', ram: '16GB RAM', gpu: 'NVIDIA GTX 1060 6GB / AMD RX 480', storage: '24GB مساحة خالية', directx: 'DirectX 11' }
    }
  },
  {
    id: 29,
    name: 'Resident Evil Village',
    category: 'AAA',
    featured: false,
    price: 200,
    currency: 'DA',
    gamesList: [],
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/1196590/capsule_616x353.jpg',
    hero: 'https://cdn.akamai.steamstatic.com/steam/apps/1196590/header.jpg',
    icon: 'fa-solid fa-moon',
    accent: '#7c3aed',
    developer: 'CAPCOM Co., Ltd.',
    publisher: 'CAPCOM Co., Ltd.',
    release: '2021-05-07',
    tags: ['رعب البقاء', 'أكشن', 'قصة', 'قوطي'],
    shortDescription: 'إيثان وينترز يعود إلى عالم خفي من مصاصي الدماء والمستذئبين للبحث عن ابنته.',
    description: [
      'Resident Evil Village تواصل أحداث RE7 مباشرة: إيثان وينترز يُختطف في عالمٍ خفيٍّ من القلاع والمستنقعات، حيث أميرات مصاصات الدماء وطواحين تحكمها السيدة ديميترسكو ولوردات القرية. مغامرة بمنظور الشخص الأول تجمع الرعب بالقتال المتنوع.',
      'اللعبة وسّعت التصميم بمحطات متنوعة (القلعة، المصنع، المنزل المظلم) وأسلحة قابلة للتطوير واقتصاد أموال محسّن، إضافة لدعم صياغة وتحديات يوسعها الإصدار الذهبي. حققت اللعبة نجاحاً تجارياً كبيراً في أسبوعها الأول.'
    ],
    features: [
      '4 لوردات بأسلحة لعب مختلفة تماماً',
      'قتال مرتفع الوتيرة مع ترسانة أسلحة',
      'منزل ديميترسكو — تجربة رعب لا تُنسى',
      'دعم Ray Tracing على PC',
      'إضافة Winters\' Expansion بشهوات الروائع',
      'تطور سلس للشخصية مع شراء أسلحة وصناعة',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 10 64-bit', cpu: 'AMD Ryzen 3 1200 / Intel Core i5-7500', ram: '8GB RAM', gpu: 'NVIDIA GTX 960 / AMD RX 470', storage: '45GB مساحة خالية', directx: 'DirectX 12' },
      rec: { label: 'الموصى بها', os: 'Windows 10/11 64-bit', cpu: 'AMD Ryzen 5 3600 / Intel Core i7-8700', ram: '16GB RAM', gpu: 'NVIDIA GTX 1070 / AMD RX 5700', storage: '45GB مساحة خالية (SSD)', directx: 'DirectX 12' }
    }
  },
  {
    id: 30,
    name: 'Far Cry 6',
    category: 'AAA',
    featured: false,
    price: 300,
    currency: 'DA',
    gamesList: [],
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/2369390/capsule_616x353.jpg',
    hero: 'https://cdn.akamai.steamstatic.com/steam/apps/2369390/header.jpg',
    icon: 'fa-solid fa-person-rifle',
    accent: '#c2410c',
    developer: 'Ubisoft Montreal',
    publisher: 'Ubisoft',
    release: '2021-10-07',
    tags: ['عالم مفتوح', 'أكشن', 'تصويب', 'رحلة'],
    shortDescription: 'تمرد جزيرة يارا الخيالية ضد الديكتاتور أنطون كاستيو في أكبر عالم مفتوح بالكامل.',
    description: [
      'Far Cry 6 يدور في جزيرة يارا الخيالية الواقعة تحت قبضة الديكتاتور أنطون كاستيو (جيانكارلو إسبوزيتو) وابنه دييغو. أنت داني روجاس، مقاتلاً في صفوف حركة حرية متحدة تريد إسقاط النظام بسلاح كلاسيكي وذكاء وتفجيرات.',
      'العالم مفتوح بالكامل بشوارع عاصمة هافانا الملهمة من كوبا، مدعومًا بأسلحة مرتجلة ومركبات متنوعة (من سيارات الأجرة إلى الدبابات) مع حصون وقواعد عسكرية قابلة للتحرير.'
    ],
    features: [
      'أكبر عالم مفتوح في السلسلة حتى الآن',
      'ترسانة أسلحة مرتجلة ونظام Supremo',
      'قصة سينمائية بأداء إسبوزيتو المميز',
      'تعاون كامل للعب الجماعي',
      'مركبات متنوعة من الطائرات للدبابات',
      'محتوى ما بعد الإطلاق بتحديثات موسمية',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 10 64-bit', cpu: 'AMD Ryzen 3 1200 / Intel Core i5-4460', ram: '8GB RAM', gpu: 'NVIDIA GTX 960 4GB / AMD RX 470 4GB', storage: '60GB مساحة خالية', directx: 'DirectX 12' },
      rec: { label: 'الموصى بها', os: 'Windows 10/11 64-bit', cpu: 'AMD Ryzen 5 3600X / Intel Core i7-9700K', ram: '16GB RAM', gpu: 'NVIDIA GTX 1080 / AMD RX 5700 XT', storage: '60GB مساحة خالية (SSD)', directx: 'DirectX 12' }
    }
  },
  {
    id: 31,
    name: "Assassin's Creed Mirage",
    category: 'AAA',
    featured: false,
    price: 300,
    currency: 'DA',
    gamesList: [],
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3035570/15583e1c0a34e5858cffed256ef8d3b372374d9d/capsule_616x353.jpg?t=1786637416',
    hero: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3035570/header.jpg?t=1786637416',
    icon: 'fa-solid fa-mask',
    accent: '#1e40af',
    developer: 'Ubisoft Bordeaux',
    publisher: 'Ubisoft',
    release: '2024-10-22',
    tags: ['تسلل', 'أكشن', 'تاريخي', 'عالم مفتوح'],
    shortDescription: 'عودة إلى جذور النينجا — بسم وسطاء ذهبية في بغداد القرن التاسع الذهبية.',
    description: [
      'Assassin\'s Creed Mirage هو تكريمٌ شخصي لأفكار السلسلة الأصلية: تركز على التسلل والقتل وجمع المعلومات بدل مغامرات العالم المفتوح الضخمة. تتبع قصة بسم بن إسحاق — شابٌّ لصٌّ من الشوارع — وهو يصبح نينجا النظام في بغداد القرن التاسع.',
      'مدينة بغداد قابلة للاستكشاف كثيف بمبانيها وأسواقها وقصورها، مع أدوات النينجا التقليدية (قنابل الدخان والرماح والقفز الحر) وتفتيش معلومات لملاحقة الأهداف. تجربة مركّزة أقرب للجزء الأول.'
    ],
    features: [
      'أسلوب لعب كلاسيكي: تسلل، قتل، اختفاء',
      'بغداد القرن التاسع ذهبيّ التفاصيل',
      'شجرة مهارات النينجا التقليدية',
      'قصة خطية مركّزة ~20-25 ساعة',
      'أدوات: قنابل دخان، سكاكين، حواجز',
      'عودة نظام "تغيير المظهر" للتحرك في الزحام',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 10 64-bit', cpu: 'Intel Core i5-4460 / AMD Ryzen 3 1200', ram: '8GB RAM', gpu: 'NVIDIA GTX 1650 / AMD RX 570', storage: '40GB مساحة خالية', directx: 'DirectX 12' },
      rec: { label: 'الموصى بها', os: 'Windows 10/11 64-bit', cpu: 'Intel Core i7-4790K / AMD Ryzen 5 1600', ram: '16GB RAM', gpu: 'NVIDIA GTX 1660 Ti / AMD RX 5600 XT', storage: '40GB مساحة خالية (SSD)', directx: 'DirectX 12' }
    }
  },
  {
    id: 32,
    name: "Assassin's Creed Valhalla",
    category: 'AAA',
    featured: false,
    price: 300,
    currency: 'DA',
    gamesList: [],
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/2208920/capsule_616x353.jpg',
    hero: 'https://cdn.akamai.steamstatic.com/steam/apps/2208920/header.jpg',
    icon: 'fa-solid fa-axe',
    accent: '#0e7490',
    developer: 'Ubisoft Montreal',
    publisher: 'Ubisoft',
    release: '2022-12-06',
    tags: ['عالم مفتوح', 'فايكنغ', 'أكشن', 'RPG'],
    shortDescription: 'إيڤور في الأراضي الإنكليزية — بناء المستوطنة وشن الغارات بأسلوب الفايكنغ الأسطوري.',
    description: [
      'Assassin\'s Creed Valhalla يضعك في صليب إيَّفور فارينزدوتير، محاربة الفايكنغ التي تقود قومها عبر البحار الباردة إلى نورثمبريا في القرن التاسع. تنقّل من بناء قرية انجلز إلى شن الغارات على الأديرة والمعاقل وإبرام التحالفات مع ممالك إنكلترا المختلفة.',
      'نظام قتال مزدوج الأسلحة (فؤوس، سيوف، رماح، وما تختاره) مع بناء قاعدة قابلة للتوسع واقتصاد موارد؛ إضافة لأطوار raiding بالتعاون الجماعي وألغاز العالم. من أكبر عوالم السلسلة مساحةً.'
    ],
    features: [
      'قرية انجلز قابلة للتوسعة بالكامل',
      'قتال مزدوج الأسلحة بمرونة كاملة',
      'غارات تعاونية حتى 3 لاعبين',
      'ألغاز بيئية وكنوز منتشرة في العالم',
      'محتوى موسمي وتحديثات بعد الإطلاق',
      'دعم DLSS و Ray Tracing على PC',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 10 64-bit', cpu: 'AMD Ryzen 3 1200 / Intel Core i5-4460', ram: '8GB RAM', gpu: 'NVIDIA GTX 960 4GB / AMD RX 470 4GB', storage: '50GB مساحة خالية (SSD)', directx: 'DirectX 12' },
      rec: { label: 'الموصى بها', os: 'Windows 10/11 64-bit', cpu: 'AMD Ryzen 5 3600 / Intel Core i7-8700K', ram: '16GB RAM', gpu: 'NVIDIA GTX 1070 / AMD RX 5700 XT', storage: '50GB مساحة خالية (SSD)', directx: 'DirectX 12' }
    }
  },
  {
    id: 33,
    name: "Assassin's Creed Origins",
    category: 'AAA',
    featured: false,
    price: 300,
    currency: 'DA',
    gamesList: [],
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/582160/capsule_616x353.jpg',
    hero: 'https://cdn.akamai.steamstatic.com/steam/apps/582160/header.jpg',
    icon: 'fa-solid fa-ankh',
    accent: '#b45309',
    developer: 'Ubisoft Montreal',
    publisher: 'Ubisoft',
    release: '2017-10-27',
    tags: ['عالم مفتوح', 'مصر القديمة', 'أكشن', 'RPG'],
    shortDescription: 'ولادة النينجا — باييك في مصر البطلمية على أعتاب أول أخويةٍ في التاريخ.',
    description: [
      'Assassin\'s Creed Origins هي منشأ كل شيء: باييك، آخر المحاربين (Medjai) في مصر عام 48 ق.م، يبحث عن الانتقام من جماعة غامضة خلف موت ابنه، فتُسفر رحلته عن أول اخوانية نينجا في التاريخ. استكشف مصر بحجمٍ غير مسبوق وبحرٍ من الفصائل.',
      'نظام RPG جديد بالكامل: مستويات، أسلحة متعددة الفئات، طبقات ذكاء اصطناعي متطورة، وأبراج أسرار. جلبت اللعبة البحث في التاريخ المصري بشكل معمق وأرسلت أساس ألعاب السلسلة الحديثة.'
    ],
    features: [
      'مصر مفتوحة: أهرامات، صحراء، ووادي النيل',
      'نظام RPG بمستويات وعتاد متنوع',
      'قتال بالرمح والسيف والقوس في آنٍ واحد',
      'مهمات جانبية بكتابة حقيقية للشخصة',
      'عوالم سكيوب الأكبر في السلسلة في وقتها',
      'اكتشاف الكاتدرا (تومبس) الكهفية العظيمة',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 7 SP1 64-bit', cpu: 'Intel Core i5-2400S / AMD FX-6300', ram: '6GB RAM', gpu: 'NVIDIA GTX 660 / AMD R9 270', storage: '42GB مساحة خالية', directx: 'DirectX 11' },
      rec: { label: 'الموصى بها', os: 'Windows 10 64-bit', cpu: 'Intel Core i7-3770 / AMD FX-8350', ram: '8GB RAM', gpu: 'NVIDIA GTX 970 / AMD RX 480', storage: '42GB مساحة خالية', directx: 'DirectX 11' }
    }
  },
  {
    id: 34,
    name: 'Days Gone',
    category: 'AAA',
    featured: false,
    price: 100,
    currency: 'DA',
    gamesList: [],
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/1259420/capsule_616x353.jpg',
    hero: 'https://cdn.akamai.steamstatic.com/steam/apps/1259420/header.jpg',
    icon: 'fa-solid fa-motorcycle',
    accent: '#475569',
    developer: 'SIE Bend Studio',
    publisher: 'Sony Interactive Entertainment',
    release: '2021-05-18',
    tags: ['بقاء', 'زومبي', 'عالم مفتوح', 'دراما'],
    shortDescription: 'ديكن السان أوريغون — دراجة نارية وأساطيل العدو (Hordes) في أرض ما بعد الطاعون.',
    description: [
      'Days Gone يحكي قصة دياكون سانت جاك، درّاج خارج القانون في ولاية أوريغون المتفشية بعد وباءٍ حوّل البشر إلى أعداء متوحشين. اجمع الموارد، أصلح دراجتك، اذبح الحُفر (Hordes) الضخمة — مئات المتوحشين دفعة واحدة — وأنقذ ما تبقى من البشرية.',
      'نسخة PC أضافت الدعم للفأرة ولوحة المفاتيح مع تحديث أطر عالية (Ultra-wide) وجودة رسوم مضاعفة. قصة عاطفية عن الفقد والبشرية في عالم ميت.'
    ],
    features: [
      'أسراب حُفر ضخمة تصل للمئات — تكتيك كامل',
      'دراجتك النارية: الصيانة والترقية أساس البقاء',
      'عالم أوريغون مفتوح بمناطق بالتوسع',
      'قاتل بأدوات شراك وأسلحة مرتجلة',
      'دعم عرض فائق العرض و 60+ FPS على PC',
      'قصة درامية طويلة مع نهايات مختلفة направления',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 10 64-bit', cpu: 'Intel Core i5-2500K / AMD FX-6300', ram: '8GB RAM', gpu: 'NVIDIA GTX 780 / AMD R9 280', storage: '43GB مساحة خالية', directx: 'DirectX 11' },
      rec: { label: 'الموصى بها', os: 'Windows 10 64-bit', cpu: 'Intel Core i7-4790 / AMD Ryzen 5 1500X', ram: '16GB RAM', gpu: 'NVIDIA GTX 1060 6GB / AMD RX 580 8GB', storage: '43GB مساحة خالية (SSD)', directx: 'DirectX 11' }
    }
  },
  {
    id: 35,
    name: 'Sniper Elite 5',
    category: 'AAA',
    featured: false,
    price: 100,
    currency: 'DA',
    gamesList: [],
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/1029690/capsule_616x353.jpg',
    hero: 'https://cdn.akamai.steamstatic.com/steam/apps/1029690/header.jpg',
    icon: 'fa-solid fa-crosshairs',
    accent: '#166534',
    developer: 'Rebellion Developments',
    publisher: 'Rebellion',
    release: '2022-05-26',
    tags: ['تصويب', 'تخفي', 'حرب', 'قنص'],
    shortDescription: 'كارل فيبر يعبر فرنسا المحتلة — قنص تكتيكي ونظام "الرصاصة المبطئة" الأسطوري.',
    description: [
      'Sniper Elite 5 يواصل مآثر القناص كارل فيبر عبر فرنسا المحتلة بالحرب العالمية الثانية. اختراق المعاقل، تدمير أهداف عالية القيمة، وتصفية الوحدات بأسلوب تكتيكي يعتمد على التحكم بمستوى الزاوية والرياح.',
      'نظام "الرصاصة البطيئة" (X-Ray Killcam) الشهير يصور كيف تخترق رصاصتك الجسد مع تفاصيل اكس راي دموية؛ إضافة لتعديل سلاح عميق (100 جهاز) وأطوار تعاونية وخريطةً واسعة.'
    ],
    features: [
      'نظام Killcam بإكس راي — تفاصيل لا تُصدق',
      'تخصيص سلاح بأكثر من 100 جهاز',
      'تعاون كامل بالعبارة حتى 4 لاعبين',
      'وضع الغزو (Invasion) للتقليص',
      'خرائط واسعة بمعرفة متعددة',
      'تفاصيل تاريخية دقيقة للمعدات',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 10 64-bit', cpu: 'Intel Core i3-8100 / AMD Ryzen 3 3100', ram: '8GB RAM', gpu: 'NVIDIA GTX 960 4GB / AMD RX 570 4GB', storage: '65GB مساحة خالية', directx: 'DirectX 12' },
      rec: { label: 'الموصى بها', os: 'Windows 10/11 64-bit', cpu: 'Intel Core i5-11400 / AMD Ryzen 5 5600', ram: '16GB RAM', gpu: 'NVIDIA GTX 1070 / AMD RX 5700', storage: '65GB مساحة خالية (SSD)', directx: 'DirectX 12' }
    }
  },
  {
    id: 36,
    name: 'The Isle',
    category: 'multi',
    featured: false,
    price: 100,
    currency: 'DA',
    gamesList: [],
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/376210/capsule_616x353.jpg',
    hero: 'https://cdn.akamai.steamstatic.com/steam/apps/376210/header.jpg',
    icon: 'fa-solid fa-paw',
    accent: '#4d7c0f',
    developer: 'Afterthought',
    publisher: 'Afterthought',
    release: '2015-12-02',
    tags: ['بقاء', 'ديناصورات', 'متعدد', 'محاكاة'],
    shortDescription: 'عِش حياة ديناصور — اصطاد، تكاثر، وتطور في جزيرة تهددها الحيوانات المفترسة.',
    description: [
      'The Isle هي لعبة بقاء متعددة عبر الإنترنت تجعل اللاعب ديناصوراً يعيش في جزيرةٍ قديمة تشبه منصورات Mesozoic. تشكّل أنت نوعاً: من فكوك صغيرة منهبة لـ Tyrannosaurus حارساً وألبرتو. الصيد والبحث عن الطعام والماء وحماية العش من النقص الأساس.',
      'اللعبة تركز على الحركة القائمة على البيئة والانتساب للعصابات (عائلات) مع نظام تكاثر وتطور وإنعاش هائل (Legacy إلى Evrima). مجتمعها الكبير والمستمر منذ 2015 يضمن عوالم ممتلئة على مدار الساعة.'
    ],
    features: [
      'عشرات الأنواع القابلة للعب بالتطور',
      'نظام عائلات وعصابات وتعاون كامل',
      'تطور بيئي: الأمطار والمواسم',
      'بناء وتجميع أسوار وعش للمجموعة',
      'نسخة Evrima بأسلوب لعب مضبوط',
      'مجتمع حي وملاعب ذات خوادم عربية',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 10 64-bit', cpu: 'Intel Core i5-4670K / AMD FX-8350', ram: '8GB RAM', gpu: 'NVIDIA GTX 1050 / AMD RX 470', storage: '20GB مساحة خالية', directx: 'DirectX 11' },
      rec: { label: 'الموصى بها', os: 'Windows 10/11 64-bit', cpu: 'Intel Core i7-8700 / AMD Ryzen 5 3600', ram: '16GB RAM', gpu: 'NVIDIA RTX 2060 / AMD RX 5700 XT', storage: '30GB مساحة خالية (SSD)', directx: 'DirectX 12' }
    }
  },
  {
    id: 37,
    name: 'Drive Beyond Horizons',
    category: 'multi',
    featured: false,
    price: 100,
    currency: 'DA',
    gamesList: [],
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/2625420/capsule_616x353.jpg',
    hero: 'https://cdn.akamai.steamstatic.com/steam/apps/2625420/header.jpg',
    icon: 'fa-solid fa-car-side',
    accent: '#0f766e',
    developer: '—',
    publisher: '—',
    release: '2025-06-19',
    tags: ['سباق', 'عالم مفتوح', 'متعدد', 'قيادة'],
    shortDescription: 'سباق حر في عوالم مفتوحة شاسعة — ضبط، انعطاف، وتحدّى أصدقاءك في طرق متنوعة.',
    description: [
      'Drive Beyond Horizons تجمع سباق السرعة مع الاستكشاف الحر: عوالم مفتوحة غنية بالطرق الجبلية والساحلية والصحراوية، تُقاد فيها سيارات ضابطة ومتنوعة الماركات. أتقن الانعراج وتسابق بين النقاط أو انطلق بحرية لتحطيم الأرقام.',
      'أطوار تقليدية ومجانية وأحداث موسمية بالتعاون، مع ضبط خارجي (أكثر التقاطيع) وتحديات عالمية يومية. اللعبة مناسبة لأجهزة متوسطة مع أنماط تشغيل متعددة K&M و يد.'
    ],
    features: [
      'عوالم مفتوحة كبيرة بتفاصيل جغرافية متنوعة',
      'أسطول سيارات قابل للضبط الخارجي والأداء',
      'أطوار سباق حرة وموسمية وتحديات',
      'دعم أونلاين بالتحدي الفوري',
      'أنماط تشغيل يد وأزرار وماوس',
      'تحسينات أَطُر لأجهزة متوسطة',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 10 64-bit', cpu: 'Intel Core i5-4460 / AMD Ryzen 3 1200', ram: '8GB RAM', gpu: 'NVIDIA GTX 1060 3GB / AMD RX 570 4GB', storage: '30GB مساحة خالية', directx: 'DirectX 11' },
      rec: { label: 'الموصى بها', os: 'Windows 10/11 64-bit', cpu: 'Intel Core i7-8700 / AMD Ryzen 5 3600', ram: '16GB RAM', gpu: 'NVIDIA RTX 2060 / AMD RX 6600', storage: '30GB مساحة خالية (SSD)', directx: 'DirectX 12' }
    }
  },
  {
    id: 38,
    name: 'EA SPORTS FC 24',
    category: 'multi',
    featured: false,
    price: 200,
    currency: 'DA',
    gamesList: [],
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2195250/f11315d7491f706b09b059d12424f711e9778b82/capsule_616x353.jpg?t=1752167366',
    hero: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2195250/header.jpg?t=1752167366',
    icon: 'fa-solid fa-futbol',
    accent: '#16a34a',
    developer: 'EA Vancouver',
    publisher: 'EA Sports',
    release: '2023-09-29',
    tags: ['كرة قدم', 'متعدد', 'محاكاة رياضية', 'Ultimate Team'],
    shortDescription: 'أول أجزاء EA SPORTS FC — كرة القدم بمحرك HyperMotion V وأطوار Ultimate Team.',
    description: [
      'EA SPORTS FC 24 هو إعادة تسمية السلسلة بعد نهاية الشراكة مع FIFA، وأول أجزاءها. يحمل محرك HyperMotion الجديد مع تقنية PlayStyles لترجمة أسلوب نجوم العالم الفعلي على أرض الملعب.',
      'أطوار مشهورة: Ultimate Team ببطاقات مواقع ومشغّلي النساء والرجال معاً، Career Mode بتحسينات على تطوير المدرب والجنرالات، مع Volta Football وأحداث يومية متجددة.'
    ],
    features: [
      'محرك HyperMotion V بحركات ذكية',
      'بطاقات Ultimate Team الإناث والذكور',
      'Career Mode محسّن بعناصر تكتيكية',
      'تحديات وقطاعات يومية ودورية',
      'دعم كامل للتحكم باليد ولوحة المفاتيح',
      'وصول سريع لخوادم عبر العالم',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 10 64-bit', cpu: 'Intel Core i5-6600K / AMD Ryzen 5 1600', ram: '8GB RAM', gpu: 'NVIDIA GTX 1050 Ti / AMD RX 570', storage: '100GB مساحة خالية', directx: 'DirectX 12' },
      rec: { label: 'الموصى بها', os: 'Windows 10/11 64-bit', cpu: 'Intel Core i7-6700 / AMD Ryzen 7 2700X', ram: '16GB RAM', gpu: 'NVIDIA GTX 1660 Ti / AMD RX 5600 XT', storage: '100GB مساحة خالية (SSD)', directx: 'DirectX 12' }
    }
  },
  {
    id: 39,
    name: 'A Way Out',
    category: 'multi',
    featured: false,
    price: 100,
    currency: 'DA',
    gamesList: [],
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/1222700/capsule_616x353.jpg',
    hero: 'https://cdn.akamai.steamstatic.com/steam/apps/1222700/header.jpg',
    icon: 'fa-solid fa-handcuffs',
    accent: '#334155',
    developer: 'Hazelight Studios',
    publisher: 'Electronic Arts',
    release: '2018-03-23',
    tags: ['تعاوني', 'قصة', 'هروب', 'مغامرة'],
    shortDescription: 'لعبة تعاونية إجبارية لشخصين — ليو وفنسنت يخططان للهروب من السجن معاً.',
    description: [
      'A Way Out من Hazelight (مخرج Brothers) هي تجربة تعاونية إجبارية: لا يمكن لعبها إلا بشخصين — عبر الشاشة المشتركة أو الإنترنت — حيث يتحد ليو وفنسنت للخطة على الهروب من السجن ومتابعة ما بعد الهروب في قصة مليئة بالتوتر.',
      'فصلان: داخل السجن (تسلل، محادثات، شيطنة) ثم خارجها في ملاحقات وقيادة وإطلاق نار… القصة تتشعب حسب تطور تعاونكما، ونهايتها صادمة وتقاس فقر فيها.'
    ],
    features: [
      'تعاون إجباري — الشاشة المشتركة أو عبر الإنترنت',
      'قصة سينمائية بطابع تشويق وتهريب',
      'مراحل متنوعة: تسلل، قيادة، قتال',
      'ألغاز بيئية تتطلب التعاون الفعلي',
      'نهايات متعددة تبعاً لقرارات النهاية',
      'يد مجانية لصاحب النسخة الإضافية (Friend Pass)',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 7 64-bit', cpu: 'Intel Core i3-4340 / AMD FX-6300', ram: '8GB RAM', gpu: 'NVIDIA GTX 660 2GB / AMD R9 270X', storage: '25GB مساحة خالية', directx: 'DirectX 11' },
      rec: { label: 'الموصى بها', os: 'Windows 10 64-bit', cpu: 'Intel Core i7-6700K / AMD Ryzen 5 1600', ram: '16GB RAM', gpu: 'NVIDIA GTX 970 / AMD RX 480', storage: '25GB مساحة خالية', directx: 'DirectX 11' }
    }
  },
  {
    id: 40,
    name: 'Shadow of the Tomb Raider',
    category: 'AAA',
    featured: false,
    price: 200,
    currency: 'DA',
    gamesList: [],
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/750920/capsule_616x353.jpg',
    hero: 'https://cdn.akamai.steamstatic.com/steam/apps/750920/header.jpg',
    icon: 'fa-solid fa-mountain',
    accent: '#57534e',
    developer: 'Eidos Montreal',
    publisher: 'Square Enix',
    release: '2018-09-14',
    tags: ['مغامرات', 'أكشن', 'تسلل', 'قصة'],
    shortDescription: 'خاتمة ثلاثية Lara — غابات مكسيكية ومدينة إيبكس وسباق أضداد ضد قوى قديمة.',
    description: [
      'Shadow of the Tomb Raider تختتم ثلاثية وحش (Reboot) مع لارا كروفت في أمريكا الجنوبية: غابات مكسيكية كثيفة ومدينة تنين الغارقة ومواجهات مع طائفة تريبوت الملكية. التسلل والجمع والتركيب أعمق من أي وقت.',
      'نسخة Definitive Edition تشمل كل الإضافات (سبع مهمات إضافية وأسلحة وبدلات). نظام "الغطاء الملطخ" الجديد يحول اللعب لكمينٍ متدرج، مع عالم أكبر متعدد المستويات ومذبحات تحت الأرض.'
    ],
    features: [
      'خاتمة مكثفة لثلاثية أروع نهضة',
      'نظام تغطية جديد وتحولات كمين',
      'مدينة إيبكس — عالم متعدد المستويات',
      'ترسانة أسلحة بمجموعة تعديلات',
      'أطوار الجمع والتحديات الغامضة',
      'Definitive Edition بكل الإضافات',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 7 64-bit', cpu: 'Intel Core i3-4340 / AMD FX-6300', ram: '8GB RAM', gpu: 'NVIDIA GTX 1050 Ti / AMD RX 560', storage: '21GB مساحة خالية', directx: 'DirectX 11' },
      rec: { label: 'الموصى بها', os: 'Windows 10 64-bit', cpu: 'Intel Core i7-4770K / AMD Ryzen 5 1600X', ram: '16GB RAM', gpu: 'NVIDIA GTX 1660 Ti / AMD RX 580', storage: '21GB مساحة خالية (SSD)', directx: 'DirectX 11' }
    }
  },
  {
    id: 41,
    name: '007 First Light',
    category: 'AAA',
    featured: false,
    price: 300,
    currency: 'DA',
    gamesList: [],
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3768760/6646220d04fce26fc441f589e8f98d66c9e33b9c/header_alt_assets_2.jpg?t=1786116490',
    hero: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3768760/6646220d04fce26fc441f589e8f98d66c9e33b9c/header_alt_assets_2.jpg?t=1786116490',
    icon: 'fa-solid fa-user-secret',
    accent: '#1e293b',
    developer: '—',
    publisher: '—',
    release: '2026',
    tags: ['عميل سري', 'أكشن', 'قصة', 'تسلل'],
    shortDescription: 'نشأة العميل 007 — مهام موجهة بالتحقيق والدبلوماسية في عالم التجسس الأول.',
    description: [
      '007 First Light يتناول بدايات العميل 007 بوس\u0027سع اللامعة على العالم: مهام تجسس تعقّب الأحداث، محادثات تغير مسار الأمور وقرارات تفيض وزارة الخدمة السرية بالتوتر. قصة أصلية تشكل هوية بوند الشاب.',
      'اللعبة تجمع التسلل الهادئ مع الاشتباك السريع، أدوات تجسس (كاميرات، أجهزة درع) وإخفاء في الحشود. نسخة بوند جديدة كلياً بعالم متصل بالتوثيق السينمائي الحالي.'
    ],
    features: [
      'قصة أصلية لأصول العميل 007',
      'تحقيق وخطب يغيّران مجرى المهمات',
      'أدوات: كاميرات، تشويش، انتظار',
      'تسلل حر في حشود العواصم',
      'مستويات استشراقية بالسيارات والقطارات',
      'تخطيط عمليات وفق أسلوبك الخاص',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 10 64-bit', cpu: 'Intel Core i5-8400 / AMD Ryzen 5 2600', ram: '16GB RAM', gpu: 'NVIDIA GTX 1660 6GB / AMD RX 5600 XT', storage: '40GB مساحة خالية (SSD)', directx: 'DirectX 12' },
      rec: { label: 'الموصى بها', os: 'Windows 11 64-bit', cpu: 'Intel Core i7-10700 / AMD Ryzen 7 3700X', ram: '16GB RAM', gpu: 'NVIDIA RTX 3070 / AMD RX 6700 XT', storage: '40GB مساحة خالية (SSD)', directx: 'DirectX 12' }
    }
  },
  {
    id: 42,
    name: 'MECCHA CHAMELEON',
    category: 'AAA',
    featured: false,
    price: 300,
    currency: 'DA',
    gamesList: [],
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4704690/163e2a742e5fb8e1f5d1e3a890da98f04ab809d4/header.jpg?t=1785908480',
    hero: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4704690/163e2a742e5fb8e1f5d1e3a890da98f04ab809d4/header.jpg?t=1785908480',
    icon: 'fa-solid fa-palette',
    accent: '#9333ea',
    developer: '—',
    publisher: '—',
    release: '2026',
    tags: ['منصات', 'مغامرة', 'ألوان', 'إبداعي'],
    shortDescription: 'حرّي يقلّد الألوان ويمتص قدرت الخصوم — منصات إبداعية عالم متدرج الألوان.',
    description: [
      'MECCHA CHAMELEON هو عنوان منصات-مغامرة مبني على فكرة واحدة: الحرباء الآلية تستطيع امتصاص الألوان من المحيط لتبني قدراتها — اخترق أرض متدرجة الألوان بتحويل نفسك لأخضر الغابة لتبقى مخفياً، أحمر الحمم للدفع…',
      'كل عالم يحوّل اللون إلى ميكانيكي لعب: ألغاز ألوان، أعداء مرتبطون بالغالبية، وحلّ أعداد من الألغاز الحيوية. أسلوب إبداعي مع تلوين يتحول بالحرارة وقت اللعب.'
    ],
    features: [
      'فكرة اللون: يمتص ويستخدم قدرات',
      'ألغاز بيئية متدرجة الصعوبة',
      'عوالم متعددة لكل منها أسلوب ألوان',
      'معارك ضد أشداء حسّاسي الألوان',
      'ضبط تلوين قابل للتخصيص',
      'دعم يد ولوحة مفاتيح',
      'يُسلّم الحساب فورًا مع تعليمات التفعيل'
    ],
    requirements: {
      min: { label: 'الحد الأدنى', os: 'Windows 10 64-bit', cpu: 'Intel Core i5-4460 / AMD Ryzen 3 1200', ram: '8GB RAM', gpu: 'NVIDIA GTX 1060 3GB / AMD RX 570 4GB', storage: '15GB مساحة خالية', directx: 'DirectX 11' },
      rec: { label: 'الموصى بها', os: 'Windows 10/11 64-bit', cpu: 'Intel Core i7-7700 / AMD Ryzen 5 2600', ram: '16GB RAM', gpu: 'NVIDIA RTX 2060 / AMD RX 6600', storage: '15GB مساحة خالية (SSD)', directx: 'DirectX 12' }
    }
  }
];