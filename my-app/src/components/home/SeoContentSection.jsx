import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const contentByLanguage = {
  en: {
    eyebrow: 'Industrial SEO Content',
    title: 'Crankshaft Restoration for Marine Diesel and Locomotive Engines',
    intro:
      'Alliance Group provides crankshaft restoration services for heavy-duty marine diesel engines and locomotive engines. Our team restores worn and damaged crankshaft journals to drawing dimensions using patented electric arc metallization, precision grinding, polishing, balancing, and final inspection.',
    paragraphs: [
      'Companies searching for crankshaft restoration, crankshaft repair, marine diesel crankshaft repair, or locomotive crankshaft restoration need a contractor that can recover geometry, surface hardness, and operational reliability. We focus on industrial crankshaft recovery for demanding operating conditions where downtime, replacement cost, and delivery time directly affect fleet availability.',
      'Our restoration process covers inspection, crack detection, surface preparation, metallization, machining, and quality control. This allows Alliance Group to deliver crankshaft repair solutions for shipping operators, locomotive maintenance companies, industrial diesel owners, and technical partners who need a practical alternative to purchasing a new crankshaft.',
      'If you are looking for electric arc metallization for crankshafts, heavy-duty crankshaft repair in Europe, or a contractor for marine and locomotive crankshaft restoration with warranty support, our production team can review the shaft condition and prepare a commercial proposal.',
    ],
    items: [
      {
        title: 'Marine Diesel Crankshaft Repair',
        text: 'Restoration of crankshafts for marine diesel engines, vessel power systems, and industrial maritime applications.',
      },
      {
        title: 'Locomotive Crankshaft Restoration',
        text: 'Repair and recovery of heavy-duty locomotive crankshafts with certified process control and final dimensional restoration.',
      },
      {
        title: 'Electric Arc Metallization',
        text: 'Patented powder-based electric arc metallization technology designed to rebuild crankshaft journal surfaces under heavy load conditions.',
      },
    ],
  },
  ua: {
    eyebrow: 'Промислова експертиза',
    title: 'Відновлення колінчастих валів для суднових і локомотивних дизельних двигунів',
    intro:
      'Alliance Group виконує відновлення колінчастих валів для важконавантажених суднових дизельних двигунів і локомотивних двигунів. Ми відновлюємо зношені та пошкоджені шийки колінчастих валів до креслярських розмірів із застосуванням запатентованої електродугової металізації, точного шліфування, полірування, балансування та фінального контролю.',
    paragraphs: [
      'Для замовників, яким потрібне відновлення колінчастого вала, ремонт колінчастого вала суднового дизеля або відновлення локомотивного колінчастого вала, ключовими є точність геометрії, твердість поверхні та експлуатаційна надійність. Ми працюємо з важконавантаженими валами, де час простою та вартість заміни безпосередньо впливають на роботу техніки.',
      'Наш процес охоплює вхідну інспекцію, дефектоскопію, підготовку поверхні, металізацію, механічну обробку та контроль якості. Це дозволяє пропонувати практичне рішення для суднових операторів, локомотивних депо, промислових підприємств і технічних партнерів, яким потрібна альтернатива купівлі нового вала.',
      'Якщо вам потрібне відновлення колінчастого вала в Європі, електродугова металізація шийок або технічний партнер для ремонту важконавантажених валів із гарантією, ми можемо виконати оцінку стану та підготувати комерційну пропозицію.',
    ],
    items: [
      {
        title: 'Ремонт суднових колінчастих валів',
        text: 'Відновлення валів для суднових дизельних двигунів, енергетичних установок і морських застосувань.',
      },
      {
        title: 'Відновлення локомотивних валів',
        text: 'Ремонт і відновлення важконавантажених локомотивних валів із контролем геометрії та фінальною діагностикою.',
      },
      {
        title: 'Електродугова металізація',
        text: 'Запатентована порошкова технологія відновлення поверхні шийок колінчастого вала для високих навантажень.',
      },
    ],
  },
  ru: {
    eyebrow: 'Промышленная экспертиза',
    title: 'Восстановление коленчатых валов для судовых и локомотивных дизельных двигателей',
    intro:
      'Alliance Group выполняет восстановление коленчатых валов для тяжелонагруженных судовых дизельных и локомотивных двигателей. Мы восстанавливаем изношенные и поврежденные шейки коленчатого вала до чертежных размеров с применением запатентованной электродуговой металлизации, точной шлифовки, полировки, балансировки и финального контроля.',
    paragraphs: [
      'Для компаний, которым нужен ремонт коленчатого вала, восстановление коленчатого вала судового дизеля или ремонт локомотивного коленвала, важны точность геометрии, твердость поверхности и эксплуатационная надежность. Мы работаем с тяжелонагруженными валами, где простой оборудования и стоимость замены напрямую влияют на работу техники.',
      'Наш процесс включает входную инспекцию, дефектоскопию, подготовку поверхности, металлизацию, механическую обработку и контроль качества. Это позволяет предлагать практичное решение для судовых операторов, локомотивных предприятий, промышленных компаний и технических партнеров, которым нужна альтернатива покупке нового вала.',
      'Если вам требуется восстановление коленчатого вала в Европе, электродуговая металлизация шеек или подрядчик для ремонта тяжелонагруженных валов с гарантией, мы можем провести оценку состояния и подготовить коммерческое предложение.',
    ],
    items: [
      {
        title: 'Ремонт судовых коленчатых валов',
        text: 'Восстановление валов для судовых дизельных двигателей, энергетических установок и морских применений.',
      },
      {
        title: 'Восстановление локомотивных валов',
        text: 'Ремонт и восстановление тяжелонагруженных локомотивных валов с контролем геометрии и итоговой диагностикой.',
      },
      {
        title: 'Электродуговая металлизация',
        text: 'Запатентованная порошковая технология восстановления поверхности шеек коленчатого вала для высоких нагрузок.',
      },
    ],
  },
};

export default function SeoContentSection() {
  const { language } = useLanguage();
  const content = contentByLanguage[language] || contentByLanguage.en;

  return (
    <section className="py-24 bg-gradient-to-b from-[#191919] to-[#111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl"
        >
          <span className="text-[#c9a227] text-sm tracking-[0.3em] uppercase">{content.eyebrow}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-8">{content.title}</h2>
          <p className="text-white text-lg leading-8 mb-6">{content.intro}</p>
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-gray-400 text-lg leading-8 mb-5">
              {paragraph}
            </p>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {content.items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="border border-[#333] bg-[#181818] p-8"
            >
              <h3 className="text-xl font-semibold text-[#c9a227] mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-7">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
