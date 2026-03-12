import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/routing';
import '../globals.css';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  return {
    title: locale === 'zh' ? 'AI模型价格对比 - 发现便宜10-100倍的中国AI模型' : 'AI Model Price Comparison - Discover Chinese AI Models 10-100x Cheaper',
    description: locale === 'zh' ? '对比GPT-4、Claude等国际模型与通义千问、文心一言等中国模型的价格。使用省钱计算器，每月节省数百美元。' : 'Compare prices of GPT-4, Claude vs Chinese AI models like Qwen, Wenxin. Use our savings calculator and save hundreds per month.',
    keywords: locale === 'zh' ? 'AI模型,价格对比,通义千问,文心一言,DeepSeek,便宜AI,GPT-4替代' : 'cheap AI models,Chinese AI,AI price comparison,Qwen,DeepSeek,GPT-4 alternative,affordable LLM',
    openGraph: {
      title: locale === 'zh' ? 'AI模型价格对比' : 'AI Model Price Comparison',
      description: locale === 'zh' ? '发现比GPT-4便宜10-100倍的中国AI模型' : 'Discover Chinese AI models 10-100x cheaper than GPT-4',
      type: 'website'
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
