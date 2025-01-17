import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

import { AuthProvider } from '@/app/provider';

export const metadata = {
  title: 'CAW Dashboard',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider admin={false}>
      <Theme>{children}</Theme>
    </AuthProvider>
  );
}
