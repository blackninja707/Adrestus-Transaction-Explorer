import { useEffect, useState } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

import BlockBoard from "./BlockBoard";
import Dashboard from "./Dashboard";
import TxBoard from "./TxBoard";

const MainLayout = () => {
  const [transactions, setTransactions] = useState([]);
  const [blocks, setBlocks] = useState([]);
  
  useEffect(() => {
    var sock = new SockJS(
      `http://192.168.179.130:8080/websocket-explorer?access_token=12345`
    );
    let stompClient = Stomp.over(sock);
    stompClient.connect(
      {
        Authorization: `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJwYW5vc0BnbWFpbC5jb20iLCJpc3MiOiJwYW5vc0BnbWFpbC5jb20iLCJpc1VzZXIiOiJST0xFX1VTRVIiLCJpYXQiOjE3MTE1NDUxMTcsImV4cCI6MTcxMTYzMTUxN30.IZs2h7-DCNX9Qkf0JL0a7lgHLaHCR7MP5JmtENSho3fzk6BrDHyLn3wXo2-8NF1RaUG750TiDfrvXEXzXox4bQ`,
      },
      (frame) => {
        stompClient.subscribe("/topic/transactions", (message) => {
          setTransactions([JSON.parse(message.body), ...transactions])
        });
        stompClient.subscribe("/topic/blocks", (message) => {
          setBlocks([JSON.parse(message.body), ...blocks])
        });
      }
    );
    return ()=>{
      stompClient.disconnect()
  }
  },[blocks, transactions]);

  return (
    <>
      <div className="max-w-[1408px] min-w-[343px] w-full flex flex-col justify-between items-center px-5 mx-auto">
        <Dashboard />
      </div>
      <div className="w-full max-w-[1408px] min-w-[343px] px-5 mx-auto pb-6 block">
        <div className="w-full flex flex-row items-center justify-between">
          <BlockBoard blocks={blocks} />
          <TxBoard transactions={transactions}/>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
