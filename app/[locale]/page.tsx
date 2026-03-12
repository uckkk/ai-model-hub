'use client';
import {useTranslations} from 'next-intl';
import {useState} from 'react';
import {Link} from '@/routing';

const models = {
  international: [
    {name: 'GPT-4', price: 30, provider: 'OpenAI'},
    {name: 'Claude Opus', price: 15, provider: 'Anthropic'},
    {name: 'Gemini Pro', price: 7, provider: 'Google'}
  ],
  chinese: [
    {name: '通义千问', price: 0.11, provider: 'Alibaba'},
    {name: '文心一言', price: 0.17, provider: 'Baidu'},
    {name: 'DeepSeek', price: 0.14, provider: 'DeepSeek'},
    {name: '智谱GLM-4', price: 0.70, provider: 'Zhipu'}
  ]
};

export default function Home() {
  const t = useTranslations('home');
  const [usage, setUsage] = useState(10);
  const [current, setCurrent] = useState('GPT-4');
  const [switchTo, setSwitchTo] = useState('通义千问');

  const currentPrice = [...models.international, ...models.chinese].find(m => m.name === current)?.price || 30;
  const switchPrice = [...models.international, ...models.chinese].find(m => m.name === switchTo)?.price || 0.11;
  const savings = ((currentPrice - switchPrice) * usage).toFixed(2);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <nav className="p-4 flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">AI Model Hub</h1>
        <div className="flex gap-2">
          <Link href="/" locale="en" className="px-3 py-1 rounded hover:bg-gray-100">EN</Link>
          <Link href="/" locale="zh" className="px-3 py-1 rounded hover:bg-gray-100">中文</Link>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{t('title')}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">{t('subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4">{t('international')}</h3>
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">{t('model')}</th>
                  <th className="text-right py-2">{t('price')}</th>
                </tr>
              </thead>
              <tbody>
                {models.international.map(m => (
                  <tr key={m.name} className="border-b">
                    <td className="py-2">{m.name}</td>
                    <td className="text-right">${m.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4">{t('chinese')}</h3>
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">{t('model')}</th>
                  <th className="text-right py-2">{t('price')}</th>
                  <th className="text-right py-2">{t('savings')}</th>
                </tr>
              </thead>
              <tbody>
                {models.chinese.map(m => (
                  <tr key={m.name} className="border-b">
                    <td className="py-2">{m.name}</td>
                    <td className="text-right">${m.price}</td>
                    <td className="text-right text-green-600">-{((1 - m.price/30) * 100).toFixed(0)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-xl p-8 text-white">
          <h3 className="text-3xl font-bold mb-6">{t('calculator.title')}</h3>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block mb-2">{t('calculator.usage')}</label>
              <input 
                type="number" 
                value={usage} 
                onChange={(e) => setUsage(Number(e.target.value))}
                className="w-full p-2 rounded text-black"
              />
            </div>
            <div>
              <label className="block mb-2">{t('calculator.current')}</label>
              <select value={current} onChange={(e) => setCurrent(e.target.value)} className="w-full p-2 rounded text-black">
                {[...models.international, ...models.chinese].map(m => (
                  <option key={m.name} value={m.name}>{m.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-2">{t('calculator.switch')}</label>
              <select value={switchTo} onChange={(e) => setSwitchTo(e.target.value)} className="w-full p-2 rounded text-black">
                {[...models.international, ...models.chinese].map(m => (
                  <option key={m.name} value={m.name}>{m.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">{t('calculator.result', {amount: savings})}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
