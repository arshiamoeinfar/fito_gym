import MenuBar from "./components/MenuBar/MenuBar";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <div class="grid grid-cols-[300px_2fr_330px] h-screen gap-3">
        <div class="rounded-2xl">
          <MenuBar />
        </div>
        <div class="bg-green-400 rounded-2xl"></div>
        <div class="bg-blue-400 rounded-2xl">بخش ۳</div>
      </div>
    </>
  );
}
