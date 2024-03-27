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
      setBlocks([block, ...blocks]);
    },
    [blocks]
  );

  const appendTransaction = useCallback(
    (transaction) => {
      transaction.map((each) => {
        setTransactions([each, ...transactions]);
      });
    },
    [transactions]
  );

  useEffect(() => {
    appendTransaction(transaction);
  }, [transaction]);

  useEffect(() => {
    appendBlock(block);
  }, [block]);

  useEffect(() => {
    let sock = new SockJS(
      `http://192.168.179.130:8080/websocket-explorer?access_token=12345`
    );
    let stompClient = Stomp.over(sock);
    stompClient.connect(
      {
        Authorization: `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJwYW5vc0BnbWFpbC5jb20iLCJpc3MiOiJwYW5vc0BnbWFpbC5jb20iLCJpc1VzZXIiOiJST0xFX1VTRVIiLCJpYXQiOjE3MTE1NjU2OTcsImV4cCI6MTcxMTY1MjA5N30.MD_KH0J4p8TE34vG8bsQWeTNQ_CTUAK8_P_Rh7aO_zGJp-eXngaPdjjOBAfDQ3c4vieKskbE7faZypzKpVu9ig`,
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
