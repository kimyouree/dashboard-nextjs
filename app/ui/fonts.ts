// we'll use this file to keep fonts that will
// be used throughout your app

import { Inter, Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({
	subsets: ["latin"],
	weight: ["400", "700"],
});
