import Link from "next/link";

export default function Home() {
    return (
      <>
        <title>BMO Math Game</title>
        <h1>Hello World, BMO Math Game!</h1>
        <ul>
          <li><Link href="/game">Jogar</Link></li>
        </ul>
      </>
    );
  }
  