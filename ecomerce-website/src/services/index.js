const URL_BASE = "http://localhost:1337";

export const useGetContent = async () => {
  try {
    const data = await fetch(URL_BASE + `/homepage`, {
      headers: {
        Accept: "application/json, text/plain, */*",
        "User-Agent": "*",
      },
    });
    return await data.json();
  } catch (error) {
    console.log("error", error);
  }
};
