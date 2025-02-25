import useStore from '../../zustand/store'


function HomePage() {
  const user = useStore((state) => state.user);
  const logOut = useStore((state) => state.logOut);

  return (
    <>
      <h1>Into the Wild</h1>
      <h2>Main Menu</h2>
      <h3>Welcome Back!</h3>
      <p>Your username is: {user .username}</p>
      <p>Your ID is: {user.id}</p>
      <button onClick={logOut}>
        Log Out
      </button>
    </>
  );
}


export default HomePage;
