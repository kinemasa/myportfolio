import { useState } from "react";

function About() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        id="about"
        className="container mt-20 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
      >
        <section className="w-full">
          <h1 className="secondary-title mb-6">About me</h1>
          <div className="border  flex  rounded-3xl flex-wrap justify-center md:flex-nowrap">
            <div className="md:w-3/4 ">
              <p className="p-3 m-2">
                2000年生まれ。千葉大学工学部情報工学コース卒。研究では眼底と顔周辺の画像を同時に取得し画像から健康状態の推定を行う。
                <br />
                また<a>株式会社キャブ</a>
                の長期インターンに参加しWeb制作,保守運用にも興味を持ち独学で日々スキルを向上中
                <br />
                趣味はディズニー,ワインやクラフトビール,ラウドロックを聴くこと.
              </p>
            </div>
            <div className="md:w-1/4 flex flex-col justify-center  ">
              <div className="mx-auto border-2 rounded-2xl py-10 px-5 my-4 ">画像を挿入</div>
              <div className="mx-auto">杵渕　雅也</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
