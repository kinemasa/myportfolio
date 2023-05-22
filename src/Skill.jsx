import { useState } from "react";

function Skill() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <!-- skill stuck --> */}
      <div
        id="skills"
        className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
      >
        <section className="w-full">
          <h2 className="secondary-title">スキルスタック</h2>
          <p className="section-paragraph">
            私は以下のプログラミング言語を利用したことがあります
          </p>{" "}
          <div className="my-16">
            <div className="w-full border border-purple-300 p-16 lg:px-32 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-yellow-300 transition-all duration-300 cursor-pointer">
              {/* <!-- logo  --> */}
              <div className="mb-6 lg:mb-0 self-center">
                <i className="fa-brands fa-html5 text-9xl text-orange-600"></i>
              </div>
              {/* <!-- description --> */}
              <div className="text-center flex flex-wrap justify-center lg:text-left lg:block">
                <h3 className="text-3xl font-semibold">HTML/CSS</h3>
                <div className="flex flex-wrap w-full justify-center gap-3 lg:w-auto lg:justify-start mt-6 mb-8">
                  <div className="badge">Webサイト制作</div>
                  <div className="badge">フロントエンド開発</div>
                </div>

                <p className="text-secondary">
                  web業界のインターンに参加していたため自分の意図した静的ページを作成することができます。cssライブラリではscssとtailwindcssを用いたことがあり、このサイトではtailwindcssを用いて作成を行なっています。
                </p>
              </div>
            </div>
          </div>
          <div className="my-16">
            <div className="w-full border border-purple-300 p-16 lg:px-32 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-yellow-300 transition-all duration-300 cursor-pointer">
              {/* <!-- logo  --> */}
              <div className="mb-6 lg:mb-0 self-center">
                <i className="fa-brands fa-js-square text-9xl text-yellow-300"></i>
              </div>
              {/* <!-- description --> */}
              <div className="text-center flex flex-wrap justify-center lg:text-left lg:block">
                <h3 className="text-3xl font-semibold">Javascript</h3>
                <div className="flex flex-wrap w-full justify-center gap-3 lg:w-auto lg:justify-start mt-6 mb-8">
                  <div className="badge">Webサイト制作</div>
                  <div className="badge">フロントエンド開発</div>
                </div>

                <p className="text-secondary">
                  JSもインターンで学びweb業界で用いられるswiperなどのライブラリを用いた実装を行うことができます。他にはMONGO.DB,React
                  ,Express,
                  Node.jsによるMERNスタックを用いたSNSクローンなどの開発も行いました。
                </p>
              </div>
            </div>
          </div>
          <div className="my-16">
            <div className="w-full border border-purple-300 p-16 lg:px-32 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-yellow-600 transition-all duration-300 cursor-pointer">
              {/* <!-- logo  --> */}
              <div className="mb-6 lg:mb-0 self-center">
                <i className="fa-brands fa-python text-9xl text-blue-600"></i>
              </div>
              {/* <!-- description --> */}
              <div className="text-center flex flex-wrap justify-center lg:text-left lg:block">
                <h3 className="text-3xl font-semibold">Python</h3>
                <div className="flex flex-wrap w-full justify-center gap-3 lg:w-auto lg:justify-start mt-6 mb-8">
                  <div className="badge">画像処理</div>
                  <div className="badge">信号処理</div>
                  <div className="badge">web</div>
                </div>

                <p className="text-secondary">
                  研究に主に利用していた言語であり,openCVを用いた画像処理、またはトレンド除去などの信号処理のプログラムを先行論文をもとに作成,改良を行なってきました。web制作としてはDjangoを用いたweb制作に取り組んでいました。
                </p>
              </div>
            </div>
          </div>
          <div className="my-16">
            <div className="w-full border border-purple-300 p-16 lg:px-32 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-yellow-600 transition-all duration-300 cursor-pointer">
              {/* <!-- logo  --> */}
              <div className="mb-6 lg:mb-0 self-center">
                <i className="fa-brands fa-java text-9xl text-red-200"></i>
              </div>
              {/* <!-- description --> */}
              <div className="text-center flex flex-wrap justify-center lg:text-left lg:block">
                <h3 className="text-3xl font-semibold">Others</h3>
                <div className="flex flex-wrap w-full justify-center gap-3 lg:w-auto lg:justify-start mt-6 mb-8">
                  <div className="badge">アルゴリズム</div>
                  <div className="badge">ミニアプリ</div>
                </div>
                <table>
                  <tr>
                    <th>授業</th>
                    <td>C,C++,Java,R</td>
                  </tr>
                  <tr>
                    <th>独学</th>
                    <td>WordPress,PHP</td>
                  </tr>
                </table>
                <p className="text-secondary">授業では簡単なアルゴリズムの実装を行うとともにJavaを通してオブジェクト指向型の考え方を学びました。またインターンにおいて興味を持ったWordPressによるサイト構築やPHPでのカスタマイズなどを学びました。</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Skill;
