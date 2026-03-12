'use client';
import {useTranslations, useLocale} from 'next-intl';
import {Link} from '@/routing';

const tutorials = {
  en: [
    {provider: 'Alibaba Qwen', steps: ['Visit qwen.aliyun.com', 'Click Sign Up', 'Use email or phone', 'Verify account', 'Add payment method', 'Start using API']},
    {provider: 'Baidu Wenxin', steps: ['Go to yiyan.baidu.com', 'Register with email', 'Complete verification', 'Apply for API access', 'Get API key']},
    {provider: 'DeepSeek', steps: ['Visit deepseek.com', 'Sign up', 'Verify email', 'Get free credits', 'Access API dashboard']}
  ],
  zh: [
    {provider: '阿里通义千问', steps: ['访问 qwen.aliyun.com', '点击注册', '使用邮箱或手机号', '验证账号', '添加支付方式', '开始使用API']},
    {provider: '百度文心一言', steps: ['访问 yiyan.baidu.com', '邮箱注册', '完成验证', '申请API权限', '获取API密钥']},
    {provider: 'DeepSeek', steps: ['访问 deepseek.com', '注册账号', '验证邮箱', '获取免费额度', '访问API控制台']}
  ]
};

export default function Tutorial() {
  const locale = useLocale() as 'en' | 'zh';
  const content = tutorials[locale];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <nav className="p-4 flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="text-2xl font-bold">AI Model Hub</Link>
        <div className="flex gap-2">
          <Link href="/tutorial" locale="en" className="px-3 py-1 rounded hover:bg-gray-100">EN</Link>
          <Link href="/tutorial" locale="zh" className="px-3 py-1 rounded hover:bg-gray-100">中文</Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8">{locale === 'en' ? 'Registration Tutorials' : '注册教程'}</h1>
        
        {content.map((item, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">{item.provider}</h2>
            <ol className="list-decimal list-inside space-y-2">
              {item.steps.map((step, j) => (
                <li key={j} className="text-lg">{step}</li>
              ))}
            </ol>
          </div>
        ))}
      </main>
    </div>
  );
}
