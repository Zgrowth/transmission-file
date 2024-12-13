import { useEffect } from "react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    fetch('/api/socket'); // 初始化 WebSocket 服务器
  }, []);
  
  return <Component {...pageProps} />;
}
