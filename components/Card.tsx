import Image from '../base_components/Image';

const layoutStyle: React.CSSProperties = {
    margin: 20,
    padding: 20,
    border: '1px solid #00000057',
    height: '300px',
    width: '300px',
    borderRadius: '10px'
}

const Layout = (props) => {
    console.log(props)
    return < div style={layoutStyle} >
        <Image
            src={props.src}
        />
        {props.title}
    </div >
};

export default Layout;