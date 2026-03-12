// 自动抓取AI模型数据脚本
interface ModelData {
  name: string;
  price: number;
  provider: string;
  region: 'international' | 'chinese';
}

async function fetchHuggingFace() {
  const res = await fetch('https://huggingface.co/api/models?sort=trending&limit=20');
  const data = await res.json();
  return data;
}

async function fetchLMSYS() {
  const res = await fetch('https://lmarena.ai/api/leaderboard');
  const data = await res.json();
  return data;
}

async function fetchOpenRouter() {
  const res = await fetch('https://openrouter.ai/api/v1/models');
  const data = await res.json();
  return data.data;
}

async function main() {
  console.log('抓取Hugging Face数据...');
  const hf = await fetchHuggingFace();
  console.log(`获取到 ${hf.length} 个模型`);

  console.log('\n抓取LMSYS排行榜...');
  const lmsys = await fetchLMSYS();
  console.log('排行榜数据:', lmsys);

  console.log('\n抓取OpenRouter价格...');
  const or = await fetchOpenRouter();
  console.log(`获取到 ${or.length} 个模型价格`);
}

main();
