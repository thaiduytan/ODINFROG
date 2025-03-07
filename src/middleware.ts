
import { NextResponse } from "next/server";

export async function middleware() {
	const response = NextResponse.next();
	return response;
}

export const config = {
	matcher:
		"/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|map|woff2|ttf|woff|eot)$).*)",
};
