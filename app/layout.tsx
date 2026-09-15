import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"Pause — Reflection & Practice",description:"A personal space for guided practice, reflection, and knowledge review.",icons:{icon:"/favicon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
