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
    <div>
      <AsideMenu />
      <Header title={props.title} subtitle={props.subtitle} />
      <Content>
        {props.children}
      </Content>
    </div>
  );
}
