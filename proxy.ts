import {routing} from './routing';
import {NextRequest} from 'next/server';
import createMiddleware from 'next-intl/middleware';

export default createMiddleware(routing);

export const config = {
  matcher: ['/', '/(zh|en)/:path*']
};
