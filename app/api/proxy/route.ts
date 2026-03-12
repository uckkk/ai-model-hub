import {NextRequest, NextResponse} from 'next/server';

const PROVIDER_ENDPOINTS = {
  qwen: 'https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation',
  wenxin: 'https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/completions',
  deepseek: 'https://api.deepseek.com/v1/chat/completions'
};

export async function POST(req: NextRequest) {
  try {
    const {provider, messages, apiKey} = await req.json();

    if (!provider || !PROVIDER_ENDPOINTS[provider as keyof typeof PROVIDER_ENDPOINTS]) {
      return NextResponse.json({error: 'Invalid provider'}, {status: 400});
    }

    const endpoint = PROVIDER_ENDPOINTS[provider as keyof typeof PROVIDER_ENDPOINTS];

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({messages})
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({error: 'Proxy request failed'}, {status: 500});
  }
}
