class HeaderProps {
    title: string;
    subtitle: string;

    constructor(title: string, subtitle: string) {
        this.title = title;
        this.subtitle = subtitle;
    }
}

const Header = ({ title, subtitle} : HeaderProps) => {
  return (
      <head>
        <h1>{title}</h1>
        <div>{subtitle}</div>
     </head>
  )
}

export default Header
