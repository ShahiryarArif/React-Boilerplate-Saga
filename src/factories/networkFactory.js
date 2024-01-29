import { HTTP_NETWORK } from "../shared/constants/network-keys"
import HttpNetwork from "../network/httpNetwork"

const networks = {[HTTP_NETWORK]: HttpNetwork}

export default class NetworkFactory {
    static instance = NetworkFactory.instance || new NetworkFactory()
    getNetwork (requestType, attributes) {
        let networkType = networks[requestType]
        return new networkType(attributes)
    }
}