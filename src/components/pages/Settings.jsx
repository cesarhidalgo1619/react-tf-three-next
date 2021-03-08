


// import Store from '../../store';
// import * as selectors from '../../store/selectors';
// import { setSettings } from '../../store/actions';
import { LogOut } from '../../../firebase.config';

const Settings = () => {
  // const settings = Store.useState(selectors.getSettings);
  const handleClick = () => {
    LogOut()
  };

  return (
    <div>
      Configuraciones
    </div>
  );
};

export default Settings;
