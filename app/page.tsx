import {routing} from '@/lib/routing';
import {redirect} from 'next/navigation';

export default function RootPage() {
  redirect(`/${routing.defaultLocale}`);
}
