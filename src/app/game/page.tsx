import Link from "next/link";

export default function Game(){
    return (
        <>
        <h1>Página do jogo</h1>
        <ul>Testando rotas:
            <li><Link href="/">Voltar</Link></li>  {/* Links para paginas e componentes são feitos dessa maneira */}
        </ul>
        </>
    );
};