'use client';
import {useTranslations} from 'next-intl';
import {useState} from 'react';
import {Link} from '@/routing';

const models = {
  international: [
    {name: 'GPT-4', price: 30, provider: 'OpenAI', logo: '🤖'},
    {name: 'Claude Opus', price: 15, provider: 'Anthropic', logo: '🧠'},
    {name: 'Gemini Pro', price: 7, provider: 'Google', logo: '✨'}
  ],
  chinese: [
    {name: '通义千问', price: 0.11, provider: 'Alibaba', logo: '🚀', savings: 99.6},
    {name: 'DeepSeek', price: 0.14, provider: 'DeepSeek', logo: '⚡', savings: 99.5},
    {name: '文心一言', price: 0.17, provider: 'Baidu', logo: '🔥', savings: 99.4},
    {name: '智谱GLM-4', price: 0.70, provider: 'Zhipu', logo: '💎', savings: 97.7}
  ]
};

export default function Home() {
  const t = useTranslations('home');
  const [usage, setUsage] = useState(100);

  const gpt4Price = 30;
  const cheapestChinese = 0.11;
  const monthlySavings = ((gpt4Price - cheapestChinese) * usage).toFixed(0);
  const yearlySavings = (monthlySavings * 12).toFixed(0);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />

      <nav className="relative z-10 p-6 flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">AI Model Hub</h1>
        <div className="flex gap-3">
          <Link href="/" locale="en" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition">EN</Link>
          <Link href="/" locale="zh" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition">中文</Link>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30">
            <span className="text-purple-300 text-sm font-semibold">💰 SAVE UP TO 99.6% ON AI COSTS</span>
          </div>
          <h2 className="text-6xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
            Stop Overpaying for AI
          </h2>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
            Chinese AI models deliver the same quality at <span className="text-green-400 font-bold">1/100th the price</span>
          </p>
        </div>

        <div className="mb-20 bg-gradient-to-br from-red-500/10 to-orange-500/10 border-2 border-red-500/30 rounded-2xl p-10">
          <div className="text-center mb-8">
            <div className="text-5xl font-black text-red-400 mb-2">YOU'RE LOSING</div>
            <div className="text-8xl font-black bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-4">
              ${monthlySavings}<span className="text-4xl">/mo</span>
            </div>
            <div className="text-2xl text-gray-300">
              That's <span className="text-yellow-400 font-bold">${yearlySavings}/year</span> down the drain
            </div>
          </div>

          <div className="bg-black/40 rounded-xl p-6 backdrop-blur">
            <label className="block text-center text-lg mb-4 text-gray-300">
              Your monthly usage (million tokens):
            </label>
            <input
              type="range"
              min="10"
              max="1000"
              step="10"
              value={usage}
              onChange={(e) => setUsage(Number(e.target.value))}
              className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
            />
            <div className="text-center mt-4 text-4xl font-bold text-purple-400">{usage}M tokens</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur rounded-2xl p-8 border border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl font-bold text-red-400">❌ What You Pay Now</h3>
            </div>
            <div className="space-y-4">
              {models.international.map(m => (
                <div key={m.name} className="flex items-center justify-between p-4 bg-black/40 rounded-xl">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{m.logo}</span>
                    <div>
                      <div className="font-bold text-lg">{m.name}</div>
                      <div className="text-sm text-gray-400">{m.provider}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black text-red-400">${m.price}</div>
                    <div className="text-xs text-gray-500">per 1M tokens</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur rounded-2xl p-8 border-2 border-green-500/50 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-green-500 text-black px-4 py-2 rounded-full font-black text-sm rotate-12">
              BEST DEAL
            </div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl font-bold text-green-400">✅ What You Should Pay</h3>
            </div>
            <div className="space-y-4">
              {models.chinese.map(m => (
                <div key={m.name} className="flex items-center justify-between p-4 bg-black/40 rounded-xl border border-green-500/20">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{m.logo}</span>
                    <div>
                      <div className="font-bold text-lg">{m.name}</div>
                      <div className="text-sm text-gray-400">{m.provider}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black text-green-400">${m.price}</div>
                    <div className="text-xs text-green-400 font-bold">SAVE {m.savings}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 shadow-2xl">
          <h3 className="text-4xl font-black mb-6">Ready to Stop Wasting Money?</h3>
          <p className="text-xl mb-8 text-purple-100">Get instant access to Chinese AI models</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-4 bg-white text-purple-600 rounded-xl font-black text-lg hover:bg-gray-100 transition transform hover:scale-105">
              🚀 Start Saving Now
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur rounded-xl font-bold text-lg hover:bg-white/20 transition border border-white/30">
              📚 View Setup Guide
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
