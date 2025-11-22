import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NewsPage: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      title: 'WRO2024 Japan Final Results in Toyama',
      date: '2024-09-08',
      category: 'Competition',
      content: 'Our LEGO team participated in the national tournament in Toyama. The 3rd-year team "Merge sort" ranked 7th in the preliminary round (out of 36 teams) and advanced to the finals, finishing 19th overall. We will strive for even better results next year in the Senior category!',
      link: 'https://tyuto-science-club.blogspot.com/2024/09/wro2024-japan-in.html'
    },
    {
      id: 2,
      title: 'WRO2024 Regional Qualifier Results',
      date: '2024-08-27',
      category: 'Competition',
      content: 'Five teams from our club participated in the WRO regionals. Team "Merge sort" secured 5th place and a ticket to the nationals! Other teams also fought hard: KANIKAMA (7th), DEBB_tag (11th), Over Load (14th), and Felling (17th).',
      link: 'https://tyuto-science-club.blogspot.com/2024/08/wro.html'
    },
    {
      id: 3,
      title: 'LEGO Team Activity Report - June',
      date: '2024-07-07',
      category: 'Activity',
      content: 'Preparation for the summer WRO qualifiers is in full swing. We welcomed four new 1st-year students this year, bringing fresh energy to the team. Senior members are finalizing their robots and focusing on programming.',
      link: 'https://tyuto-science-club.blogspot.com/2024/07/lego-6.html'
    },
    {
      id: 4,
      title: 'Electronics Team Activity Report',
      date: '2023-11-01',
      category: 'Activity',
      content: 'The 5th-year students are wrapping up their activities and preparing to hand over leadership. Junior members are creating individual projects every quarter.',
      link: 'https://tyuto-science-club.blogspot.com/2023/11/11_01724666491.html'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">Latest News</h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {newsItems.map((item) => (
            <article key={item.id} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800 hover:text-blue-700">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
                </h2>
                <div className="flex items-center mt-2 sm:mt-0 space-x-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">{item.category}</span>
                  <span className="text-gray-500 text-sm">{item.date}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                {item.content}
              </p>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center">
                Read Original Post (Blog) &rarr;
              </a>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewsPage;
