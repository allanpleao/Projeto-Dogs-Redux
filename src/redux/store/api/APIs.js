export const FETCH_PHOTOS = (page) => {
  return {
    url: `https://dogsapi.origamid.dev/json/api/photo/?_page=${page}&_total=9&_user=0`,
    options: {
      method: "GET",
      header: { "Content-Type": "application/json" },
    },
    cache: "noo-store",
  };
};
