import {NextResponse} from 'next/server';
import {staticModels, fetchOpenRouterModels} from '@/lib/fetch-models';

export async function GET() {
  try {
    const liveModels = await fetchOpenRouterModels();
    return NextResponse.json({models: [...staticModels, ...liveModels.slice(0, 10)]});
  } catch {
    return NextResponse.json({models: staticModels});
  }
}
