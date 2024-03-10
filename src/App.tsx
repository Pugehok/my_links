import { Layout } from "./components/layout/layout";
import { links } from "./constats";
import { ItemsLink } from "./components/itemsLink";

export const App = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col text-center md:text-left md:space-y-2 md:flex-row  h-screen items-center  md:justify-around">
          <div className="flex flex-col mt-24 pb-12 ml-6 xl:mt-24">
            <h1 className="text-3xl xl:text-4xl font-light text-secondary">
              Добро пожаловать🎉
            </h1>
            <span className="text-2xl xl:text-3xl font-medium text-secondary">
              Сайт с линками всех моих социальных сетей
            </span>
          </div>
          <div className=" xl:w-4/12 sm:w-11/12  md:w-6/12 items-center md:mr-6">
            <div className="h-fit flex bg-primary-purple text-center flex-col xl:p-8 space-y-4 xl:h-1/2 rounded-xl">
              <div className="pt-12">
                <span className="text-white text-2xl xl:text-4xl font-bold">Ссылки 🌐</span>
              </div>
              <div className="">
                <ul className="space-y-8  xl:space-y-6 p-12 flex flex-col">
                  {links.map((element) => (
                    <ItemsLink
                      image={element.image}
                      url={element.url}
                      title={element.title}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default App;
