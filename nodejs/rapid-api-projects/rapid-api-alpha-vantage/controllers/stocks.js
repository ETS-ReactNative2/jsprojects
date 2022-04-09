import axios from "axios";

export const getTSIntraDay = async (req, res) => {
  const HOST = process.env.RAPID_API_HOST;
  const KEY = process.env.RAPID_API_KEY;
  try {
    const options = {
      method: "GET",
      url: "https://" + HOST + "/query",
      params: {
        symbol: "MSFT",
        function: "TIME_SERIES_INTRADAY",
        interval: "5min",
        output_size: "compact",
        datatype: "json",
      },
      headers: {
        "X-RapidAPI-Host": HOST,
        "X-RapidAPI-Key": KEY,
      },
    };

    let response = await axios(options);
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

export const getTSDailyAdjusted = async (req, res) => {
  const HOST = process.env.RAPID_API_HOST;
  const KEY = process.env.RAPID_API_KEY;
  try {
    const options = {
      method: "GET",
      url: "https://" + HOST + "/query",
      params: {
        function: "TIME_SERIES_DAILY_ADJUSTED",
        symbol: "MSFT",
        outputsize: "compact",
        datatype: "json",
      },
      headers: {
        "X-RapidAPI-Host": HOST,
        "X-RapidAPI-Key": KEY,
      },
    };

    let response = await axios(options);
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

export const getTSDaily = async (req, res) => {
  const HOST = process.env.RAPID_API_HOST;
  const KEY = process.env.RAPID_API_KEY;
  try {
    const options = {
      method: "GET",
      url: "https://" + HOST + "/query",
      params: {
        function: "TIME_SERIES_DAILY",
        symbol: "MSFT",
        outputsize: "compact",
        datatype: "json",
      },
      headers: {
        "X-RapidAPI-Host": HOST,
        "X-RapidAPI-Key": KEY,
      },
    };

    let response = await axios(options);
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

export const getTSWeeklyAdjusted = async (req, res) => {
  const HOST = process.env.RAPID_API_HOST;
  const KEY = process.env.RAPID_API_KEY;
  try {
    const options = {
      method: "GET",
      url: "https://" + HOST + "/query",
      params: {
        function: "TIME_SERIES_WEEKLY_ADJUSTED",
        symbol: "MSFT",
        datatype: "json",
      },
      headers: {
        "X-RapidAPI-Host": HOST,
        "X-RapidAPI-Key": KEY,
      },
    };
    let response = await axios(options);
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

export const getTSWeekly = async (req, res) => {
  const HOST = process.env.RAPID_API_HOST;
  const KEY = process.env.RAPID_API_KEY;
  try {
    const options = {
      method: "GET",
      url: "https://" + HOST + "/query",
      params: {
        function: "TIME_SERIES_WEEKLY",
        symbol: "MSFT",
        datatype: "json",
      },
      headers: {
        "X-RapidAPI-Host": HOST,
        "X-RapidAPI-Key": KEY,
      },
    };

    let response = await axios(options);
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

export const getTSMonthlyAdjusted = async (req, res) => {
  const HOST = process.env.RAPID_API_HOST;
  const KEY = process.env.RAPID_API_KEY;
  try {
    const options = {
      method: "GET",
      url: "https://" + HOST + "/query",
      params: {
        symbol: "MSFT",
        function: "TIME_SERIES_MONTHLY_ADJUSTED",
        datatype: "json",
      },
      headers: {
        "X-RapidAPI-Host": HOST,
        "X-RapidAPI-Key": KEY,
      },
    };

    let response = await axios(options);
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

export const getTSMonthly = async (req, res) => {
  const HOST = process.env.RAPID_API_HOST;
  const KEY = process.env.RAPID_API_KEY;
  try {
    const options = {
      method: "GET",
      url: "https://"+HOST+"/query",
      params: {
        symbol: "MSFT",
        function: "TIME_SERIES_MONTHLY",
        datatype: "json",
      },
      headers: {
        "X-RapidAPI-Host": HOST,
        "X-RapidAPI-Key": KEY,
      },
    };

    let response = await axios(options);
    res.status(200).json(response.data);
  } catch (error) {
      console.log(error.message);
  }
};
