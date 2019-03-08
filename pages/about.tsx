import Layout from "../components/MyLayout";
import { connect } from "react-redux";
import { DemoModel } from "../components/reusableComponents/Models/DemoModel";

export const AboutUs = (props) => {
    return (
    <div>
        <p>This is the about page </p>
    </div>
)}
export default Layout(connect(state=>({
    users: DemoModel.list()
}))(AboutUs));