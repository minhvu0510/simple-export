import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Lưu data vào Google Sheets (tạm thời console.log)
    console.log('New request:', body);
    
    // TODO: Sau này sẽ:
    // - Lưu vào database
    // - Gửi email notification
    // - Match với forwarders
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}