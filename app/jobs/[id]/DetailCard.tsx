import Image from "next/image"


interface DetailCardProps {
  title: string;
  body: string;
}

const DetailCard: React.FC<DetailCardProps> = ({title, body}) =>{
    return (
      <div className="flex flex-col gap-10 p-32 bg-white items-start w-full h-fit rounded-24" data-aos='fade-up'>
      <div className="flex flex-col gap-4 items-center">
        <h6 className="text-start">{title}</h6>
      </div>
      <div className="flex gap-8 items-center">
        <p className="text-[#808080]">
          {body}
        </p>
      </div>
    </div>
    )
};

export default DetailCard;