import Image from "next/image";
import { useMoralis } from "react-moralis";

function Avatar(username, logoutOnPress) {
  const { user, logout } = useMoralis();

  return (
    <Image
      className=" bg-black rounded-full cursor-pointer hover:opacity-75"
      src={`https://avatars.dicebear.com/api/pixel-art/${
        user?.getUsername() || username || user.get("username")
      }.svg`}
      layout="fill"
      onClick={() => logoutOnPress && logout()}
    />
  );
}

export default Avatar;
