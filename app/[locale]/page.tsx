"use client"
import Image from "next/image";
import "../../public/style.css";
import image1 from "./images/1.jpg";
import image2 from "./images/myiuc.png";
import image3 from "./images/S.png";
import image4 from "./images/ar-vr-tcg.png";
import image5 from "./images/logo-sans-slogan.png";
import image6 from "./images/images.jpg";
import image7 from "./images/pisti-1-300x266.png";
import image8 from "./images/logo_3iAC.png";
import image9 from "./images/seas-1.png";
import {useEffect} from "react";
import {useTranslation} from "@/app/i18n/client";
import { useRouter } from 'next/navigation'
import Link from 'next/link'
// @ts-ignore
export default function Home({locale}) {
  // @ts-ignore
  const router = useRouter()
  const { t } = useTranslation(locale,"translation")

  console.log(locale)
  useEffect(() => {
    function adjustHexSize(scale: number) {
      const hexagons = document.querySelectorAll('.hex');
      hexagons.forEach(hex => {
        const top = hex.querySelector('.top');
        const middle = hex.querySelector('.middle');
        const bottom = hex.querySelector('.bottom');

        const B_orig = 60;
        const L_orig = 104;
        const W_orig = 208;
        const H_orig = 120;
        const M_left = 6;
        const M_bottom = -52;

        // @ts-ignore
        top.style.borderBottomWidth = `${scale * B_orig}px`;
        top.style.borderLeftWidth = `${scale * L_orig}px`;
        top.style.borderRightWidth = `${scale * L_orig}px`;

        middle.style.width = `${scale * W_orig}px`;
        middle.style.height = `${scale * H_orig}px`;

        bottom.style.borderTopWidth = `${scale * B_orig}px`;
        bottom.style.borderLeftWidth = `${scale * L_orig}px`;
        bottom.style.borderRightWidth = `${scale * L_orig}px`;

        hex.style.marginLeft = `${scale * M_left}px`;
        hex.style.marginBottom = `${scale * M_bottom}px`;
      });

      const evenRows = document.querySelectorAll('.hex-row.even');
      evenRows.forEach(row => {
        let M_even = 107;
        row.style.marginLeft = `${scale * M_even}px`;
      });
    }

    adjustHexSize(0.78);
  }, []);

  const redirection =(url:string)=>{
    console.log("links")
    return router.replace(url);
  }


  return (
      <>
        <div className="relative h-screen w-full">
          <Image src={image1} alt="backgound image" />

          <div className="absolute inset-0 "></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-5xl text-white font-bold">Portail MyIUC</h1>
          </div>
        </div>

        <div className="absolute top-0 left-0 p-2">
          <div className="hex-row">
            <div className="hex">
              <div className="top invisible"></div>
              <div
                  className="middle logo h-[75px] bg-amber-50 relative inset-0 flex border-8  rounded-lg  "
              >
                <Image src={image2} className="m-auto " alt="backgound image"/>
              </div>
              <div className="bottom invisible"></div>
            </div>
          </div>

          <div className="hex-row">
            <Link href={"https://galio.myiuc.com/"}>
              <div className="hex">
                <div className="top"></div>
                <div className="middle relative  inset-0 flex">
                  <p className="m-auto text-center text-lg font-bold text-gray-800">
                    {t('portail_enseignant')}
                  </p>
                </div>
                <div className="bottom "></div>
              </div>

            </Link>

          </div>
          <div className="hex-row even">
            <Link href="https://students.myiuc.com/">
              <div className="hex">
                <div className="top"></div>
                <div className="middle  relative inset-0 flex">
                  <p className="m-auto text-center text-lg font-bold text-gray-800">
                    {t('portail_etudiant')}
                  </p>
                </div>
                <div className="bottom"></div>
              </div>

            </Link>
          </div>
          <div className="hex-row">
            <Link href={"https://mysignins.microsoft.com/"}>
              <div className="hex">
                <div className="top"></div>
                <div className="middle  relative inset-0 flex">

                  <p className="m-auto text-center text-lg font-bold text-gray-800">

                    {t('portail_email')}

                  </p>

                </div>
                <div className="bottom"></div>
              </div>
            </Link>

            <Link
                href="https://digitalbooks.myiuc.com/"
            >
              <div className="hex">
                <div className="top"></div>
                <div className="middle  relative inset-0 flex">
                  <p className="m-auto text-center text-lg font-bold text-gray-800">
                    {t('portail_bibliotheque')}

                  </p>

                </div>
                <div className="bottom"></div>
              </div>

            </Link>
          </div>
          <div className="hex-row even">
            <div className="hex">
              <div className="top invisible"></div>
              <div className="middle relative inset-0 text-center flex" style={{background: "unset !important"}}>
              </div>
              <div className="bottom invisible"></div>
            </div>
          </div>
        </div>

        {/* Logo in the top-right corner */}
        <div className="absolute top-0 right-0 m-4">
          <Image src={image5} alt="Logo" className="h-60 w-60 md:h-20 md:w-20"/>
        </div>

        <Image src={image4} alt={"image"} className="absolute top-0 right-1 h-full w-2/4 p-0 hidden md:block"/>
        <div className="fixed bottom-0 w-full shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px]" style={{zIndex:"99"}}>
          <Image src={image3} className="inset-0 w-full h-full object-cover opacity-50" alt="iuc image" />
        </div>
      </>
  );
}
