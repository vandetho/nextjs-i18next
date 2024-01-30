import { NextRequest } from 'next/server';

export { default } from 'next-auth/middleware';

import { i18nRouter } from 'next-i18n-router';
import i18nConfig from '@/tembre/app/i18nConfig';

export function middleware(request: NextRequest) {
    return i18nRouter(request, i18nConfig);
}

// applies this middleware only to files in the app directory
export const config = {
    matcher: '/((?!api|static|.*\\..*|_next).*)',
};
