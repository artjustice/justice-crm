import actions from '../store/actions'
import {useDispatch} from "react-redux/lib/hooks/useDispatch";
import {bindActionCreators} from "redux";




const useAction = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}

export default useAction
