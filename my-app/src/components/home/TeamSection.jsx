import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Youriy Podkolzin',
    title: 'Founder & CEO',
    bio: 'Founder, CEO and ideological inspirer of the company. An engineer with 40+ years of experience in manufacturing and business. A pioneer in the application of technology, which was previously used in the overhaul of car engines, to restore precisely heavily loaded crankshafts. He began experiments in this area in 2004, and after 2 years he achieved the first results, after which he brought the technology to the market, founding the LLC Alliance Group company.',
    photo: 'https://media.base44.com/images/public/693dbb5c06105ba5b9f6dfbe/26af52277_generated_image.png',
    initials: 'YP',
  },
  {
    name: 'Iegor Podkolzin',
    title: 'Co-Founder & Executive Director',
    bio: 'Co-founder, executive director of the company. Certified financier and technology patent holder. He has 15+ years of experience in Ukrainian and foreign companies in the field of railway transport services and finance.',
    photo: 'https://media.base44.com/images/public/693dbb5c06105ba5b9f6dfbe/1ddf89cf1_generated_image.png',
    initials: 'IP',
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[#c9a227] text-sm tracking-[0.3em] uppercase">Leadership</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Our Team</h2>
          <div className="w-24 h-1 bg-[#c9a227] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#222] border border-[#333] p-8 hover:border-[#c9a227]/50 transition-colors duration-300"
            >
              <div className="flex items-start gap-6">
                {/* Avatar */}
                <div className="flex-shrink-0 w-24 h-24 rounded-full overflow-hidden border-2 border-[#c9a227]/40">
                  {member.photo ? (
                    <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-[#c9a227]/10 flex items-center justify-center">
                      <span className="text-[#c9a227] font-bold text-2xl">{member.initials}</span>
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-[#c9a227] text-sm uppercase tracking-wider mb-4">{member.title}</p>
                  <div className="w-12 h-0.5 bg-[#c9a227]/40 mb-4" />
                  <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}