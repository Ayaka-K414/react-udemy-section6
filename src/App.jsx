import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  console.log('--App--');
  const [num,setNum] = useState(0);
  const [isShowHello,setIsShowHello] = useState(false);
  const onClickCountUp = () => {
    setNum((prev) => prev + 1);
  };
  const onClickToggle = () => {
    setIsShowHello(!isShowHello);
  };

  useEffect(() => {
    if(num > 0){
      if(num % 3 === 0){
        isShowHello || setIsShowHello(true);
      }else{
        isShowHello && setIsShowHello(false);
      }  
    }
  },[num]);

  return (
    <>
      <h1 style={{color: 'red'}}>こんにちは</h1>
      <ColorfulMessage color='blue'>お元気ですか？</ColorfulMessage>
      <ColorfulMessage color='green'>元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowHello && <p>ヘロ〜</p>}
    </>
  );
};
