import { useCallback, useEffect, useState } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

import BlockBoard from "./BlockBoard";
import Dashboard from "./Dashboard";
import TxBoard from "./TxBoard";

const MainLayout = () => {
  const [transactions, setTransactions] = useState([]);
  const [blocks, setBlocks] = useState([]);
  const [block, setBlock] = useState();
  const [transaction, setTransaction] = useState([]);

  const appendBlock = useCallback(
    (block) => {
      setBlocks([block, ...blocks].slice(0, 10));
    },
    [blocks]
  );

  const appendTransaction = useCallback(
    (transaction) => {
      transaction.map((each) => {
        setTransactions([each, ...transactions].slice(0, 10));
      });
    },
    [transactions]
  );
console.log(blocks.length)
console.log(transactions.length)
  useEffect(() => {
    appendTransaction(transaction);
  }, [transaction]);

  useEffect(() => {
    appendBlock(block);
  }, [block]);

  useEffect(() => {
    let sock = new SockJS(
      `${process.env.REACT_APP_SERVER}/websocket-explorer?access_token=12345`
    );
    let stompClient = Stomp.over(sock);
    stompClient.connect(
      {
        Authorization: `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJwYW5vc0BnbWFpbC5jb20iLCJpc3MiOiJwYW5vc0BnbWFpbC5jb20iLCJpc1VzZXIiOiJST0xFX1VTRVIiLCJpYXQiOjE3MTE5NjU2MjQsImV4cCI6MTcxMjA1MjAyNH0.DCfBSCbB71OuSWPqbM3VlzuEMv4X1_7WBK_4jUI-JCs6rt0U3uzx7B04ZENUTAb1UEYUOqqBCtBwfo0tLMlKLw`,
      },
      (frame) => {
        stompClient.subscribe("/topic/transactions", (message) => {
          setTransaction(JSON.parse(message.body));
        });
        stompClient.subscribe("/topic/blocks", (message) => {
          setBlock(JSON.parse(message.body));
        });
      }
    );
    return () => {
      if (stompClient && stompClient.connected) {
        stompClient.disconnect();
      }
    };
  }, []);

  return (
    <>
      <div className="max-w-[1408px] min-w-[343px] w-full flex flex-col justify-between items-center px-5 mx-auto">
        <Dashboard />
      </div>
      <div className="w-full max-w-[1408px] min-w-[343px] px-5 mx-auto pb-6 block">
        <div className="w-full flex flex-row items-center justify-between">
          <BlockBoard blocks={blocks} />
          <TxBoard transactions={transactions} />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
