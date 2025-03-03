import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { ShowAnimation } from "@/components";
import animationData from "./HeartTreeAnimation.json";

interface HeartTreeAnimtaionProps {
  nextPage: string;
}

const Lottie = dynamic(() => import("react-lottie-player"), {
  ssr: false,
});

export default function FamilySuccessAnimation({
  nextPage,
}: HeartTreeAnimtaionProps) {
  const router = useRouter();

  return (
    <ShowAnimation
      duration={4500}
      onEnd={() => {
        router.push(nextPage);
      }}>
      <div className="h-full flex-col-center">
        <div className="flex-col-center">
          <Lottie
            loop
            animationData={animationData}
            play
            className="w-1/2"
          />
          <div className="text-2xl text-orange-primary font-bold animate-fadeIn opacity-0">
            감나무를 심었어요!
          </div>
        </div>
      </div>
    </ShowAnimation>
  );
}
