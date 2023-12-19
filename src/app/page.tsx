import Minter from "@/components/Minter";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center space-x-48 p-24">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold">关注推特<a style={{color: "blue"}} href="https://twitter.com/zisan_xyz">道士钟发白</a>获取最新脚本</h1>
        <p className="text-xs mt-2 text-gray-400"><a style={{color: "blue",fontSize:"20px"}} href="https://t.me/daoshi8080">TG群</a>进群免费领工具，会在tg群提前1小时发布工具</p>
        <Link
          href={`https://github.com/BohengLiu/cia20-super-minter`}
          target="_blank"
          className="flex items-center justify-center"
        >
          <svg
            className="w-6 h-6 text-gray-800 mr-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="underline">开源安全可直接下载代码</span>
        </Link>
      </div>
      <Minter />
    </main>
  );
}
