import Image from "next/image";
const customLoader = ({ src }) => {
    return src
}
export default function Img(props) {
    return (<Image {...props} loader={customLoader}/>);
}