import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Vebhav | Futuristic Portfolio",
  description: "Vebhav's personal portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}