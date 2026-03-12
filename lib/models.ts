export interface AIModel {
  id: string;
  name: string;
  provider: string;
  pricePerMillion: number;
  performanceScore: number;
  region: 'global' | 'china';
  url: string;
}

export const models: AIModel[] = [
  // Global Models
  { id: 'gpt4', name: 'GPT-4', provider: 'OpenAI', pricePerMillion: 30, performanceScore: 95, region: 'global', url: 'https://openai.com' },
  { id: 'claude-opus', name: 'Claude Opus', provider: 'Anthropic', pricePerMillion: 15, performanceScore: 94, region: 'global', url: 'https://anthropic.com' },
  { id: 'gemini-pro', name: 'Gemini Pro', provider: 'Google', pricePerMillion: 7, performanceScore: 90, region: 'global', url: 'https://ai.google.dev' },

  // Chinese Models
  { id: 'qwen', name: 'Qwen (通义千问)', provider: 'Alibaba', pricePerMillion: 0.11, performanceScore: 88, region: 'china', url: 'https://tongyi.aliyun.com' },
  { id: 'ernie', name: 'ERNIE (文心一言)', provider: 'Baidu', pricePerMillion: 0.17, performanceScore: 86, region: 'china', url: 'https://yiyan.baidu.com' },
  { id: 'glm4', name: 'GLM-4 (智谱)', provider: 'Zhipu AI', pricePerMillion: 0.70, performanceScore: 87, region: 'china', url: 'https://open.bigmodel.cn' },
  { id: 'deepseek', name: 'DeepSeek', provider: 'DeepSeek', pricePerMillion: 0.14, performanceScore: 89, region: 'china', url: 'https://www.deepseek.com' },
];

export function calculateSavings(currentModelId: string, alternativeModelId: string, monthlyTokens: number): number {
  const current = models.find(m => m.id === currentModelId);
  const alternative = models.find(m => m.id === alternativeModelId);
  if (!current || !alternative) return 0;
  return (current.pricePerMillion - alternative.pricePerMillion) * monthlyTokens;
}
