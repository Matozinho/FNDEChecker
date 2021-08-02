import {useRouter} from "next/router";
import cookieCutter from 'cookie-cutter';

export default function Profile(): JSX.Element {
  const router = useRouter();

  const handleLogOut = (): void => {
    cookieCutter.set('sessionToken', '', { expires: new Date(0) });
    router.push('/');
  }

  return(
    <div>
      <h1>Futura tela de Perfil</h1>
      <button onClick={handleLogOut}>LogOut</button>
    </div>
  );
}
