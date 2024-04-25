export default function({htmlData}) {
    return (
        <div dangerouslySetInnerHTML={{ __html: htmlData }}></div>
    )
}