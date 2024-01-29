import NetworkFactory from "../../../factories/networkFactory";
import Endpoint from "../../constants/Endpoint";
import { HTTP_NETWORK } from "../../constants/network-keys";
import serviceEnum from "../../constants/serviceEnum";

const registerUserCall = async (user) => {
  const NetworkObj = NetworkFactory.instance.getNetwork(HTTP_NETWORK, {
    service: serviceEnum.TV_BUSINESS_SERVICE,
  });
  return NetworkObj.post(Endpoint.REGISTER_USER, user);
};

export { registerUserCall };
