import Image from "next/image";

function Home() {
  return (
    <div>
      <h1>Hora da soneca!</h1>
      <Image
        src="/img/panda-dormindo-na-estrutura-da-madeira-700-106270069.jpg"
        alt="Panda dormindo"
        width={300}
        height={300}
      />
      <p>Que tal tirar uma sonequinha?</p>
    </div>
  );
}

export default Home;
