// ─────────────────────────────────────────────────────────────
//  DICTIONNAIRE DE TRADUCTION — arabe (défaut) + français.
//  Pour modifier un texte : cherchez la clé ici.
//  Pour ajouter une langue : dupliquez l'objet `ar`.
// ─────────────────────────────────────────────────────────────

export const STRINGS = {
  ar: {
    switcher: { ar: 'عربي', fr: 'FR', aria: 'اللغة' },
    nav: {
      home: 'الرئيسية',
      services: 'خدماتنا',
      gallery: 'المعرض',
      pricing: 'الأسعار',
      reviews: 'آراء العملاء',
      contact: 'اتصل بنا',
      reserve: 'احجز',
      reserveDate: 'احجز موعدك',
      brandSub: 'مصور · المغرب',
      menuAria: 'القائمة',
    },
    hero: {
      eyebrow: 'مصور · المغرب',
      tagline: 'عاطفةُ أجملِ أيّامكم، نُخلِّدها إلى الأبد.',
      years: '18',
      yearsSuffix: 'سنة',
      expText: 'من الخبرة في خدمة أعراسكم وخطوبتكم ومناسباتكم.',
      reserveDate: 'احجز موعدك',
      whatsapp: 'واتساب',
      waHello: 'مرحباً استوديو الصالحي، أودّ الاستفسار عن مناسبة.',
      badges: [
        { big: '18 سنة', small: 'من الشغف والخبرة' },
        { big: 'معدّات احترافية', small: 'تصوير، فيديو ودرون' },
        { big: 'في كلّ المغرب', small: 'نتنقّل إلى مكانكم' },
      ],
    },
    photographer: {
      eyebrow: 'تعرّف علينا',
      title: 'تعرّف على المصوّر',
      name: 'رضوان الصالحي',
      role: 'مصوّر أعراس ومناسبات',
      bio1: '18 سنة من الشغف والخبرة في خدمة أعراسكم وخطوبتكم ومناسباتكم.',
      bio2: 'العطاوية · قلعة السراغنة · مراكش — نتنقّل إلى مكانكم في كلّ المغرب.',
      cta: 'احجز موعدك',
      alt: 'رضوان الصالحي — مصوّر استوديو الصالحي',
    },
    services: {
      eyebrow: 'خدماتنا',
      title: 'خبرةٌ متكاملة',
      sub: 'كلّ مناسبة فريدة من نوعها. نُكيِّف نظرتنا ومعدّاتنا مع قصّتكم، لنمنحكم صوراً تُشبهكم.',
      items: [
        {
          key: 'mariage',
          title: 'الأعراس',
          text: 'من التحضيرات إلى السهرة، نروي قصّة يومكم الكبير بسرّية وعاطفة.',
        },
        {
          key: 'fiancailles',
          title: 'الخطوبة',
          text: 'سحر خطوبتكم، نلتقطه في صور طبيعية مليئة بالحنان.',
        },
        {
          key: 'soirees',
          title: 'السهرات الخاصّة',
          text: 'أعياد الميلاد، حفلات الختان، الاستقبالات: حضور هادئ لذكريات متألّقة.',
        },
        {
          key: 'evenements',
          title: 'المناسبات',
          text: 'الندوات، الافتتاحات، العروض: تغطية احترافية بالصور والفيديو.',
        },
        {
          key: 'seance',
          title: 'جلسات التصوير',
          text: 'بورتريه، أزواج، عائلات: جلسات في الهواء الطلق أو في الاستوديو، في أجواء مريحة.',
        },
        {
          key: 'drone',
          title: 'الدرون والفيديو',
          text: 'أفلام الأعراس، مقاطع لمواقع التواصل، ولقطات جوّية مذهلة بالدرون.',
        },
        {
          key: 'ecrivain',
          title: 'كاتب عمومي',
          text: 'صياغة وطباعة الوثائق الإدارية، السير الذاتية، الرسائل والطلبات، وصور الهوية.',
        },
        {
          key: 'design',
          title: 'ديزاين للطباعة',
          text: 'تصاميم احترافية ببرنامجي Photoshop وIllustrator: بطاقات الزيارة، المنشورات والإعلانات، الملصقات، الشعارات، ودعوات الأفراح والمناسبات.',
        },
      ],
    },
    eventTypes: [
      { key: 'mariage', label: 'زفاف' },
      { key: 'fiancailles', label: 'خطوبة' },
      { key: 'soiree', label: 'سهرة خاصّة' },
      { key: 'evenement', label: 'مناسبة' },
      { key: 'seance', label: 'جلسة تصوير' },
      { key: 'drone', label: 'فيديو ودرون' },
      { key: 'autre', label: 'أخرى' },
    ],
    gallery: {
      eyebrow: 'المعرض',
      title: 'أجمل قصصنا',
      sub: 'لمحة عن عالمنا — أعراس وخطوبة ومناسبات التقطناها بشغف.',
      yourPhoto: 'صورتك هنا',
      noteStart: 'مساحة مخصّصة لصور الاستوديو — تابعونا على إنستغرام',
      noteEnd: 'لاكتشاف أحدث أعمالنا.',
    },
    pricing: {
      eyebrow: 'الأسعار',
      title: 'صِيَغ حسب الطلب',
      sub: 'كلّ مشروع فريد من نوعه: اتصلوا بنا للحصول على عرض سعر شخصي ومجّاني، مناسب لمناسبتكم وميزانيتكم.',
      onQuote: 'حسب الطلب',
      mostWanted: 'الأكثر طلباً',
      askQuote: 'اطلب عرض سعر',
      waQuote: (plan) => `مرحباً استوديو الصالحي، أودّ عرض سعر لـ: ${plan}.`,
      plans: [
        {
          key: 'seance',
          name: 'جلسة تصوير',
          features: ['جلسة في الهواء الطلق أو في الاستوديو', 'صور معدَّلة بجودة عالية', 'معرض خاصّ على الإنترنت'],
        },
        {
          key: 'mariage',
          name: 'الأعراس',
          features: ['حضور من الصباح إلى السهرة', 'صور + فيلم الزفاف', 'ألبوم فاخر', 'الدرون اختياري'],
        },
        {
          key: 'evenement',
          name: 'المناسبات والدرون',
          features: ['السهرات والندوات والعروض', 'لقطات جوّية بالدرون', 'مقطع ترويجي لمواقع التواصل'],
        },
      ],
    },
    testimonials: {
      eyebrow: 'آراء العملاء',
      title: 'ائتمنونا على ذكرياتهم',
      starsAria: '5 من 5 نجوم',
      reviews: [
        {
          name: 'سلمى وياسين',
          event: 'زفاف بمراكش',
          text: 'عمل رائع من البداية إلى النهاية. الصور جميلة والفريق كان هادئاً واحترافياً طوال اليوم.',
        },
        {
          name: 'خديجة ب.',
          event: 'خطوبة',
          text: 'أحببنا جلسة التصوير: أجواء مريحة، نصائح جميلة، ونتيجة تُشبهنا. أنصح بهم بعيون مغمّضة.',
        },
        {
          name: 'مهدي ر.',
          event: 'سهرة خاصّة',
          text: 'لقطات الدرون أبهرت جميع ضيوفنا. حسّ حقيقي بالتفاصيل وتسليم سريع للصور والفيديو.',
        },
      ],
      disclaimer: 'آراء على سبيل المثال — سيتمّ استبدالها بآراء عملائكم الحقيقيين.',
    },
    booking: {
      eyebrow: 'الحجز',
      title: 'احجزوا موعدكم',
      sub: 'املأوا هذا النموذج: سيُسجَّل طلبكم ويُرسَل فوراً عبر واتساب. نردّ عليكم في أقرب وقت.',
      name: 'الاسم الكامل *',
      phone: 'الهاتف *',
      type: 'نوع المناسبة',
      date: 'التاريخ المطلوب *',
      city: 'المدينة / مكان المناسبة',
      message: 'رسالتكم',
      phName: 'اسمكم',
      phPhone: '06 XX XX XX XX',
      phCity: 'مثال: مراكش، قلعة السراغنة...',
      phMessage: 'حدّثونا عن مشروعكم: عدد الضيوف، الأوقات، رغبات خاصّة...',
      error: 'المرجو ملء الاسم والهاتف والتاريخ المطلوب على الأقلّ.',
      submit: 'إرسال عبر واتساب',
      note: 'ردّ سريع — 7/7',
      consentStart: 'بإرسالك هذا الطلب، أنت توافق على ',
      consentLink: 'سياسة الخصوصية',
      successTitle: 'تمّ إرسال الطلب!',
      successText: 'تمّ تسجيل طلبكم وفُتح واتساب مع الملخّص. ما عليكم سوى الضغط على «إرسال». إلى اللقاء قريباً!',
      another: 'تقديم طلب آخر',
      waBooking: (f) =>
        `مرحباً استوديو الصالحي، أودّ حجز موعد:\n` +
        `• الاسم: ${f.nom}\n` +
        `• الهاتف: ${f.telephone}\n` +
        `• المناسبة: ${f.typeLabel}\n` +
        `• التاريخ: ${f.date}\n` +
        `• المدينة: ${f.ville || '—'}\n` +
        `• الرسالة: ${f.message || '—'}\nشكراً!`,
    },
    contact: {
      eyebrow: 'اتصل بنا',
      title: 'لنتحدّث عن مشروعكم',
      zoneDetail: 'مقرّنا في العطاوية، ونتنقّل في جميع أنحاء المغرب لمناسباتكم.',
      waHello: 'مرحباً استوديو الصالحي، أودّ معلومات.',
      cards: [
        { key: 'phone', title: 'الهاتف', cta: 'اتصل' },
        { key: 'whatsapp', title: 'واتساب', value: 'محادثة فورية', cta: 'دردش' },
        { key: 'instagram', title: 'إنستغرام', cta: 'تابع' },
        { key: 'zone', title: 'منطقة التدخّل', value: 'العطاوية · قلعة السراغنة · مراكش', cta: 'عرض الخريطة' },
      ],
    },
    footer: {
      navTitle: 'التصفّح',
      contactTitle: 'اتصال مباشر',
      proSpace: 'الفضاء المهني',
      privacy: 'سياسة الخصوصية',
      rights: (year) => `© ${year} استوديو الصالحي — جميع الحقوق محفوظة.`,
      giftNote: 'موقع عرض مُهدى — نسخة قالب.',
    },
    privacy: {
      eyebrow: 'الشفافية',
      title: 'سياسة الخصوصية',
      updated: 'آخر تحديث: أكتوبر 2026',
      intro:
        'نحترم خصوصيتكم. توضّح هذه الصفحة، باختصار ووضوح، ما هي البيانات التي نجمعها عند استخدامكم لهذا الموقع وكيف نستخدمها.',
      back: 'عودة إلى الرئيسية',
      sections: [
        {
          title: 'البيانات التي نجمعها',
          text: 'عند ملء نموذج الحجز، نطلب منكم فقط المعلومات الضرورية لمعالجة طلبكم:',
          items: [
            'الاسم الكامل',
            'رقم الهاتف',
            'نوع المناسبة',
            'التاريخ المطلوب',
            'المدينة / مكان المناسبة',
            'محتوى رسالتكم (اختياري)',
          ],
        },
        {
          title: 'كيف نستخدم بياناتكم',
          text: 'تُستخدم بياناتكم لغرض وحيد: معالجة طلب الحجز والتواصل معكم بشأنه. عند إرسال النموذج، يُفتَح تطبيق واتساب مع رسالة جاهزة تحتوي ملخّص طلبكم، وتُرسَل مباشرة إلى هاتف الاستوديو — أنتم من يضغط على زر الإرسال. لا نستخدم بياناتكم لأي غرض تسويقي.',
        },
        {
          title: 'أين تُحفَظ بياناتكم؟',
          text: 'تُحفَظ نسخة من طلبكم محليّاً في متصفّحكم (localStorage) لتظهر في «الفضاء المهني» على نفس الجهاز — وهي وظيفة تجريبية ضمن القالب. لا تُرسَل بياناتكم إلى أي خادم خاصّ بنا ولا إلى أي طرف ثالث، باستثناء رسالة الواتساب التي ترسلونها بأنفسكم.',
        },
        {
          title: 'ما لا نقوم به',
          items: [
            'لا ننشئ حسابات ولا نطلب كلمات مرور',
            'لا نستخدم ملفّات تعقّب (لا كوكيز تحليلية ولا إعلانية)',
            'لا نبيع بياناتكم ولا نشاركها مع أي طرف ثالث',
            'لا نرسل رسائل ترويجية غير مرغوب فيها',
          ],
        },
        {
          title: 'حقوقكم',
          text: 'يمكنكم في أي وقت طلب الاطّلاع على بياناتكم أو تصحيحها أو حذفها، عبر الاتصال بالاستوديو مباشرة (الهاتف أو واتساب — تجدون الأرقام في صفحة «اتصل بنا»). ويمكنكم أيضاً مسح النسخة المحفوظة محليّاً عبر مسح بيانات التصفّح في متصفّحكم.',
        },
      ],
      templateNote:
        'ملاحظة: هذه الصفحة نموذج مرفق مع القالب — على صاحب الموقع مراجعتها وتكييفها مع وضعه القانوني قبل النشر النهائي.',
    },
    docServices: {
      eyebrow: 'خدمة إضافية',
      title: 'الكاتب العمومي',
      sub: 'صياغة وطباعة الوثائق الإدارية، السير الذاتية، الرسائل والطلبات، وصور الهوية — بسرعة واحترافية.',
      steps: [
        {
          n: '1',
          title: 'أرسل وثائقك',
          text: 'عبر الاستمارة: اختر ملفاتك، حدّد نوع الوثيقة وعدد النسخ.',
        },
        {
          n: '2',
          title: 'نطبعها ونجهّزها',
          text: 'طباعة بجودة عالية وتجهيز دقيق لوثائقك.',
        },
        {
          n: '3',
          title: 'استلمها جاهزة',
          text: 'استلم وثائقك جاهزة من الاستوديو.',
        },
      ],
      formTitle: 'اطلب وثائقك',
      name: 'الاسم الكامل *',
      phone: 'الهاتف *',
      docType: 'نوع الوثيقة',
      files: 'الملفات *',
      filesHint: 'PDF, JPG, PNG, DOC — يمكنكم اختيار عدّة ملفات',
      copies: 'عدد النسخ',
      notes: 'ملاحظات',
      phName: 'اسمكم',
      phPhone: '06 XX XX XX XX',
      phNotes: 'تفاصيل إضافية: مقاس الصور، لغة الوثيقة...',
      error: 'المرجو ملء الاسم والهاتف واختيار ملف واحد على الأقل.',
      submit: 'إرسال عبر واتساب',
      attachHint: 'بعد الضغط، أرفق ملفاتك مباشرة في محادثة الواتساب.',
      consentStart: 'بإرسالك هذا الطلب، أنت توافق على ',
      consentLink: 'سياسة الخصوصية',
      successTitle: 'تمّ إرسال الطلب!',
      successText:
        'تمّ تسجيل طلبكم وفُتح واتساب مع الملخّص. أرفقوا ملفاتكم في المحادثة ثم اضغطوا «إرسال».',
      another: 'تقديم طلب آخر',
      waDoc: (f) =>
        `مرحباً استوديو الصالحي، أودّ خدمة الكاتب العمومي:\n` +
        `• الاسم: ${f.nom}\n` +
        `• الهاتف: ${f.telephone}\n` +
        `• نوع الوثيقة: ${f.typeLabel}\n` +
        `• الملفات: ${f.files}\n` +
        `• عدد النسخ: ${f.copies}\n` +
        `• ملاحظات: ${f.notes || '—'}\n` +
        `سأرفق الملفات في المحادثة. شكراً!`,
      docTypes: [
        { key: 'admin', label: 'وثائق إدارية' },
        { key: 'cv', label: 'سيرة ذاتية' },
        { key: 'idphoto', label: 'صور هوية' },
        { key: 'autre', label: 'أخرى' },
      ],
    },
    docAdmin: {
      tabBookings: 'الحجوزات',
      tabDocs: 'طلبات الوثائق',
      title: 'طلبات الوثائق المستلَمة',
      statuses: { new: 'جديد', preparing: 'قيد التجهيز', ready: 'جاهز' },
      emptyTitle: 'لا توجد طلبات وثائق حالياً',
      emptyText: 'جرّبوا استمارة «الكاتب العمومي» في الصفحة الرئيسية: سيظهر الطلب هنا.',
      filesLabel: 'الملفات',
      copiesLabel: 'النسخ',
      notesLabel: 'ملاحظات',
    },

    admin: {
      back: 'عودة إلى الموقع',
      eyebrow: 'الفضاء المهني',
      title: 'الحجوزات المستلَمة',
      demoNote:
        'نسخة تجريبية من القالب: الطلبات المُرسَلة من نموذج الحجز تُحفَظ محليّاً في هذا المتصفّح. لإدارة حقيقية متعدّدة الأجهزة، اربطوا خادماً أو جدول Google Sheets (انظر README).',
      statuses: { new: 'جديد', confirmed: 'مؤكَّد', done: 'منتهٍ' },
      statusAria: 'الحالة',
      deleteAria: 'حذف',
      confirmDelete: 'حذف هذا الحجز؟',
      emptyTitle: 'لا توجد حجوزات حالياً',
      emptyText: 'جرّبوا النموذج في الصفحة الرئيسية: سيظهر الطلب هنا وسيُفتَح أيضاً على واتساب.',
      footerNote: 'استوديو الصالحي — الفضاء المهني (قالب)',
    },
  },

  fr: {
    switcher: { ar: 'عربي', fr: 'FR', aria: 'Langue' },
    nav: {
      home: 'Accueil',
      services: 'Services',
      gallery: 'Galerie',
      pricing: 'Tarifs',
      reviews: 'Avis',
      contact: 'Contact',
      reserve: 'Réserver',
      reserveDate: 'Réserver une date',
      brandSub: 'Photographe · Maroc',
      menuAria: 'Menu',
    },
    hero: {
      eyebrow: 'Photographe · Maroc',
      tagline: 'L’émotion de vos plus beaux jours, capturée pour l’éternité.',
      years: '18',
      yearsSuffix: 'ans',
      expText: 'd’expérience au service de vos mariages, fiançailles et événements.',
      reserveDate: 'Réserver une date',
      whatsapp: 'WhatsApp',
      waHello: 'Bonjour Studio Salhi, je souhaite des informations pour un événement.',
      badges: [
        { big: '18 ans', small: 'de passion & savoir-faire' },
        { big: 'Équipement pro', small: 'photo, vidéo & drone' },
        { big: 'Partout au Maroc', small: 'nous nous déplaçons' },
      ],
    },
    photographer: {
      eyebrow: 'Faites connaissance',
      title: 'Rencontrez le photographe',
      name: 'Radwane Es-Salhi',
      role: 'Photographe mariages & événements',
      bio1: '18 ans de passion et de savoir-faire au service de vos mariages, fiançailles et événements.',
      bio2: 'Attaouia · Kelaa des Sraghna · Marrakech — nous nous déplaçons partout au Maroc.',
      cta: 'Réserver une date',
      alt: 'Radwane Es-Salhi — photographe Studio Salhi',
    },
    services: {
      eyebrow: 'Nos services',
      title: 'Un savoir-faire complet',
      sub: 'Chaque événement est unique. Nous adaptons notre regard et notre équipement à votre histoire, pour des images qui vous ressemblent.',
      items: [
        { key: 'mariage', title: 'Mariage', text: 'Du préparatif à la soirée, nous racontons l’histoire de votre grand jour avec discrétion et émotion.' },
        { key: 'fiancailles', title: 'Fiançailles', text: 'La magie de vos fiançailles, capturée dans des images naturelles et pleines de tendresse.' },
        { key: 'soirees', title: 'Soirées privées', text: 'Anniversaires, baptêmes, réceptions : une présence discrète pour des souvenirs éclatants.' },
        { key: 'evenements', title: 'Événements', text: 'Séminaires, inaugurations, spectacles : une couverture photo et vidéo professionnelle.' },
        { key: 'seance', title: 'Séance photo', text: 'Portraits, couples, familles : des séances en extérieur ou en studio, dans une ambiance détendue.' },
        { key: 'drone', title: 'Drone & Vidéo', text: 'Films de mariage, teasers pour les réseaux sociaux et vues aériennes spectaculaires par drone.' },
        { key: 'ecrivain', title: 'Écrivain public', text: "Rédaction et impression de documents administratifs, CV, lettres, demandes et photos d'identité." },
        { key: 'design', title: 'Design print', text: "Designs professionnels sous Photoshop et Illustrator : cartes de visite, affiches et publicités, posters, logos, invitations de mariages et d'événements." },
      ],
    },
    eventTypes: [
      { key: 'mariage', label: 'Mariage' },
      { key: 'fiancailles', label: 'Fiançailles' },
      { key: 'soiree', label: 'Soirée privée' },
      { key: 'evenement', label: 'Événement' },
      { key: 'seance', label: 'Séance photo' },
      { key: 'drone', label: 'Vidéo & Drone' },
      { key: 'autre', label: 'Autre' },
    ],
    gallery: {
      eyebrow: 'Galerie',
      title: 'Nos plus belles histoires',
      sub: 'Un aperçu de notre univers — mariages, fiançailles et événements capturés avec passion.',
      yourPhoto: 'Votre photo ici',
      noteStart: 'Espace réservé aux photos du studio — suivez-nous sur Instagram',
      noteEnd: 'pour découvrir nos dernières réalisations.',
    },
    pricing: {
      eyebrow: 'Tarifs',
      title: 'Des formules sur mesure',
      sub: 'Chaque projet est unique : contactez-nous pour un devis personnalisé et gratuit, adapté à votre événement et à votre budget.',
      onQuote: 'Sur devis',
      mostWanted: 'Le plus demandé',
      askQuote: 'Demander un devis',
      waQuote: (plan) => `Bonjour Studio Salhi, je souhaite un devis pour : ${plan}.`,
      plans: [
        { key: 'seance', name: 'Séance Photo', features: ['Séance en extérieur ou en studio', 'Photos retouchées en haute qualité', 'Galerie privée en ligne'] },
        { key: 'mariage', name: 'Mariage', features: ['Présence du matin jusqu’à la soirée', 'Photos + film de mariage', 'Album premium', 'Drone en option'] },
        { key: 'evenement', name: 'Événement & Drone', features: ['Soirées, séminaires & spectacles', 'Prises de vue drone', 'Teaser vidéo pour réseaux sociaux'] },
      ],
    },
    testimonials: {
      eyebrow: 'Avis clients',
      title: 'Ils nous ont confié leurs souvenirs',
      starsAria: '5 étoiles sur 5',
      reviews: [
        { name: 'Salma & Yassine', event: 'Mariage à Marrakech', text: 'Un travail remarquable du début à la fin. Les photos sont magnifiques et l’équipe a été discrète et professionnelle tout au long de la journée.' },
        { name: 'Khadija B.', event: 'Fiançailles', text: 'Nous avons adoré notre séance photo : une ambiance détendue, de beaux conseils, et un résultat qui nous ressemble. Je recommande les yeux fermés.' },
        { name: 'Mehdi R.', event: 'Soirée privée', text: 'Les prises de vue par drone ont bluffé tous nos invités. Un vrai sens du détail et une livraison rapide des photos et de la vidéo.' },
      ],
      disclaimer: 'Témoignages d’exemple — ils seront remplacés par les avis de vos vrais clients.',
    },
    booking: {
      eyebrow: 'Réservation',
      title: 'Réservez votre date',
      sub: 'Remplissez ce formulaire : votre demande est enregistrée et transmise instantanément sur WhatsApp. Nous vous répondons dans les plus brefs délais.',
      name: 'Nom complet *',
      phone: 'Téléphone *',
      type: 'Type d’événement',
      date: 'Date souhaitée *',
      city: 'Ville / lieu de l’événement',
      message: 'Votre message',
      phName: 'Votre nom',
      phPhone: '06 XX XX XX XX',
      phCity: 'Ex. Marrakech, Kelaa des Sraghna…',
      phMessage: 'Parlez-nous de votre projet : nombre d’invités, horaires, souhaits particuliers…',
      error: 'Merci de remplir au moins votre nom, votre téléphone et la date souhaitée.',
      submit: 'Envoyer via WhatsApp',
      note: 'Réponse rapide — 7 j/7',
      consentStart: 'En envoyant cette demande, vous acceptez notre ',
      consentLink: 'politique de confidentialité',
      successTitle: 'Demande envoyée !',
      successText: 'Votre demande a été enregistrée et WhatsApp s’est ouvert avec le récapitulatif. Il ne vous reste qu’à appuyer sur « envoyer ». À très vite !',
      another: 'Faire une autre demande',
      waBooking: (f) =>
        `Bonjour Studio Salhi, je souhaite réserver une date :\n` +
        `• Nom : ${f.nom}\n` +
        `• Téléphone : ${f.telephone}\n` +
        `• Événement : ${f.typeLabel}\n` +
        `• Date : ${f.date}\n` +
        `• Ville : ${f.ville || '—'}\n` +
        `• Message : ${f.message || '—'}\nMerci !`,
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Parlons de votre projet',
      zoneDetail: 'Basé à Attaouia, nous nous déplaçons dans tout le Maroc pour vos événements.',
      waHello: 'Bonjour Studio Salhi, je souhaite des informations.',
      cards: [
        { key: 'phone', title: 'Téléphone', cta: 'Appeler' },
        { key: 'whatsapp', title: 'WhatsApp', value: 'Discussion instantanée', cta: 'Discuter' },
        { key: 'instagram', title: 'Instagram', cta: 'Suivre' },
        { key: 'zone', title: 'Zone d’intervention', value: 'Attaouia · Kelaa des Sraghna · Marrakech', cta: 'Voir la carte' },
      ],
    },
    footer: {
      navTitle: 'Navigation',
      contactTitle: 'Contact direct',
      proSpace: 'Espace pro',
      privacy: 'Politique de confidentialité',
      rights: (year) => `© ${year} Studio Salhi — Tous droits réservés.`,
      giftNote: 'Site vitrine offert en cadeau — version template.',
    },
    privacy: {
      eyebrow: 'Transparence',
      title: 'Politique de confidentialité',
      updated: 'Dernière mise à jour : octobre 2026',
      intro:
        'Nous respectons votre vie privée. Cette page explique, simplement et clairement, quelles données nous collectons sur ce site et comment nous les utilisons.',
      back: "Retour à l'accueil",
      sections: [
        {
          title: 'Données collectées',
          text: 'Lorsque vous remplissez le formulaire de réservation, nous vous demandons uniquement les informations nécessaires au traitement de votre demande :',
          items: [
            'Nom complet',
            'Numéro de téléphone',
            "Type d'événement",
            'Date souhaitée',
            "Ville / lieu de l'événement",
            'Contenu de votre message (facultatif)',
          ],
        },
        {
          title: 'Utilisation de vos données',
          text: "Vos données servent à un seul but : traiter votre demande de réservation et échanger avec vous à son sujet. À l'envoi du formulaire, WhatsApp s'ouvre avec un message pré-rempli contenant le récapitulatif de votre demande, envoyé directement au téléphone du studio — c'est vous qui appuyez sur « envoyer ». Vos données ne sont utilisées à aucune fin marketing.",
        },
        {
          title: 'Où sont stockées vos données ?',
          text: "Une copie de votre demande est conservée localement dans votre navigateur (localStorage) pour apparaître dans l'« Espace pro » sur ce même appareil — il s'agit d'une fonction de démonstration du template. Aucune donnée n'est envoyée à un de nos serveurs ni à un tiers, à l'exception du message WhatsApp que vous envoyez vous-même.",
        },
        {
          title: 'Ce que nous ne faisons pas',
          items: [
            'Pas de comptes ni de mots de passe',
            'Pas de cookies de suivi (ni analytiques, ni publicitaires)',
            'Ni vente ni partage de vos données avec des tiers',
            'Aucun message promotionnel non sollicité',
          ],
        },
        {
          title: 'Vos droits',
          text: 'Vous pouvez à tout moment demander à consulter, corriger ou supprimer vos données en contactant directement le studio (téléphone ou WhatsApp — voir page « Contact »). Vous pouvez aussi effacer la copie locale en vidant les données de navigation de votre navigateur.',
        },
      ],
      templateNote:
        "Note : cette page est un modèle fourni avec le template — le propriétaire du site doit la relire et l'adapter à sa situation juridique avant la mise en ligne définitive.",
    },
    docServices: {
      eyebrow: 'Service supplémentaire',
      title: 'Écrivain public',
      sub: "Rédaction et impression de documents administratifs, CV, lettres et demandes, photos d'identité — vite et pro.",
      steps: [
        {
          n: '1',
          title: 'Envoyez vos documents',
          text: 'Via le formulaire : choisissez vos fichiers, le type de document et le nombre de copies.',
        },
        {
          n: '2',
          title: 'On imprime et prépare',
          text: 'Impression haute qualité et préparation soignée de vos documents.',
        },
        {
          n: '3',
          title: 'Recevez-les prêts',
          text: 'Récupérez vos documents prêts au studio.',
        },
      ],
      formTitle: 'Commandez vos documents',
      name: 'Nom complet *',
      phone: 'Téléphone *',
      docType: 'Type de document',
      files: 'Fichiers *',
      filesHint: 'PDF, JPG, PNG, DOC — plusieurs fichiers possibles',
      copies: 'Nombre de copies',
      notes: 'Notes',
      phName: 'Votre nom',
      phPhone: '06 XX XX XX XX',
      phNotes: "Détails : format des photos, langue du document...",
      error: 'Veuillez remplir le nom, le téléphone et choisir au moins un fichier.',
      submit: 'Envoyer via WhatsApp',
      attachHint: 'Après le clic, joignez vos fichiers directement dans la conversation WhatsApp.',
      consentStart: 'En envoyant cette demande, vous acceptez notre ',
      consentLink: 'politique de confidentialité',
      successTitle: 'Demande envoyée !',
      successText:
        'Votre demande est enregistrée et WhatsApp est ouvert avec le récapitulatif. Joignez vos fichiers dans la conversation puis appuyez sur « envoyer ».',
      another: 'Faire une autre demande',
      waDoc: (f) =>
        `Bonjour Studio Salhi, je souhaite le service d'écrivain public :\n` +
        `• Nom : ${f.nom}\n` +
        `• Téléphone : ${f.telephone}\n` +
        `• Type de document : ${f.typeLabel}\n` +
        `• Fichiers : ${f.files}\n` +
        `• Copies : ${f.copies}\n` +
        `• Notes : ${f.notes || '—'}\n` +
        `Je joins les fichiers dans la conversation. Merci !`,
      docTypes: [
        { key: 'admin', label: 'Documents administratifs' },
        { key: 'cv', label: 'CV' },
        { key: 'idphoto', label: "Photos d'identité" },
        { key: 'autre', label: 'Autre' },
      ],
    },
    docAdmin: {
      tabBookings: 'Réservations',
      tabDocs: 'Demandes de documents',
      title: 'Demandes de documents reçues',
      statuses: { new: 'Nouveau', preparing: 'En préparation', ready: 'Prêt' },
      emptyTitle: 'Aucune demande de document',
      emptyText: "Testez le formulaire « Écrivain public » sur la page d'accueil : la demande apparaîtra ici.",
      filesLabel: 'Fichiers',
      copiesLabel: 'Copies',
      notesLabel: 'Notes',
    },

    admin: {
      back: 'Retour au site',
      eyebrow: 'Espace pro',
      title: 'Réservations reçues',
      demoNote:
        'Version démo du template : les demandes envoyées depuis le formulaire de réservation sont enregistrées localement dans ce navigateur. Pour une vraie gestion multi-appareils, branchez un backend ou un Google Sheet (voir README).',
      statuses: { new: 'nouveau', confirmed: 'confirmé', done: 'terminé' },
      statusAria: 'Statut',
      deleteAria: 'Supprimer',
      confirmDelete: 'Supprimer cette réservation ?',
      emptyTitle: 'Aucune réservation pour le moment',
      emptyText: 'Testez le formulaire sur la page d’accueil : la demande apparaîtra ici et s’ouvrira aussi sur WhatsApp.',
      footerNote: 'Studio Salhi — Espace pro (template)',
    },
  },
}
