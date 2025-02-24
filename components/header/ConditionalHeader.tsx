'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/header/Header';

const ConditionalHeader: React.FC = () => {
  const pathname = usePathname();

  return pathname === '/' ? <Header /> : null;
};

export default ConditionalHeader;
