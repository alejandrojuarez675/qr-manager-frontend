import { useParams } from "react-router-dom"
import HtmlParser from "../../components/HtmlParser.js";
import ConsumerHeader from "../../components/ConsumerHeader/index.js";

export default function () {

    const {uuid} = useParams();
    // const htmlData = require("./../../mocks/" + uuid + ".json")
    const htmlData = require("./../../mocks/uuid-pricing-version-0001.json")

    return (
        <div>
            <ConsumerHeader />
            <HtmlParser htmlData={htmlData.data} />
        </div>
    )
}