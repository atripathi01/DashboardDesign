import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import FolderOpenRoundedIcon from '@mui/icons-material/FolderOpenRounded';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import SettingsIcon from '@mui/icons-material/Settings';

export const Routes = [
  {
    //@ts-ignore
    icons: <GridViewRoundedIcon size={30} />,
    path: '/dashboard',
    label: 'Dashboard',
  },
  {
    //@ts-ignore
    icons: <LocalMallOutlinedIcon size={30} />,
    path: '/order',
    label: 'Orders',
  },
  {
    //@ts-ignore
    icons: <PeopleOutlineRoundedIcon size={30} />,
    path: '/customers',
    label: 'Customers',
  },
  {
    //@ts-ignore
    icons: <FolderOpenRoundedIcon size={30} />,
    path: '/inventory',
    label: 'Inventory',
  },
  {
    //@ts-ignore
    icons: <TextsmsOutlinedIcon size={30} />,
    path: '/conversations',
    label: 'Conversations',
  },
  {
    //@ts-ignore
    icons: <SettingsIcon size={30} />,
    path: '/settings',
    label: 'Settings',
  },
];
