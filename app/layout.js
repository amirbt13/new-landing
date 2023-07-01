import "./globals.css";

export const metadata = {
  title: "کلاسور | استخدام در سریع ترین زمان بدون تجربه کار",
  description:
    "کلاسور به افراد بدون تجربه کمک میکند تا بتوانند با کسب تجربه در مدت زمان کم وارد بازار کار شوند!",
  icons: {
    icon: "/title.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
