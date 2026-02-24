'use client';

import { useAppStore } from '@/lib/store';
import { AppLayout } from '@/components/app-layout';
import { LoginPage } from '@/components/login-page';
import { DashboardPageNew } from '@/components/dashboard-page-new';
import { CompetitorsPage } from '@/components/competitors-page';
import { ListingPage } from '@/components/listing-page';
import { ResourcesPage } from '@/components/resources-page';
import { SettingsPage } from '@/components/settings-page';

export default function Home() {
  const currentPage = useAppStore((state) => state.currentPage);

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage />;
      case 'dashboard':
        return <DashboardPageNew />;
      case 'competitors':
        return <CompetitorsPage />;
      case 'listing':
        return <ListingPage />;
      case 'resources':
        return <ResourcesPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <DashboardPageNew />;
    }
  };

  return <AppLayout>{renderPage()}</AppLayout>;
}
