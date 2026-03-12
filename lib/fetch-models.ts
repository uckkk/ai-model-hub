export interface ModelData {
  name: string;
  price: number;
  provider: string;
  region: 'international' | 'chinese';
  performance?: number;
}

export async function fetchOpenRouterModels(): Promise<ModelData[]> {
  const res = await fetch('https://openrouter.ai/api/v1/models');
  const data = await res.json();
  return data.data.map((m: any) => ({
    name: m.name,
    price: parseFloat(m.pricing?.prompt || 0) * 1000000,
    provider: m.id.split('/')[0],
    region: m.id.includes('qwen') || m.id.includes('deepseek') ? 'chinese' : 'international'
  }));
}

export async function fetchLMSYSLeaderboard() {
  const res = await fetch('https://lmarena.ai/api/leaderboard');
  return await res.json();
}

export const staticModels: ModelData[] = [
  {name: 'GPT-4', price: 30, provider: 'OpenAI', region: 'international'},
  {name: 'Claude Opus', price: 15, provider: 'Anthropic', region: 'international'},
  {name: 'Gemini Pro', price: 7, provider: 'Google', region: 'international'},
  {name: '通义千问', price: 0.11, provider: 'Alibaba', region: 'chinese'},
  {name: '文心一言', price: 0.17, provider: 'Baidu', region: 'chinese'},
  {name: 'DeepSeek', price: 0.14, provider: 'DeepSeek', region: 'chinese'},
  {name: '智谱GLM-4', price: 0.70, provider: 'Zhipu', region: 'chinese'}
];
