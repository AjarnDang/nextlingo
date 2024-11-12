import { Knewave } from "next/font/google";
const knewave = Knewave({ subsets: ["latin"], weight: ["400"] });

export default function DabuzzzText() {
  return <div className={`${knewave.className} uppercase`}>Dabuzzz</div>;
}
