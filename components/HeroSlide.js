import HomeStyle from "../styles/Home.module.css";
import dynamic from 'next/dynamic'
const HeroItems = dynamic(
  () => import('./HeroItems')
)

export default function HeroSlide() {

  return <>
    <div className="hero-section-area" >
      <div className={" Hero-top-section"+" " +HomeStyle.heroBackground} >
      <div className="container">
        <HeroItems/>
        </div>
      </div>
    </div>

  </>;
}