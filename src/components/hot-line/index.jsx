import PhoneNumber from "./phone-number";

const HotLine = ({ phones = [], color }) => {
  return (
    <div className="fixed bottom-10 right-5 z-50">
      {phones.map((item, index) => {
        if(index === 0){
            return ( 
                <PhoneNumber phoneNumber={item.phoneNumber} color={`bg-baseBg`} shadow="shadow-[0_0_0_0_#7bab20]" key={index} />
            )
        }else if(index === 1){
            return ( 
                <PhoneNumber phoneNumber={item.phoneNumber} color={`bg-sky-600`}  shadow="shadow-[0_0_0_0_rgb(2,132,199)]"key={index} />
            )
        }else{
            return ( 
                <PhoneNumber phoneNumber={item.phoneNumber} color={`bg-violet-400`} shadow="shadow-[0_0_0_0_rgb(139,92,246)]"key={index} />
            )
        }
      })}
    </div>
  );
};

export default HotLine;
