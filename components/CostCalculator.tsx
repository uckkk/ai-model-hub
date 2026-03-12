'use client';

import {useState} from 'react';
import {useTranslations} from 'next-intl';
import {models, calculateSavings} from '@/lib/models';

export default function CostCalculator() {
  const t = useTranslations('calculator');
  const [monthlyTokens, setMonthlyTokens] = useState(100);
  const [currentModel, setCurrentModel] = useState('gpt4');
  const [savings, setSavings] = useState<{model: string; amount: number}[]>([]);

  const handleCalculate = () => {
    const alternatives = models
      .filter(m => m.id !== currentModel)
      .map(m => ({
        model: m.name,
        amount: calculateSavings(currentModel, m.id, monthlyTokens)
      }))
      .filter(s => s.amount > 0)
      .sort((a, b) => b.amount - a.amount)
      .slice(0, 5);
    setSavings(alternatives);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold mb-6">{t('title')}</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium mb-2">{t('monthlyTokens')}</label>
          <input
            type="number"
            value={monthlyTokens}
            onChange={(e) => setMonthlyTokens(Number(e.target.value))}
            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">{t('currentModel')}</label>
          <select
            value={currentModel}
            onChange={(e) => setCurrentModel(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
          >
            {models.map(m => (
              <option key={m.id} value={m.id}>{m.name}</option>
            ))}
          </select>
        </div>
      </div>
      <button
        onClick={handleCalculate}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
      >
        {t('calculate')}
      </button>
      {savings.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-bold mb-4">{t('potentialSavings')}</h3>
          <div className="space-y-3">
            {savings.map((s, i) => (
              <div key={i} className="flex justify-between items-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <span className="font-medium">{s.model}</span>
                <span className="text-green-600 dark:text-green-400 font-bold text-xl">
                  ${s.amount.toFixed(2)}/month
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
