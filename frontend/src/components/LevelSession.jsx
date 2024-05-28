import JsonView from 'react18-json-view'
import 'react18-json-view/src/style.css'
const LevelSession = ({ level, collapsed }) => {
    return (
        <JsonView className="mx-3" src={level} collapsed={collapsed}/>
    )
}
export default LevelSession;