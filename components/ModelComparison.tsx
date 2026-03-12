'use client';

import {useTranslations} from 'next-intl';
import {models} from '@/lib/models';

export default function ModelComparison() {
  const t = useTranslations('comparison');

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold mb-6">{t('title')}</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-200 dark:border-gray-700">
              <th className="text-left py-3 px-4">{t('model')}</th>
              <th className="text-left py-3 px-4">{t('provider')}</th>
              <th className="text-left py-3 px-4">{t('region')}</th>
              <th className="text-right py-3 px-4">{t('price')}</th>
              <th className="text-right py-3 px-4">{t('performance')}</th>
            </tr>
          </thead>
          <tbody>
            {models.map((model) => (
              <tr key={model.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="py-3 px-4">
                  <a href={model.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {model.name}
                  </a>
                </td>
                <td className="py-3 px-4">{model.provider}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded text-sm ${
                    model.region === 'china'
                      ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  }`}>
                    {model.region === 'china' ? t('china') : t('global')}
                  </span>
                </td>
                <td className="py-3 px-4 text-right font-mono">${model.pricePerMillion.toFixed(2)}</td>
                <td className="py-3 px-4 text-right">{model.performanceScore}/100</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
