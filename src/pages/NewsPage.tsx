import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NewsPage: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      title: 'WRO2024 Japan Final Results in Toyama',
      date: '2024.09.08',
      category: 'COMPETITION',
      content: 'Our LEGO team participated in the national tournament in Toyama. The 3rd-year team "Merge sort" ranked 7th in the preliminary round (out of 36 teams) and advanced to the finals, finishing 19th overall. We will strive for even better results next year in the Senior category!',
      link: 'https://tyuto-science-club.blogspot.com/2024/09/wro2024-japan-in.html'
    },
    {
      id: 2,
      title: 'WRO2024 Regional Qualifier Results',
      date: '2024.08.27',
      category: 'COMPETITION',
      content: 'Five teams from our club participated in the WRO regionals. Team "Merge sort" secured 5th place and a ticket to the nationals! Other teams also fought hard: KANIKAMA (7th), DEBB_tag (11th), Over Load (14th), and Felling (17th).',
      link: 'https://tyuto-science-club.blogspot.com/2024/08/wro.html'
    },
    {
      id: 3,
      title: 'LEGO Team Activity Report - June',
      date: '2024.07.07',
      category: 'ACTIVITY',
      content: 'Preparation for the summer WRO qualifiers is in full swing. We welcomed four new 1st-year students this year, bringing fresh energy to the team. Senior members are finalizing their robots and focusing on programming.',
      link: 'https://tyuto-science-club.blogspot.com/2024/07/lego-6.html'
    },
    {
      id: 4,
      title: 'Electronics Team Activity Report',
      date: '2023.11.01',
      category: 'ACTIVITY',
      content: 'The 5th-year students are wrapping up their activities and preparing to hand over leadership. Junior members are creating individual projects every quarter.',
      link: 'https://tyuto-science-club.blogspot.com/2023/11/11_01724666491.html'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-white">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-24">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-16">NEWS</h1>
          
          <div className="max-w-4xl mx-auto">
            <div className="border-t border-gray-200">
              {newsItems.map((item) => (
                <article key={item.id} className="py-12 border-b border-gray-200 group">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/4 flex flex-col gap-2">
                      <span className="font-mono text-sm text-gray-500">{item.date}</span>
                      <span className="font-mono text-xs border border-gray-200 self-start px-2 py-1 text-gray-400">{item.category}</span>
                    </div>
                    <div className="md:w-3/4">
                      <h2 className="text-2xl font-bold mb-4 group-hover:text-gray-600 transition-colors">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-6 font-light">
                        {item.content}
                      </p>
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold uppercase tracking-widest hover:underline">
                        Read More <span className="ml-2">↗</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewsPage;
