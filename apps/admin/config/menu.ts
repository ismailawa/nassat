import { MdDashboard } from 'react-icons/md';
import { FiUsers } from 'react-icons/fi';

export interface Menu {
  name: string;
  Icon?: any;
}

export const menu: Menu[] = [
  { name: 'dashboard', Icon: MdDashboard },
  { name: 'user', Icon: FiUsers },
];
