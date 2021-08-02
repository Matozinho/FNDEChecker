import {useRouter} from "next/router";

export default function Profile(): JSX.Element {
  const router = useRouter();

  const handleLogOut = (): void => {
    document.cookie = 'sessionToken =; Max-Age=0;';    
    router.push('/');
  }

  return(
    <div>
      <h1>Futura tela de Perfil</h1>
      <button onClick={handleLogOut}>LogOut</button>
    </div>
  );
}
