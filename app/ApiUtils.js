var ApiUtils = {  
    checkStatus: function(response) {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        let error = new Error(response.statusText);
        console.log(response.status)
        error.response = response;
        throw error;
      }
    }
  };
export { ApiUtils as default };