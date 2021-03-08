import dynamic from 'next/dynamic';
import useUser from '../../hooks/useUser';
import Onbor from './index'

const App = dynamic(() => import('../components/AppShell'), {
  ssr: false
});


export default function Index() {
  const user = useUser()
  if (user) {
  // if (true) {
    return <App />;
  }
  return (<Onbor />)
}
