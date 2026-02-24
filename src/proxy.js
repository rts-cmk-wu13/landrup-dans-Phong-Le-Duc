import { NextResponse } from 'next/server'


export function proxy(request) {
    if (!request.cookies.has("token")) {
        return NextResponse.redirect(new URL('/no-access', request.url))
    }
}



export const config = {
    matcher: [
        '/user-kalender/:path*',
        '/aktiviteter/:path*',
        '/opret-bruger/:path*',
        '/instructor-kalender/:path*',
        '/profile/:path*'
    ],
}