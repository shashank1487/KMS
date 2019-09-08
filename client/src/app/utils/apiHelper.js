import axios from "axios";

export async function getData(url, config = {}) {
  try {
    const response = await axios.get(url, config);
    return { status: response.status, data: response.data.data };
  } catch (error) {
    console.error("error: ", error);
    return { status: error.response.status, data: error.response };
  }
}

export async function postData(url = "", param = {}, config = {}) {
  try {
    const response = await axios.post(url, param, config);
    return { status: response.status, data: response.data };
  } catch (error) {
    console.error("error: ", error);
    return { status: error.response.status, data: error.response };
  }
}

export async function putData(url = "", param = {}, config = {}) {
  try {
    const response = await axios.put(url, param, config);
    if (url.includes("/nc/core")) {
      return { status: response.status, data: response.data.data };
    } else {
      return { status: response.status, data: response.data };
    }
  } catch (error) {
    console.error("error: ", error);
    return { status: error.response.status, data: error.response };
  }
}

export async function deleteData(url = "", param = {}, config = {}) {
  try {
    const response = await axios.delete(url, param, config);
    if (url.includes("/nc/core")) {
      return { status: response.status, data: response.data.data };
    } else {
      return { status: response.status, data: response.data };
    }
  } catch (error) {
    console.error("error: ", error);
    return { status: error.response.status, data: error.response };
  }
}
