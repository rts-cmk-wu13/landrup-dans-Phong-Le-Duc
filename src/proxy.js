//first line of defence as proxy.js

import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function proxy(request) {
    if (!request.cookies.has("token")) {
        return NextResponse.redirect(new URL('/no-access', request.url))
    }
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

export const config = {
    matcher: ['/secret/:path*', '/events/:path*'],
}