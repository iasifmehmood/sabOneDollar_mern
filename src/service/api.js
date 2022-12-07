import axios from "axios";
import { API_NOTIFICATION_MESSAGES, SERVICE_URLS } from "../constants/config";

const API_URL = "http://localhost:8000";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "content-type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    // Stop global loader here
    return processResponse(response);
  },
  function (error) {
    // Stop global loader here
    return Promise.reject(processError(error));
  }
);

/////////////////////////////////////////////////////
// if success will return {isSucess:true, data:Object}
// if failed return {isFailure:true, status string, msg:string, code: statuscode}
////////////////////////////////////////////////////

const processResponse = response => {
  if (response?.status === 200) {
    return { isSuccess: true, data: response.data };
  } else {
    return {
      isFailure: true,
      status: response?.status,
      msg: response?.msg,
      code: response?.code,
    };
  }
};

/////////////////////////////////////////////////////
// if success will return {isSucess:true, data:Object}
// if failed return {isFailure:true, status string, msg:string, code: statuscode}
////////////////////////////////////////////////////

const processError = async error => {
  if (error.response) {
    // Request made and server responded with a status code
    // that falls out of the range of 2xx
    if (error.response?.status === 403) {
      // const { url, config } = error.response;
      // console.log(error);
      // try {
      //     let response = await API.getRefreshToken({ token: getRefreshToken() });
      //     if (response.isSuccess) {
      sessionStorage.clear();
      //         setAccessToken(response.data.accessToken);

      //         const requestData = error.toJSON();

      //         let response1 = await axios({
      //             method: requestData.config.method,
      //             url: requestData.config.baseURL + requestData.config.url,
      //             headers: { "content-type": "application/json", "authorization": getAccessToken() },
      //             params: requestData.config.params
      //         });
      //     }
      // } catch (error) {
      //     return Promise.reject(error)
      // }
    } else {
      console.log("ERROR IN RESPONSE: ", error.toJSON());
      return {
        isError: true,
        msg: API_NOTIFICATION_MESSAGES.responseFailure,
        code: error.response.status,
      };
    }
  } else if (error.request) {
    // The request was made but no response was received
    console.log("ERROR IN RESPONSE: ", error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATION_MESSAGES.requestFailure,
      code: "",
    };
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log("ERROR IN RESPONSE: ", error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATION_MESSAGES.networkError,
      code: "",
    };
  }
};

// const processError = error => {
//   if (error.response) {
//     // request made and server responded with a status
//     // other that falls out of the range means response is other than 200
//     console.log("Error in response:", error.toJSON());
//     return {
//       isError: true,
//       msg: API_NOTIFICATION_MESSAGES.responseFailure,
//       code: error.response.status,
//     };
//   } else if (error.request) {
//     // request made but no respoonse recieved (connectivity issue)
//     console.log("Error in request:", error.toJSON());
//     return {
//       isError: true,
//       msg: API_NOTIFICATION_MESSAGES.requestFailure,
//       code: "",
//     };
//   } else {
//     //something happened in setting up frontend
//     console.log("Error in network:", error.toJSON());
//     return {
//       isError: true,
//       msg: API_NOTIFICATION_MESSAGES.networkError,
//       code: "",
//     };
//   }
// };

const API = {};

for (const [key, value] of Object.entries(SERVICE_URLS)) {
  API[key] = (body, showUploadProgress, showDownloadProgress) =>
    axiosInstance({
      method: value.method,
      url: value.url,
      data: body,
      responseType: value.responseType,
      onUploadProgress: function (progressEvent) {
        if (showUploadProgress) {
          let percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showUploadProgress(percentCompleted);
        }
      },
      onDownloadProgress: function (progressEvent) {
        if (showDownloadProgress) {
          let percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showDownloadProgress(percentCompleted);
        }
      },
    });
}

export { API };
