import AsideMenu from "./AsideMenu";
import Content from "./Content";
import Header from "./Header";

interface LayoutProps {
  title: string;
  subtitle: string;
  children?: any;
}

export default function Layout(props: LayoutProps) {
  return (
    <div className={`dark flex h-screen w-screen`}>
      <AsideMenu />
      <div className={`
      flex flex-col w-full p-7
      bg-gray-300 dark:bg-gray-800
      `}>
      <Header title={props.title} subtitle={props.subtitle} />
      <Content>
        {props.children}
      </Content>
      </div>
    </div>
  );
}
