export async function POST(request) {
    const response = new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: {
            'Set-Cookie': 'token=; Path=/; Max-Age=0'
        }
    });
    return response;
}