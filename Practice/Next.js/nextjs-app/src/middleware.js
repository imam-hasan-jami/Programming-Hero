import { NextResponse } from "next/server";

export function middleware(request) {
  const currentCookie = request.cookies.get("nextjs-token");
  console.log(currentCookie.value);

  const dummyUserData = {
    role: "admin",
    email: "test@admin.com",
  };

  let isServicesPage = request.nextUrl.pathname.startsWith("/services");

  let isAdmin = dummyUserData.role == "admin";

  if (isServicesPage && !isAdmin)
    return NextResponse.redirect(new URL("/login", request.url));
  // return NextResponse.rewrite(new URL("/login", request.url));

  return NextResponse.next();
}

// export const config = {
//   matcher: "/about/:path*",
// };
