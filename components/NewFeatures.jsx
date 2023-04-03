import styles from "../styles";

const NewFeatures = ({ title, subtitle, imgUrl }) => (
  <div className="flex flex-1 flex-col sm:max-w-[250px] min-w-[210px]">
    <div className={`${styles.flexCenter} w-[70px] rounded-[24px] bg-[#323f4d] h-[70px]`}>
      <img 
       src={imgUrl}
       alt="icon"
       className="w-1/2 h-1/2 object-contain"
      />
      </div>
      <h1 className="mt-[26px] font-bold leading-[30px] text-[24px] text-white">Title {title}</h1>
      <p className="flex-1 font-normal mt-[16px] text-[18px] text-[#b0b0b0] leading-[32px]">{subtitle}</p>
    </div>
);

export default NewFeatures;
