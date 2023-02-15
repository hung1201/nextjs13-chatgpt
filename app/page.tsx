import MainItem from "@/components/MainItem";
import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const list = [
  {
    title: "Example",
    infoList: [
      '"Explain something to me"',
      '"What is the difference between a dog and a cat?"',
      ' "What is the color of the sun?"',
    ],
    icon: <SunIcon className="w-8 h-8" />,
  },
  {
    title: "Capabilities",
    infoList: [
      "Remembers what user said earlier in the conversation",
      "Allows user to provide follow-up corrections",
      "Trained to decline inappropriate requests",
    ],
    icon: <BoltIcon className="w-8 h-8" />,
  },
  {
    title: "Limitations",
    infoList: [
      "May occasionally generate incorrect information",
      "May occasionally produce harmful instructions or biased content",
      "Limited knowledge of world and events after 2021",
    ],
    icon: <ExclamationTriangleIcon className="w-8 h-8" />,
  },
];

export default function Home() {
  return (
    <div className="flex text-white flex-col items-center justify-center h-screen px-2">
      <h1 className="text-5xl font-bold mb-20">Chat GPT</h1>
      <div className="flex space-x-2">
        {list.map((item, index) => (
          <MainItem
            key={index}
            icon={item.icon}
            title={item.title}
            infoList={item.infoList}
          />
        ))}
      </div>
    </div>
  );
}
