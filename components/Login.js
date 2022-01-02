import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative">
      <h1>Login Screen</h1>
      <div className="absolute z-50 flex flex-col justify-center h-4/6 w-full items-center space-y-4">
        {/* Papafam logo */}
        <Image
          className="object-cover rounded-full"
          src="https://i.imgur.com/ZvI1TZb.png"
          height={200}
          width={200}
        />

        {/* papafam button */}
        <button
          onClick={authenticate}
          className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse"
        >
          Login to the METAVERSE
        </button>
      </div>

      <div className="h-screen">
        <Image
          src="https://i.imgur.com/DwVhAXc.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
