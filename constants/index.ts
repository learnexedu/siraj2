import { mainRoute } from "./links";

// default meta data api
export const defaultMetaApi = {
  title: "",
  description: "",
  keywords: [],
  openGraph: {
    type: "website",
    url: mainRoute,
    title: "",
    siteName: "",
    description: "",
    images: [
      {
        url: `${mainRoute}.jpg`,
        alt: "",
        type: "image/jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "",
    description: "",
    creator: "@shwernisa",
    images: [
      {
        url: `${mainRoute}.jpg`,
        alt: "",
        type: "image/jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: `${mainRoute}favicon.ico`,
};
