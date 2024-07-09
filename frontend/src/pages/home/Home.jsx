import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row lg:mb-0 display-none sm:h-[450px] md:h-[550px] rounded-lg overflow-auto  clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0  max-w-[90vw] border-2 border-black">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};
export default Home;
