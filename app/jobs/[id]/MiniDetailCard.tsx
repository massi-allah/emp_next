import Image from "next/image";
interface MiniCardProps {
    title: string;
    body: string;
    icon: string;
}
const MiniCard: React.FC<MiniCardProps> = ({title, body, icon}) => {
    return (
        <div className="flex gap-10 py-8 px-16 items-center bg-white rounded-16 justify-center h-fit w-fit" data-aos='fade-up'>
          <div className="flex bg-background rounded-8 p-6">
            <Image src={icon} width={30} alt="" height={30} className="" />
          </div>
          <div className="flex flex-col items-start py-10">
            <p className="text-center sm:text-sm-sm md:text-sm-md lg:text-sm-lg text-[#4a4a4a]">{title}</p>
            <p className="text-center">{body}</p>
          </div>
        </div>
    )
}
export default MiniCard;