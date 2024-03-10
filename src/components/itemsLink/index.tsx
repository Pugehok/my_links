interface props {
  image?: string;
  url: string;
  title: string;
}


export const ItemsLink = (props: props) => {
  const test = `${props}`
  return (
    <li className="bg-secondary-purple h-14 w-full flex items-center space-x-3 rounded-xl cursor-pointer transition-all duration-150 ease-in hover:bg-main-purple hover:shadow-xl">
      <img className="w-6 h-6 ml-2 xl:w-8 xl:h-8 xl:ml-4" src={props.image} alt={props.title} />
      <a href={props.url} className="text-white font-light sm:text-2xl xl:text-2xl ml-12">
        {props.title}
      </a>
    </li>
  );
};



{
  
}