import { NextResponse } from 'next/server'


export function proxy(request) {
    if (!request.cookies.has("token")) {
        return NextResponse.redirect(new URL('/no-access', request.url))
    }
}



export const config = {
    matcher: [
        '/aktiviteter/:path*',
        '/instructor-kalender/:path*',
        '/profile/:path*',
        '/opret-hold/:path*',
        '/user-kalender/:path*',
    ],
}