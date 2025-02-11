import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

export default function Home() {
  return (
    <div className="focus:outline-none focus:ring-2 focus:ring-green-500">
      <Header />
      <div className="grid grid-cols-[256px_1fr] items-start gap-8 max-w-6xl my-8 mx-auto px-4 max-md:grid-cols-1">
        <div>
          <Sidebar />
        </div>
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  );
}
