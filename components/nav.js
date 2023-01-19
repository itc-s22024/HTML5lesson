import Link from "next/link";

const Nav = () =>
    <nav>
        <ul>
            <li>
                <Link href="/website">
                    <div>HTML_CSSでつくるWebページ</div>
                </Link>
            </li>
            <li>
                <Link href="/mart">
                    <div>HTML_CSSでつくる三段組レイアウト</div>
                </Link>
            </li>
            <li>
                <Link href="/news">
                <div>HTML_CSSでつくる新聞の1ページ</div>
                </Link>
            </li>
            <li>
                <Link href="/grit">
                    <div>HTML_CSSでつくるグリッドレイアウト</div>
                </Link>
            </li>
            <li>
                <Link href="/pc">
                <div>HTML_CSSでつくるノートPC風デザイン</div>
                </Link>
            </li>
            <li>
                <Link href="/cafe">
                <div>HTML_CSSでつくるメニューの作り方</div>
                </Link>
            </li>
        </ul>
    </nav>

export default Nav