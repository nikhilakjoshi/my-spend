export const metadata = {
  title: "New User",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function NewUserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="grid h-screen place-items-center">{children}</div>;
}
