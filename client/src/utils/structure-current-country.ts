import { CountryBasicInfo } from "../types/country";

export function structureData(input: CountryBasicInfo) {
  const countryBasicInfo = [
    { title: "Capital", index: "capital", content: input?.capital },
    {
      title: "Language",
      index: "language",
      content: input?.languages[0],
    },
    {
      title: "Total size",
      index: "total_size",
      content: `${input?.totalSize} km² `,
    },
  ];

  const countryStats = [
    {
      iconId: "popualtion",
      index: "popualtion",
      content: input?.population,
    },
    {
      iconId: "currency",
      index: "currency",
      content: input?.currencies[0],
    },
    {
      iconId: "location",
      index: "location",
      content: input?.subregion,
    },
    {
      iconId: "climate",
      index: "climate",
      content: input?.climate,
    },
  ];
  return { countryBasicInfo, countryStats };
}
