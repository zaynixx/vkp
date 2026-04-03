import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  en: {
    nav: {
      home: 'Home',
      technology: 'Technology',
      process: 'Process',
      benefits: 'Benefits',
      industries: 'Industries',
      partners: 'Partners',
      contact: 'Contact',
      gallery: 'Gallery'
    },
    hero: {
      subtitle: 'We Guarantee Results',
      title: 'Full Recovery of Heavy-Duty Crankshafts',
      description: 'World\'s only patented electric arc metallization technology for locomotive and marine diesel engine crankshafts',
      cta: 'Get a Quote',
      learnMore: 'Learn More'
    },
    about: {
      title: 'Precision Engineering Excellence',
      description: 'We restore heavy-duty crankshafts to drawing dimensions. Our engineers have developed the world\'s only, unique electric arc metallization technology using powder materials, which ensures complete recovery of the crankshaft performance.',
      highlight: 'Increases surface hardness by 2x and reduces friction coefficient by 70%'
    },
    technology: {
      title: 'Our Patented Technology',
      subtitle: 'A Universal Solution',
      description: 'Our method is a universal solution both technologically and economically. While preventing common problems associated with the process of arc metallization using powder materials, we offer a guaranteed restoration of the crankshaft.',
      features: {
        dimensions: {
          title: 'Drawing Dimensions',
          description: 'Restoration to exact original specifications equals purchasing a new crankshaft'
        },
        complex: {
          title: 'Own Technological Complex',
          description: '800m² production base developed according to our know-how'
        },
        performance: {
          title: 'Improved Performance',
          description: '50-70% improvement in operational characteristics with 3+ year warranty'
        }
      }
    },
    process: {
      title: 'The Restoration Process',
      subtitle: 'From Damaged to Perfected',
      steps: [
        { title: 'Delivery', description: 'The crankshaft suffers damage. You deliver the damaged crankshaft to our production base.' },
        { title: 'Inspection', description: 'We disassemble and inspect the crankshaft. Then we wash it on a specially designed high-pressure apparatus.' },
        { title: 'Flaw Detection', description: 'We conduct flaw detection for cracks in journals and diagnose deflection presence.' },
        { title: 'Expert Opinion', description: 'Issuance of expert opinion on the crankshaft condition and possibilities for further work.' },
        { title: 'Surface Preparation', description: 'The crankshaft surface is treated with our specially developed chemical substance.' },
        { title: 'Arc Metallization', description: 'Restoration using our unique powder material combination that improves shaft characteristics.' },
        { title: 'Grinding & Polishing', description: 'Final grinding and polishing to achieve perfect surface finish.' },
        { title: 'Balancing & Delivery', description: 'Control inspection, final diagnostics, assembly and delivery to your warehouse.' }
      ]
    },
    results: {
      title: 'The Result',
      newShaft: 'New Shaft Surface Hardness',
      restoredShaft: 'Restored Shaft Surface Hardness',
      improvement: 'Surface hardness improvement'
    },
    industries: {
      title: 'Industries We Serve',
      subtitle: 'Locomotive & Marine Excellence',
      locomotive: {
        title: 'Locomotive Engines',
        description: 'Complete restoration of diesel locomotive crankshafts with up to 4 years warranty or 300,000 km'
      },
      marine: {
        title: 'Marine Diesel Engines',
        description: 'Heavy-duty marine crankshaft restoration for vessels and maritime applications'
      }
    },
    warranty: {
      title: 'Up to 4 Years of Warranty',
      subtitle: 'How many manufacturers can offer you this?',
      description: 'Our technology enables us to provide up to 4 years of international warranty or 300,000 km on restored journal surfaces.',
      note: 'The factual duration of warranty is approved after our inspection of your crankshaft.'
    },
    partners: {
      title: 'Our International Partners',
      subtitle: 'Trusted by Industry Leaders'
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Ready to restore your crankshaft?',
      email: 'For Official Letters',
      phone: 'Phone',
      website: 'Website'
    },
    footer: {
      rights: 'All Rights Reserved',
      company: 'Alliance Group - The Industrial-Commercial Enterprise'
    }
  },
  ua: {
    nav: {
      home: 'Головна',
      technology: 'Технологія',
      process: 'Процес',
      benefits: 'Переваги',
      industries: 'Галузі',
      partners: 'Партнери',
      contact: 'Контакти',
      gallery: 'Галерея'
    },
    hero: {
      subtitle: 'Ми гарантуємо результат',
      title: 'Повне відновлення важконавантажених колінчастих валів',
      description: 'Єдина у світі запатентована технологія електродугової металізації для колінчастих валів локомотивів та суднових дизельних двигунів',
      cta: 'Отримати пропозицію',
      learnMore: 'Дізнатися більше'
    },
    about: {
      title: 'Досконалість точного машинобудування',
      description: 'Ми відновлюємо важконавантажені колінчасті вали до креслярських розмірів. Наші інженери розробили єдину у світі унікальну технологію електродугової металізації з використанням порошкових матеріалів, яка забезпечує повне відновлення працездатності колінчастого вала.',
      highlight: 'Збільшує твердість поверхні у 2 рази та знижує коефіцієнт тертя на 70%'
    },
    technology: {
      title: 'Наша запатентована технологія',
      subtitle: 'Універсальне рішення',
      description: 'Наш метод є універсальним рішенням як технологічно, так і економічно. Запобігаючи типовим проблемам процесу електродугової металізації з використанням порошкових матеріалів, ми пропонуємо гарантоване відновлення колінчастого вала.',
      features: {
        dimensions: {
          title: 'Креслярські розміри',
          description: 'Відновлення до точних оригінальних специфікацій дорівнює придбанню нового колінчастого вала'
        },
        complex: {
          title: 'Власний технологічний комплекс',
          description: 'Виробнича база 800м², розроблена згідно з нашими ноу-хау'
        },
        performance: {
          title: 'Покращені характеристики',
          description: 'Покращення експлуатаційних характеристик на 50-70% з гарантією 3+ роки'
        }
      }
    },
    process: {
      title: 'Процес відновлення',
      subtitle: 'Від пошкодженого до досконалого',
      steps: [
        { title: 'Доставка', description: 'Колінчастий вал пошкоджено. Ви доставляєте пошкоджений колінчастий вал на нашу виробничу базу.' },
        { title: 'Інспекція', description: 'Ми розбираємо та оглядаємо колінчастий вал. Потім миємо його на спеціально розробленому апараті високого тиску.' },
        { title: 'Дефектоскопія', description: 'Проводимо дефектоскопію на наявність тріщин у шийках та діагностуємо наявність прогину.' },
        { title: 'Експертний висновок', description: 'Видача експертного висновку про стан колінчастого вала та можливості подальшої роботи.' },
        { title: 'Підготовка поверхні', description: 'Поверхня колінчастого вала обробляється нашою спеціально розробленою хімічною речовиною.' },
        { title: 'Електродугова металізація', description: 'Відновлення з використанням нашої унікальної комбінації порошкових матеріалів, що покращує характеристики вала.' },
        { title: 'Шліфування та полірування', description: 'Фінішне шліфування та полірування для досягнення ідеальної поверхні.' },
        { title: 'Балансування та доставка', description: 'Контрольна перевірка, фінальна діагностика, збірка та доставка на ваш склад.' }
      ]
    },
    results: {
      title: 'Результат',
      newShaft: 'Твердість поверхні нового вала',
      restoredShaft: 'Твердість поверхні відновленого вала',
      improvement: 'Покращення твердості поверхні'
    },
    industries: {
      title: 'Галузі, які ми обслуговуємо',
      subtitle: 'Локомотиви та судна',
      locomotive: {
        title: 'Локомотивні двигуни',
        description: 'Повне відновлення колінчастих валів дизельних локомотивів з гарантією до 4 років або 300 000 км'
      },
      marine: {
        title: 'Суднові дизельні двигуни',
        description: 'Відновлення важконавантажених суднових колінчастих валів для суден та морського застосування'
      }
    },
    warranty: {
      title: 'До 4 років гарантії',
      subtitle: 'Скільки виробників можуть вам це запропонувати?',
      description: 'Наша технологія дозволяє надавати до 4 років міжнародної гарантії або 300 000 км на відновлені поверхні шийок.',
      note: 'Фактична тривалість гарантії затверджується після нашої інспекції вашого колінчастого вала.'
    },
    partners: {
      title: 'Наші міжнародні партнери',
      subtitle: 'Нам довіряють лідери галузі'
    },
    contact: {
      title: 'Зв\'яжіться з нами',
      subtitle: 'Готові відновити ваш колінчастий вал?',
      email: 'Для офіційних листів',
      phone: 'Телефон',
      website: 'Вебсайт'
    },
    footer: {
      rights: 'Всі права захищені',
      company: 'Alliance Group - Виробничо-комерційне підприємство'
    }
  },
  ru: {
    disclaimer: 'ВАЖНОЕ УВЕДОМЛЕНИЕ: Мы не сотрудничаем с российской федерацией. Русский язык представлен исключительно для наших русскоязычных партнёров из стран Балтии, Ближнего Востока и других регионов. россия — государство-террорист.',
    nav: {
      home: 'Главная',
      technology: 'Технология',
      process: 'Процесс',
      benefits: 'Преимущества',
      industries: 'Отрасли',
      partners: 'Партнёры',
      contact: 'Контакты',
      gallery: 'Галерея'
    },
    hero: {
      subtitle: 'Мы гарантируем результат',
      title: 'Полное восстановление тяжелонагруженных коленчатых валов',
      description: 'Единственная в мире запатентованная технология электродуговой металлизации для коленчатых валов локомотивов и судовых дизельных двигателей',
      cta: 'Получить предложение',
      learnMore: 'Узнать больше'
    },
    about: {
      title: 'Совершенство точного машиностроения',
      description: 'Мы восстанавливаем тяжелонагруженные коленчатые валы до чертёжных размеров. Наши инженеры разработали единственную в мире уникальную технологию электродуговой металлизации с использованием порошковых материалов, которая обеспечивает полное восстановление работоспособности коленчатого вала.',
      highlight: 'Увеличивает твёрдость поверхности в 2 раза и снижает коэффициент трения на 70%'
    },
    technology: {
      title: 'Наша запатентованная технология',
      subtitle: 'Универсальное решение',
      description: 'Наш метод является универсальным решением как технологически, так и экономически. Предотвращая типичные проблемы процесса электродуговой металлизации с использованием порошковых материалов, мы предлагаем гарантированное восстановление коленчатого вала.',
      features: {
        dimensions: {
          title: 'Чертёжные размеры',
          description: 'Восстановление до точных оригинальных спецификаций равнозначно приобретению нового коленчатого вала'
        },
        complex: {
          title: 'Собственный технологический комплекс',
          description: 'Производственная база 800м², разработанная согласно нашим ноу-хау'
        },
        performance: {
          title: 'Улучшенные характеристики',
          description: 'Улучшение эксплуатационных характеристик на 50-70% с гарантией 3+ года'
        }
      }
    },
    process: {
      title: 'Процесс восстановления',
      subtitle: 'От повреждённого до совершенного',
      steps: [
        { title: 'Доставка', description: 'Коленчатый вал повреждён. Вы доставляете повреждённый коленчатый вал на нашу производственную базу.' },
        { title: 'Инспекция', description: 'Мы разбираем и осматриваем коленчатый вал. Затем моем его на специально разработанном аппарате высокого давления.' },
        { title: 'Дефектоскопия', description: 'Проводим дефектоскопию на наличие трещин в шейках и диагностируем наличие прогиба.' },
        { title: 'Экспертное заключение', description: 'Выдача экспертного заключения о состоянии коленчатого вала и возможностях дальнейшей работы.' },
        { title: 'Подготовка поверхности', description: 'Поверхность коленчатого вала обрабатывается нашим специально разработанным химическим веществом.' },
        { title: 'Электродуговая металлизация', description: 'Восстановление с использованием нашей уникальной комбинации порошковых материалов, улучшающей характеристики вала.' },
        { title: 'Шлифовка и полировка', description: 'Финишная шлифовка и полировка для достижения идеальной поверхности.' },
        { title: 'Балансировка и доставка', description: 'Контрольная проверка, финальная диагностика, сборка и доставка на ваш склад.' }
      ]
    },
    results: {
      title: 'Результат',
      newShaft: 'Твёрдость поверхности нового вала',
      restoredShaft: 'Твёрдость поверхности восстановленного вала',
      improvement: 'Улучшение твёрдости поверхности'
    },
    industries: {
      title: 'Отрасли, которые мы обслуживаем',
      subtitle: 'Локомотивы и суда',
      locomotive: {
        title: 'Локомотивные двигатели',
        description: 'Полное восстановление коленчатых валов дизельных локомотивов с гарантией до 4 лет или 300 000 км'
      },
      marine: {
        title: 'Судовые дизельные двигатели',
        description: 'Восстановление тяжелонагруженных судовых коленчатых валов для судов и морского применения'
      }
    },
    warranty: {
      title: 'До 4 лет гарантии',
      subtitle: 'Сколько производителей могут вам это предложить?',
      description: 'Наша технология позволяет предоставлять до 4 лет международной гарантии или 300 000 км на восстановленные поверхности шеек.',
      note: 'Фактическая продолжительность гарантии утверждается после нашей инспекции вашего коленчатого вала.'
    },
    partners: {
      title: 'Наши международные партнёры',
      subtitle: 'Нам доверяют лидеры отрасли'
    },
    contact: {
      title: 'Свяжитесь с нами',
      subtitle: 'Готовы восстановить ваш коленчатый вал?',
      email: 'Для официальных писем',
      phone: 'Телефон',
      website: 'Вебсайт'
    },
    footer: {
      rights: 'Все права защищены',
      company: 'Alliance Group - Производственно-коммерческое предприятие'
    }
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const saved = localStorage.getItem('alliance-lang');
    if (saved && translations[saved]) {
      setLanguage(saved);
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('alliance-lang', lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}